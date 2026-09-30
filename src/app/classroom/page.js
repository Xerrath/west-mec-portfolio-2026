import StudentLinks from "@/components/StudentLinks";

export const metadata = { title: "Classroom" };

export default function ClassroomPage() {
  return (
    <section className="section">
      <span className="section-label">Classroom</span>
      <h1>Student links</h1>
      <p className="lead">Everything you need for class in one place. Pick your year, or search.</p>
      <StudentLinks />
    </section>
  );
}
