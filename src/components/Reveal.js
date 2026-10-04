"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

// Slides + fades its content in from one side ("top", "left", or "right") when it scrolls into view.
// Like the skill bars it replays: it hides again once it is fully off screen.
export default function Reveal({ from = "top", delay = 0, className = "", children }) {
  const ref = useRef(null);
  // null until the observer reports, so the server HTML (and no-JS visitors) still show the content
  const [shown, setShown] = useState(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Show once 80px of it is above the bottom edge, so the slide happens where you can see it
    const showObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShown(true);
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    // Hide only when every pixel has left the screen, so it never flickers at the edge
    const hideObserver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setShown(false);
    });

    showObserver.observe(element);
    hideObserver.observe(element);
    return () => {
      showObserver.disconnect();
      hideObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[from]} ${shown === false ? styles.hidden : ""} ${className}`}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
