import { Orbitron, Exo_2 } from "next/font/google";
import SiteMenu from "@/components/SiteMenu";
import PageNav from "@/components/PageNav";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/data/site";
import "./global.css";

// Google fallbacks, used until (or if) the Adobe kit fonts load
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const exo = Exo_2({ subsets: ["latin"], variable: "--font-exo" });

export const metadata = {
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name}, ${site.role} at ${site.school}. Projects, skills, and links for my students.`,
};

// Runs before the page paints, so a saved dark mode never flashes light first
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("theme");
    var dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Adobe Fonts kit: ethnocentric, tachyon, mundial. Add the live domain to the kit in Adobe Fonts. */}
        <link rel="stylesheet" href="https://use.typekit.net/ghs0ruc.css" />
      </head>
      <body>
        <SiteMenu />
        <div id="site-content">
          <main className="page-main">
            {children}
            <PageNav />
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
