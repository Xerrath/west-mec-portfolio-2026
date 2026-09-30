// Site-wide info: name, role, links, and the page order.
// The page order drives the menu AND the Back / Next buttons at the bottom of every page.
// sections are jump links to parts of a page; they show under that page in the menu.

export const site = {
  name: "Alan McCall",
  role: "Coding Instructor",
  school: "West-MEC Central Campus",
  program: "Software & Web Application Development",
  tagline: "Building developers one project at a time.",
  github: "https://github.com/Xerrath",
  resume: "", // TBD: paste a public resume link to show the Resume button
};

export const pages = [
  {
    href: "/",
    label: "Home",
    sections: [
      { href: "/#welcome", label: "Welcome" },
      { href: "/#mission", label: "Mission" },
      { href: "/#skills", label: "Skills" },
      { href: "/#projects", label: "Projects" },
    ],
  },
  { href: "/about", label: "My Story" },
  { href: "/classroom", label: "Classroom" },
  { href: "/blog", label: "Blog" },
];
