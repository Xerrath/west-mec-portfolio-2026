"use client";

import { useEffect, useRef, useState } from "react";
import { skills, skillFrames } from "@/data/skills";
import styles from "./SkillBars.module.css";

const DURATION = 1400;
const SETTLE_DELAY = 300;

// Bars already on screen at page load wait for the fonts plus a short pause,
// so the fill plays on a settled page (big classroom monitors) instead of during loading.
let pageSettled;
function whenPageSettled() {
  pageSettled ??= (document.fonts?.ready ?? Promise.resolve()).then(
    () => new Promise((resolve) => setTimeout(resolve, SETTLE_DELAY))
  );
  return pageSettled;
}

// One bar. It fills and counts up on its own every time it scrolls into view,
// and resets to 0 once it leaves the screen, so bars load one by one as you scroll.
function SkillBar({ skill }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame;
    let run = 0; // bumps on every enter / leave so a stale wait never starts an old animation

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(frame);
        run += 1;
        if (!entry.isIntersecting) {
          setProgress(0);
          return;
        }
        if (reduceMotion) {
          setProgress(1);
          return;
        }
        const thisRun = run;
        whenPageSettled().then(() => {
          if (thisRun !== run) return;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min((now - start) / DURATION, 1);
            setProgress(1 - Math.pow(1 - t, 3)); // ease out
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        });
      },
      // Start once the whole bar is 40px above the bottom edge, so it fills where you can see it
      { threshold: 1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => {
      run += 1;
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const shown = Math.round(skill.confidence * progress);

  return (
    <li ref={ref}>
      <a className={styles.skill} href={skill.link} target="_blank" rel="noreferrer">
        <span className={styles.label}>
          <span className={styles.name}>{skill.name}</span>
          {/* The hidden final number holds the width from the start, so the count going 0% -> 78%
              never squeezes a long name onto a second line mid-animation (that made the page jump) */}
          <span className={styles.percent}>
            <span className={styles.percentSizer} aria-hidden="true">
              {skill.confidence}%
            </span>
            <span className={styles.percentValue}>{shown}%</span>
          </span>
        </span>
        <span
          className={styles.track}
          role="meter"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={skill.confidence}
          aria-label={`${skill.name} confidence`}
        >
          <span className={styles.fill} style={{ width: `${skill.confidence * progress}%` }} />
        </span>
      </a>
    </li>
  );
}

// One card. It can hold more than one category, each with its own heading.
function SkillFrame({ categories }) {
  return (
    <div className={styles.group}>
      {categories.map((category) => {
        const items = skills
          .filter((skill) => skill.category === category)
          .sort((a, b) => b.confidence - a.confidence);
        if (!items.length) return null;
        return (
          <section key={category} className={styles.section}>
            <h3 className={styles.category}>{category}</h3>
            <ul className={styles.list}>
              {items.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

export default function SkillBars() {
  return (
    <div className={styles.groups}>
      {skillFrames.map((categories) => (
        <SkillFrame key={categories.join("-")} categories={categories} />
      ))}
    </div>
  );
}
