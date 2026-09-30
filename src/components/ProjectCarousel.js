"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { liveProjects } from "@/data/projects";
import styles from "./ProjectCarousel.module.css";

// Swipe, use the arrows, or tap a dot. Cards snap into place.
// Phone: one full card, with arrows + dots in a bar underneath. PC: three cards, arrows on the sides.
export default function ProjectCarousel() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(1);

  function measure() {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!card) return;
    const step = card.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);
    setPerView(Math.max(1, Math.round(track.clientWidth / step)));
    setCurrent(Math.round(track.scrollLeft / step));
  }

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  function goTo(index) {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!card) return;
    const step = card.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);
    track.scrollTo({ left: index * step, behavior: "smooth" });
  }

  // One dot per stop: 5 on a phone, 3 on PC (the last stop shows the last three cards)
  const stops = Math.max(1, liveProjects.length - perView + 1);
  const atStart = current <= 0;
  const atEnd = current >= stops - 1;

  return (
    <div className={styles.carousel}>
      <ul ref={trackRef} className={styles.track} onScroll={measure}>
        {liveProjects.map((project) => (
          <li key={project.name} className={styles.card}>
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
                <a className="eclipse eclipse-accent" href={project.liveUrl} target="_blank" rel="noreferrer">
                  Visit live
                </a>
                {project.repoUrl && (
                  <a className="eclipse" href={project.repoUrl} target="_blank" rel="noreferrer">
                    Code
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <button type="button" className={`${styles.arrow} ${styles.left}`} onClick={() => goTo(current - 1)} disabled={atStart} aria-label="Previous project">
          &larr;
        </button>
        <div className={styles.dots}>
          {Array.from({ length: stops }, (_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.dot} ${index === current ? styles.dotOn : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Go to project ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>
        <button type="button" className={`${styles.arrow} ${styles.right}`} onClick={() => goTo(current + 1)} disabled={atEnd} aria-label="Next project">
          &rarr;
        </button>
      </div>
    </div>
  );
}
