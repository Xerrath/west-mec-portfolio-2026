"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./QrCard.module.css";

// Remembers each visitor's choice in their own browser
const STORAGE_KEY = "qr-open";
// Below this width the card has no empty margin to sit in, so it covers content and starts folded
const ROOMY = "(min-width: 1440px)";

// QR code to the live site, PC only: floats top right under the top bar on its own layer,
// so it never changes the page layout. The header button folds it down to a slim tab.
// Phones get the QR in the hamburger menu instead (SiteMenu).
export default function QrCard() {
  // null until we know the saved choice / screen size, so it never flashes open then folds
  const [open, setOpen] = useState(null);

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading the browser-only saved choice once on mount
    setOpen(saved ? saved === "true" : window.matchMedia(ROOMY).matches);
  }, []);

  function toggle() {
    const next = !open;
    setOpen(next);
    try {
      localStorage.setItem(STORAGE_KEY, String(next));
    } catch {}
  }

  return (
    <aside className={`${styles.qr} ${open ? styles.open : ""} ${open === null ? styles.pending : ""}`} aria-label="QR code">
      <button type="button" className={styles.toggle} onClick={toggle} aria-expanded={Boolean(open)} aria-controls="qr-code-image">
        <span>{open ? "Scan me" : "Show QR"}</span>
        <svg className={styles.chevron} viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {/* The code keeps its white background in dark mode so phones can always read it */}
      <div id="qr-code-image" className={styles.body} inert={!open}>
        <div className={styles.inner}>
          <Image src="/images/misc-pics/portfolio-qr-code.png" alt="QR code that opens this portfolio's live site" width={450} height={450} />
        </div>
      </div>
    </aside>
  );
}
