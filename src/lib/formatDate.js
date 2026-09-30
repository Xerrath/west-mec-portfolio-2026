// "2026-09-29" -> "September 29, 2026". UTC so the server and browser always agree.
export function formatDate(date) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}
