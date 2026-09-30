"use client";

import { useState } from "react";
import { studentLinks, linkCategories, linkYears } from "@/data/studentLinks";
import styles from "./StudentLinks.module.css";

export default function StudentLinks() {
  const [year, setYear] = useState("All");
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();
  const shown = studentLinks.filter((item) => {
    const yearMatch = year === "All" || item.years.includes(year);
    const textMatch = !query || `${item.name} ${item.description}`.toLowerCase().includes(query);
    return yearMatch && textMatch;
  });

  return (
    <div>
      <div className={styles.controls}>
        <div className={styles.filters} role="group" aria-label="Show links for">
          {["All", ...linkYears].map((option) => (
            <button
              key={option}
              type="button"
              className={`${styles.chip} ${year === option ? styles.chipOn : ""}`}
              aria-pressed={year === option}
              onClick={() => setYear(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <label className={styles.search}>
          <span className="sr-only">Search links</span>
          <input type="search" placeholder="Search links..." value={search} onChange={(event) => setSearch(event.target.value)} />
        </label>
      </div>

      {shown.length === 0 && <p className={styles.empty}>No links match that search.</p>}

      {linkCategories.map((category) => {
        const items = shown.filter((item) => item.category === category);
        if (!items.length) return null;
        return (
          <section key={category} className={styles.group}>
            <h2 className={styles.heading}>{category}</h2>
            <ul className={styles.grid}>
              {items.map((item) => (
                <li key={item.name}>
                  <a className={styles.link} href={item.link} target="_blank" rel="noreferrer">
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.description}>{item.description}</span>
                    <span className={styles.years}>{item.years.join(" · ")}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
