"use client";

import { useEffect, useRef, useState } from "react";
import { skills, skillCategories } from "@/data/skills";
import styles from "./SkillBars.module.css";

const DURATION = 1400;

// One category of bars. The fill and the number count up every time it scrolls into view,
// and reset to 0 once it leaves the screen.
function SkillGroup({ category, items }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame;

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(frame);
        if (!entry.isIntersecting) {
          setProgress(0);
          return;
        }
        if (reduceMotion) {
          setProgress(1);
          return;
        }
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / DURATION, 1);
          setProgress(1 - Math.pow(1 - t, 3)); // ease out
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={styles.group}>
      <h3 className={styles.category}>{category}</h3>
      <ul className={styles.list}>
        {items.map((skill) => {
          const shown = Math.round(skill.confidence * progress);
          return (
            <li key={skill.name}>
              <a className={styles.skill} href={skill.link} target="_blank" rel="noreferrer">
                <span className={styles.label}>
                  <span className={styles.name}>{skill.name}</span>
                  <span className={styles.percent}>{shown}%</span>
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
        })}
      </ul>
    </div>
  );
}

export default function SkillBars() {
  return (
    <div className={styles.groups}>
      {skillCategories.map((category) => {
        const items = skills
          .filter((skill) => skill.category === category)
          .sort((a, b) => b.confidence - a.confidence);
        return items.length ? <SkillGroup key={category} category={category} items={items} /> : null;
      })}
    </div>
  );
}
