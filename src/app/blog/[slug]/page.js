import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, toCard } from "@/lib/posts";
import { BlogCover, BlogMeta, BlogThumbCard } from "@/components/BlogViews";
import TiptapContent from "@/components/TiptapContent";
import styles from "./page.module.css";

// Rendered on every visit, so a new or edited True Blogger post shows up right away
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { post } = await getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : { title: "Post not found" };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const { posts, index, post } = await getPost(slug);
  if (!post) notFound();

  // Newest first, so the newer post sits before this one in the list
  const newer = posts[index - 1];
  const older = posts[index + 1];
  const related = posts
    .filter((item) => item.slug !== post.slug && item.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3)
    .map(toCard);

  return (
    <>
      <article className={`section ${styles.article}`}>
        <Link href="/blog" className={styles.back}>
          &larr; All posts
        </Link>

        <header className={styles.header}>
          <BlogMeta post={post} />
          <h1>{post.title}</h1>
          {post.excerpt && <p className="lead">{post.excerpt}</p>}
          <ul className={styles.tags}>
            {post.tags.map((tag) => (
              <li key={tag}>
                <Link href={`/blog?tag=${encodeURIComponent(tag)}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </header>

        {post.cover && <BlogCover post={post} className={styles.cover} sizes="(min-width: 1024px) 46rem, 100vw" priority />}

        <div className={styles.body}>
          <TiptapContent doc={post.content} codeClass={styles.code} quoteClass={styles.quote} />
        </div>

        <p className={styles.source}>
          Also on True Blogger, where you can comment and react.{" "}
          <a href={post.url} target="_blank" rel="noreferrer">
            Read it on True Blogger &rarr;
          </a>
        </p>

        <nav className={styles.postNav} aria-label="More posts">
          {older ? (
            <Link href={`/blog/${older.slug}`} className="eclipse">
              <span aria-hidden="true">&larr;</span>
              <span className={styles.navText}>
                <span className={styles.navHint}>Older</span>
                {older.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {newer && (
            <Link href={`/blog/${newer.slug}`} className={`eclipse eclipse-accent ${styles.navNewer}`}>
              <span className={styles.navText}>
                <span className={styles.navHint}>Newer</span>
                {newer.title}
              </span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </nav>
      </article>

      {related.length > 0 && (
        <section className="section">
          <span className="section-label">Keep reading</span>
          <h2>More posts</h2>
          <div className={styles.related}>
            {related.map((item) => (
              <BlogThumbCard key={item.slug} post={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
