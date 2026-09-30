import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate";
import styles from "./Blog.module.css";

// Cover image, or a letter tile when a post has no cover
// coverFocus comes from True Blogger: { x, y } is the center point in %, zoom is 1 to 3
export function BlogCover({ post, className, sizes, priority = false }) {
  if (post.cover) {
    const focus = post.coverFocus;
    const style = focus
      ? {
          objectPosition: `${focus.x}% ${focus.y}%`,
          transform: focus.zoom > 1 ? `scale(${focus.zoom})` : undefined,
          transformOrigin: `${focus.x}% ${focus.y}%`,
        }
      : undefined;
    return (
      <div className={className}>
        <Image src={post.cover} alt="" width={1280} height={800} sizes={sizes} priority={priority} style={style} />
      </div>
    );
  }
  return (
    <div className={`${className} ${styles.letterTile}`} aria-hidden="true">
      <span>{post.title.charAt(0).toUpperCase()}</span>
    </div>
  );
}

export function BlogMeta({ post }) {
  return (
    <p className={styles.meta}>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true">&middot;</span>
      <span>{post.minutes} min read</span>
    </p>
  );
}

export function BlogTags({ post, limit = 3 }) {
  return (
    <ul className={styles.tags}>
      {post.tags.slice(0, limit).map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

// Thumbnail view: a grid of cards
export function BlogThumbCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.thumbCard}>
      <BlogCover post={post} className={styles.thumbCover} sizes="(min-width: 1024px) 30vw, 90vw" />
      <div className={styles.thumbBody}>
        <BlogMeta post={post} />
        <h3>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <BlogTags post={post} />
      </div>
    </Link>
  );
}

// Large view: one wide card per row, cover beside the text (PC only)
export function BlogLargeCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.largeCard}>
      <BlogCover post={post} className={styles.largeCover} sizes="45vw" />
      <div className={styles.largeBody}>
        <BlogMeta post={post} />
        <h3>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <BlogTags post={post} limit={5} />
        <span className={`eclipse ${styles.readMore}`}>Read post &rarr;</span>
      </div>
    </Link>
  );
}

// List view: compact rows for scanning many posts
export function BlogListRow({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.listRow}>
      <BlogCover post={post} className={styles.listCover} sizes="4rem" />
      <div className={styles.listText}>
        <h3>{post.title}</h3>
        <p className={styles.listExcerpt}>{post.excerpt}</p>
        <BlogMeta post={post} />
      </div>
      <div className={styles.listTags}>
        <BlogTags post={post} />
      </div>
    </Link>
  );
}
