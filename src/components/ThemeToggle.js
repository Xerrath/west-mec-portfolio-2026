"use client";

import { useSyncExternalStore } from "react";
import styles from "./ThemeToggle.module.css";

// The theme lives on <html data-theme>. The head script in layout.js sets it before paint.
function subscribe(callback) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const isDark = () => document.documentElement.dataset.theme === "dark";

// The Light / Dark slider from the first portfolio, as a real switch
export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  function toggle() {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Light</span>
      <button type="button" role="switch" aria-checked={dark} aria-label="Dark mode" className={styles.switch} onClick={toggle}>
        <span className={styles.knob} />
      </button>
      <span className={styles.label}>Dark</span>
    </div>
  );
}
