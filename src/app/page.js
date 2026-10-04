import Image from "next/image";
import Link from "next/link";
import SkillBars from "@/components/SkillBars";
import Certifications from "@/components/Certifications";
import ProjectCarousel from "@/components/ProjectCarousel";
import { site } from "@/data/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section id="welcome" className={`section ${styles.hero}`}>
        <div className={styles.heroText}>
          <span className="section-label">{site.program}</span>
          <h1>{site.name}</h1>
          <p className={styles.role}>
            {site.role} &middot; {site.school}
          </p>
          <p className="lead">{site.tagline}</p>
          <div className={styles.actions}>
            <Link href="/#projects" className="eclipse eclipse-accent">
              See my projects
            </Link>
            <Link href="/classroom" className="eclipse">
              Student links
            </Link>
          </div>
        </div>
        <div className={styles.portrait}>
          <Image src="/images/portrait.jpg" alt={`Portrait of ${site.name}`} width={359} height={480} priority />
        </div>
        {/* QR code to the live site, PC only: pinned top right under the top bar while you scroll.
            On phones it lives in the hamburger menu instead (SiteMenu). */}
        <aside className={`qr-pinned ${styles.qr}`} aria-label="QR code">
          <Image src="/images/misc-pics/portfolio-qr-code.png" alt="QR code that opens this portfolio's live site" width={450} height={450} />
          <span className={styles.qrLabel}>Scan to visit</span>
        </aside>
      </section>

      <section className={`section ${styles.split}`}>
        <div className="card">
          <span className="section-label">About me</span>
          <h2>Hello, I&apos;m Mr. McCall</h2>
          <p>
            I teach the two-year {site.program} program at West-MEC. My students learn to build real websites and apps: HTML, CSS, and
            JavaScript first, then React, Next.js, and databases.
          </p>
          <p>
            Before teaching, I served in the US Army with two tours in Afghanistan, coached rock climbing around Phoenix, and earned a full stack development certification from Bottega.
          </p>
          <Link href="/about" className="eclipse">
            My story
          </Link>
        </div>

        <div id="mission" className={`card ${styles.mission}`}>
          <span className="section-label">Mission</span>
          <h2>Why I teach</h2>
          <p>
            To give my students skills the tech industry actually uses, and the confidence to keep learning on their own after they leave my
            room.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <span className="section-label">Skills</span>
        <h2>What I build with</h2>
        <SkillBars />
      </section>

      <section id="certifications" className="section">
        <span className="section-label">Degrees and Certifications</span>
        <h2>What I have earned</h2>
        <Certifications />
      </section>

      <section id="projects" className="section">
        <span className="section-label">Projects</span>
        <h2>Live projects</h2>
        <p className="lead">Every one of these is running right now. Open one and try it.</p>
        <ProjectCarousel />
      </section>
    </>
  );
}
