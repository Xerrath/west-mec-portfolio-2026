"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { liveProjects } from "@/data/projects";
import styles from "./ProjectCarousel.module.css";

// Copies of the last / first cards placed before / after the real ones, so the loop has
// something to scroll into. 3 = the most cards on screen at once (PC).
const CLONES = 3;
const count = liveProjects.length;
const slides = [
  ...liveProjects.slice(-CLONES).map((project) => ({ project, clone: true, key: `before-${project.name}` })),
  ...liveProjects.map((project) => ({ project, clone: false, key: project.name })),
  ...liveProjects.slice(0, CLONES).map((project) => ({ project, clone: true, key: `after-${project.name}` })),
];

// Width of one card plus the gap after it
function stepOf(track) {
  const card = track?.querySelector("li");
  if (!card) return 0;
  return card.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);
}

// Swipe, use the arrows, or tap a dot. Cards snap into place, and it loops forever both ways:
// once the scroll settles on a copy, it jumps (instantly, so you can't see it) to the real card.
// Phone: one full card, with arrows + dots in a bar underneath.
// PC: three cards between two tall, narrow tab buttons (the style from my first portfolio).
export default function ProjectCarousel() {
  const trackRef = useRef(null);
  const settleRef = useRef(null);
  const currentRef = useRef(0);
  const [current, setCurrent] = useState(0);

  // Start on the first real card, and stay on the same card when the screen is resized
  useEffect(() => {
    const track = trackRef.current;
    function place() {
      track.scrollTo({ left: (currentRef.current + CLONES) * stepOf(track), behavior: "instant" });
    }
    place();
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("resize", place);
      clearTimeout(settleRef.current);
    };
  }, []);

  function onScroll() {
    const track = trackRef.current;
    const step = stepOf(track);
    if (!step) return;
    const raw = Math.round(track.scrollLeft / step);
    const index = (((raw - CLONES) % count) + count) % count;
    currentRef.current = index;
    setCurrent(index);

    // Wait until scrolling stops, then hop from a copy back onto the matching real card
    clearTimeout(settleRef.current);
    settleRef.current = setTimeout(() => {
      const settled = Math.round(track.scrollLeft / step);
      if (settled < CLONES || settled >= CLONES + count) {
        track.scrollTo({ left: (index + CLONES) * step, behavior: "instant" });
      }
    }, 120);
  }

  function move(direction) {
    const track = trackRef.current;
    track.scrollBy({ left: direction * stepOf(track), behavior: "smooth" });
  }

  function goTo(index) {
    const track = trackRef.current;
    track.scrollTo({ left: (index + CLONES) * stepOf(track), behavior: "smooth" });
  }

  return (
    <div className={styles.carousel}>
      <ul ref={trackRef} className={styles.track} onScroll={onScroll}>
        {slides.map(({ project, clone, key }) => (
          // Copies stay clickable (on PC they fill the slots next to the last cards), but screen readers
          // skip them and Tab skips their links, so each project is only announced once.
          // Not `inert`: that also blocks mouse clicks, which broke "Visit live" on the copies.
          <li key={key} className={styles.card} aria-hidden={clone || undefined}>
            <div className={styles.shot}>
              <Image src={project.image} alt={`Screenshot of ${project.name}`} width={1280} height={800} sizes="(min-width: 1024px) 30vw, 90vw" />
            </div>
            <div className={styles.body}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className={styles.actions}>
                <a className="eclipse eclipse-accent" href={project.liveUrl} target="_blank" rel="noreferrer" tabIndex={clone ? -1 : undefined}>
                  Visit live
                </a>
                {project.repoUrl && (
                  <a className="eclipse" href={project.repoUrl} target="_blank" rel="noreferrer" tabIndex={clone ? -1 : undefined}>
                    Code
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <button type="button" className={`${styles.arrow} ${styles.left}`} onClick={() => move(-1)} aria-label="Previous project">
          &lt;
        </button>
        {/* One dot per project; on PC the dot marks the card on the left */}
        <div className={styles.dots}>
          {liveProjects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              className={`${styles.dot} ${index === current ? styles.dotOn : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Go to ${project.name}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>
        <button type="button" className={`${styles.arrow} ${styles.right}`} onClick={() => move(1)} aria-label="Next project">
          &gt;
        </button>
      </div>
    </div>
  );
}
