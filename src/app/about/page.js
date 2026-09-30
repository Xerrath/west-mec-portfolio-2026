import Timeline from "@/components/Timeline";

export const metadata = { title: "My Story" };

export default function AboutPage() {
  return (
    <section className="section">
      <span className="section-label">My story</span>
      <h1>How I got here</h1>
      <p className="lead">From high school jobs to the Army, climbing gyms, and the classroom. Scroll through it.</p>
      <Timeline />
    </section>
  );
}
