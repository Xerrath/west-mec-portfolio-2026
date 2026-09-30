import BlogBrowser from "@/components/BlogBrowser";
import { getAllPosts, toCard } from "@/lib/posts";

export const metadata = { title: "Blog" };

// Rendered on every visit with fresh posts from True Blogger
export const dynamic = "force-dynamic";

// ?view=large|list and ?tag=CSS come in from shared links and from the tag links on a post
export default async function BlogPage({ searchParams }) {
  const { view = "thumbnail", tag: rawTag = "" } = await searchParams;
  const tag = rawTag.toLowerCase();
  const posts = (await getAllPosts()).map(toCard);
  const tags = [...new Set(posts.flatMap((post) => post.tags))].sort((a, b) => a.localeCompare(b));

  return (
    <section className="section">
      <span className="section-label">Blog</span>
      <h1>Notes from the classroom</h1>
      <p className="lead">Lessons, project write-ups, and things I&apos;m learning. Switch views or search.</p>
      <BlogBrowser key={`${view}-${tag}`} posts={posts} tags={tags} initialView={view} initialTag={tag} />
    </section>
  );
}
