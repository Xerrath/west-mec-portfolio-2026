import { site } from "@/data/site";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p>
        {site.name} &middot; {site.role}, {site.school}
      </p>
      <a href={site.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </footer>
  );
}
