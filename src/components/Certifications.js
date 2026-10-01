import { certifications, certFrames, degrees } from "@/data/certifications";
import styles from "./Certifications.module.css";

// "2026-02" -> "Feb 2026"
function monthYear(date) {
  const [year, month] = date.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1)).toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}

export default function Certifications() {
  return (
    <div className={styles.groups}>
      <div className={`${styles.group} ${styles.degrees}`}>
        <h3 className={styles.title}>Degrees</h3>
        <ul className={styles.degreeList}>
          {[...degrees]
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((degree) => (
              <li key={degree.name} className={styles.cert}>
                <span className={styles.name}>{degree.name}</span>
                <span className={styles.meta}>
                  {degree.school} <span aria-hidden="true">·</span> <time dateTime={degree.date}>{monthYear(degree.date)}</time>
                </span>
                <p className={styles.text}>{degree.text}</p>
              </li>
            ))}
        </ul>
      </div>
      {certFrames.map((groups) => (
        <div key={groups.join("-")} className={styles.group}>
          {groups.map((group) => {
            const items = certifications.filter((cert) => cert.group === group).sort((a, b) => b.date.localeCompare(a.date));
            if (!items.length) return null;
            return (
              <section key={group} className={styles.section}>
                <h3 className={styles.title}>{group}</h3>
                <ul className={styles.list}>
                  {items.map((cert) => (
                    <li key={cert.name} className={styles.cert}>
                      <span className={styles.name}>
                        {cert.link ? (
                          <a href={cert.link} target="_blank" rel="noreferrer">
                            {cert.name}
                          </a>
                        ) : (
                          cert.name
                        )}
                      </span>
                      <span className={styles.meta}>
                        {cert.issuer} <span aria-hidden="true">·</span> <time dateTime={cert.date}>{monthYear(cert.date)}</time>
                      </span>
                      {cert.courses && (
                        <ul className={styles.courses}>
                          {cert.courses.map((course) => (
                            <li key={course}>{course}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      ))}
    </div>
  );
}
