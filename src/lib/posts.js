// Every blog post the site shows: my public True Blogger posts, newest first.
// Server only (it calls the True Blogger API with the key).
// Drafts in src/data/blogDrafts.js are NOT shown; post them with npm run post-blog.
import { getTrueBloggerPosts } from "./trueBlogger";

export async function getAllPosts() {
  const posts = await getTrueBloggerPosts();
  return posts
    .map((post) => ({ ...post, tags: [...new Set(post.tags.map((tag) => tag.toLowerCase()))] }))
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export async function getPost(slug) {
  const posts = await getAllPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  return { posts, index, post: posts[index] };
}

// The list page doesn't need full post bodies; keep what's sent to the browser small
export function toCard({ content, ...card }) {
  return card;
}
