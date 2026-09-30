"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "@/data/site";
import styles from "./PageNav.module.css";

// Back / Next buttons at the bottom of every page. They follow the order in data/site.js.
export default function PageNav() {
  const pathname = usePathname();
  const index = pages.findIndex((page) => page.href === pathname);
  if (index === -1) return null;

  const previous = pages[index - 1];
  const next = pages[index + 1];

  return (
    <nav className={styles.pageNav} aria-label="Page navigation">
      {previous ? (
        <Link href={previous.href} className={`eclipse ${styles.button}`}>
          <span aria-hidden="true">&larr;</span>
          <span className={styles.text}>
            <span className={styles.hint}>Back</span>
            {previous.label}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={next.href} className={`eclipse eclipse-accent ${styles.button} ${styles.next}`}>
          <span className={styles.text}>
            <span className={styles.hint}>Next</span>
            {next.label}
          </span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </nav>
  );
}
