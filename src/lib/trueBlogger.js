// Pulls my public posts from the True Blogger API. SERVER ONLY: import this from server
// components and page files, never from a "use client" file, so the key never reaches the browser.
// The key lives in .env.local as TRUE_BLOGGER_API_KEY (ignored by git). A read-only key is enough.

export const TRUE_BLOGGER_URL = "https://true-blogger-api.app";

// True Blogger stores uploads as "/api/uploads/..."; make them full URLs
function absolute(url) {
  if (!url) return "";
  return url.startsWith("http") ? url : `${TRUE_BLOGGER_URL}${url}`;
}

function plainText(node) {
  if (!node) return "";
  if (node.type === "text") return node.text || "";
  return (node.content || []).map(plainText).join(" ");
}

// The shape the blog pages use
function toPost(blog) {
  const words = plainText(blog.content).split(/\s+/).filter(Boolean).length;
  return {
    source: "trueblogger",
    slug: blog.slug,
    title: blog.title,
    date: (blog.publishedAt || blog.createdAt || "").slice(0, 10),
    excerpt: blog.excerpt || "",
    tags: blog.tags || [],
    cover: absolute(blog.coverImageUrl),
    coverFocus: blog.coverFocus,
    content: blog.content,
    minutes: Math.max(1, Math.round(words / 200)),
    url: `${TRUE_BLOGGER_URL}/blogs/${blog.slug}`,
  };
}

export { absolute as trueBloggerUrl };

// Public posts only (the API also returns private ones). Returns [] if the key is
// missing or the API is down, so the blog still works with just the local posts.
export async function getTrueBloggerPosts() {
  const key = process.env.TRUE_BLOGGER_API_KEY;
  if (!key) return [];

  try {
    const response = await fetch(`${TRUE_BLOGGER_URL}/api/v1/blogs`, {
      headers: { Authorization: `Bearer ${key}` },
      // Fresh on every visit: new or edited posts show up right away (no cache to set up on Cloudflare)
      cache: "no-store",
    });
    if (!response.ok) {
      console.error(`True Blogger API returned ${response.status}`);
      return [];
    }
    const data = await response.json();
    return (data.blogs || []).filter((blog) => blog.visibility === "public").map(toPost);
  } catch (error) {
    console.error("True Blogger API request failed:", error.message);
    return [];
  }
}
