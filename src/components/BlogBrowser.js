"use client";

import { useState, useSyncExternalStore } from "react";
import { BlogThumbCard, BlogLargeCard, BlogListRow } from "./BlogViews";
import styles from "./Blog.module.css";

// Same three views as True Blogger. Large is PC only.
const VIEWS = [
  {
    value: "thumbnail",
    label: "Thumbnail view",
    icon: <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" />,
  },
  {
    value: "large",
    label: "Large card view",
    icon: <path d="M3 4h18v7H3zM3 13h18v7H3z" />,
  },
  {
    value: "list",
    label: "List view",
    icon: <path d="M3 4h4v4H3zM9 5h12v2H9zM3 10h4v4H3zM9 11h12v2H9zM3 16h4v4H3zM9 17h12v2H9z" />,
  },
];

// Is the screen PC width? Large view falls back to thumbnail below 1024px.
function subscribeWide(callback) {
  const query = window.matchMedia("(min-width: 1024px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const getWide = () => window.matchMedia("(min-width: 1024px)").matches;

export default function BlogBrowser({ posts: allPosts, tags: blogTags, initialView = "thumbnail", initialTag = "" }) {
  const [view, setView] = useState(VIEWS.some((v) => v.value === initialView) ? initialView : "thumbnail");
  const [tag, setTag] = useState(blogTags.includes(initialTag) ? initialTag : "");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const wide = useSyncExternalStore(subscribeWide, getWide, () => true);
  const shownView = view === "large" && !wide ? "thumbnail" : view;

  // Keep the view and tag in the URL so a link can be shared, without reloading the page
  function updateUrl(nextView, nextTag) {
    const params = new URLSearchParams();
    if (nextView !== "thumbnail") params.set("view", nextView);
    if (nextTag) params.set("tag", nextTag);
    const query = params.toString();
    window.history.replaceState(window.history.state, "", `/blog${query ? `?${query}` : ""}`);
  }

  function changeView(value) {
    setView(value);
    updateUrl(value, tag);
  }

  function changeTag(value) {
    setTag(value);
    updateUrl(view, value);
  }

  const query = search.trim().toLowerCase();
  let posts = allPosts.filter((post) => {
    const tagMatch = !tag || post.tags.includes(tag);
    const textMatch = !query || `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase().includes(query);
    return tagMatch && textMatch;
  });
  if (sort === "oldest") posts = [...posts].reverse();

  const Card = shownView === "large" ? BlogLargeCard : shownView === "list" ? BlogListRow : BlogThumbCard;

  return (
    <div>
      <div className={styles.toolbar}>
        <label className={styles.search}>
          <span className="sr-only">Search posts</span>
          <input type="search" placeholder="Search posts..." value={search} onChange={(event) => setSearch(event.target.value)} />
        </label>

        <div className={styles.toolbarRight}>
          <label className={styles.sort}>
            <span className={styles.sortLabel}>Sort</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </label>

          <div className={styles.viewToggle} role="group" aria-label="View">
            {VIEWS.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`${styles.viewButton} ${option.value === "large" ? styles.pcOnly : ""}`}
                aria-pressed={shownView === option.value}
                aria-label={option.label}
                title={option.label}
                onClick={() => changeView(option.value)}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  {option.icon}
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* No tag list here (it got cluttered). Tags on a post link back with ?tag=, and this pill clears it. */}
      <div className={styles.countRow}>
        <p className={styles.count} aria-live="polite">
          {posts.length} {posts.length === 1 ? "post" : "posts"}
        </p>
        {tag && (
          <button type="button" className={`${styles.chip} ${styles.chipOn}`} onClick={() => changeTag("")} aria-label={`Clear tag filter: ${tag}`}>
            Tagged: {tag} &times;
          </button>
        )}
      </div>

      {posts.length === 0 ? (
        <p className={styles.empty}>{allPosts.length ? "No posts match that search." : "No posts yet. Check back soon."}</p>
      ) : (
        <div className={styles[shownView]}>
          {posts.map((post) => (
            <Card key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
