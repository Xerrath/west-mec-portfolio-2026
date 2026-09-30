"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { site, pages } from "@/data/site";
import styles from "./SiteMenu.module.css";

export default function SiteMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  const firstLinkRef = useRef(null);
  // A page counts as current on its own path and its sub-pages (/blog and /blog/a-post)
  const isCurrent = (href) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const buttonRef = useRef(null);

  // Close the menu whenever the page changes
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // While open: lock the page behind it, move focus in, and let Escape close it
  useEffect(() => {
    const content = document.getElementById("site-content");
    if (content) content.inert = open;
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) return;
    firstLinkRef.current?.focus();

    function onKey(event) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={styles.topbar}>
        <button
          ref={buttonRef}
          type="button"
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
        <Link href="/" className={styles.brand}>
          {site.name}
        </Link>
      </header>

      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside id="site-menu" className={`${styles.panel} ${open ? styles.panelOpen : ""}`} aria-label="Site menu" inert={!open}>
        <div className={styles.profile}>
          <div className={styles.portrait}>
            <Image src="/images/portrait.jpg" alt={`Portrait of ${site.name}`} width={359} height={480} priority />
          </div>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.role}>{site.role}</p>
        </div>

        <nav className={styles.links}>
          {pages.map((page, index) => (
            <div key={page.href}>
              <Link
                href={page.href}
                ref={index === 0 ? firstLinkRef : null}
                className={`${styles.link} ${isCurrent(page.href) ? styles.linkActive : ""}`}
                aria-current={isCurrent(page.href) ? "page" : undefined}
              >
                <span>{page.label}</span>
              </Link>
              {page.sections && (
                <div className={styles.sections}>
                  {page.sections.map((section) => (
                    <Link key={section.href} href={section.href} className={styles.sectionLink} onClick={() => setOpen(false)}>
                      {section.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.extras}>
          {site.resume && (
            <a className="eclipse" href={site.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          )}
          <a className="eclipse" href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <ThemeToggle />
      </aside>
    </>
  );
}
