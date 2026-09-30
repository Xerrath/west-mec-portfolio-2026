"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { timeline } from "@/data/timeline";
import styles from "./Timeline.module.css";

// The item closest to the middle of the screen lights up, and the line fills down to it.
export default function Timeline() {
  const listRef = useRef(null);
  const [active, setActive] = useState(0);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = [...list.querySelectorAll("[data-item]")];
    let frame;

    function update() {
      // The reading line sits mid-screen, then slides to the bottom as the page runs out of scroll,
      // so the last events can still light up.
      const half = window.innerHeight / 2;
      const scrollLeft = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
      const middle = half + Math.max(0, half - scrollLeft);
      let closest = 0;
      let closestDistance = Infinity;
      items.forEach((item, index) => {
        const box = item.getBoundingClientRect();
        const distance = Math.abs(box.top + box.height / 2 - middle);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });
      const listTop = list.getBoundingClientRect().top;
      const dot = items[closest].getBoundingClientRect();
      setActive(closest);
      setFill(dot.top + dot.height / 2 - listTop);
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol ref={listRef} className={styles.timeline} style={{ "--fill": `${fill}px` }}>
      {timeline.map((entry, index) => (
        <li key={entry.date + entry.title} data-item className={`${styles.item} ${index === active ? styles.active : ""}`}>
          <div className={styles.card}>
            {entry.image && (
              <div className={styles.photo}>
                <Image src={entry.image} alt={entry.alt || ""} width={160} height={160} />
              </div>
            )}
            <div>
              <p className={styles.date}>{entry.date}</p>
              <h3 className={styles.title}>{entry.title}</h3>
              {entry.text && <p className={styles.text}>{entry.text}</p>}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
