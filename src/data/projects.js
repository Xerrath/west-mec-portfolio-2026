// Projects that are LIVE. Only projects with a liveUrl show up.
// repoUrl is optional: leave it out for private repos and the Code button hides.
// Add one: copy an object, change the values, and drop a screenshot in public/images/projects/.

export const projects = [
  {
    name: "True Blogger API",
    description: "A social blogging platform with public and private posts, and a REST API that every account gets. My students fetch, post, and delete from it.",
    image: "/images/projects/true-blogger.png",
    liveUrl: "https://true-blogger-api.app",
    tags: ["Next.js", "MongoDB", "REST API"],
  },
  {
    name: "Color Lab",
    description: "A color theory lab for my Year 1 students: color wheel harmonies, a palette generator, a contrast checker, and a :root builder.",
    image: "/images/projects/color-lab.png",
    liveUrl: "https://xerrath.github.io/Color-Lab/",
    repoUrl: "https://github.com/Xerrath/Color-Lab",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Layout Explorer",
    description: "Common web layouts side by side, with mobile and PC views and the media queries that switch between them.",
    image: "/images/projects/layout-explorer.png",
    liveUrl: "https://xerrath.github.io/Layout-Explorer/",
    repoUrl: "https://github.com/Xerrath/Layout-Explorer",
    tags: ["HTML", "CSS", "Grid"],
  },
  {
    name: "Burger Dev Diner",
    description: "A restaurant menu site used to teach HTML structure and CSS styling.",
    image: "/images/projects/burger-dev-diner-menu.png",
    liveUrl: "https://xerrath.github.io/Burger-Dev-Diner-Menu/",
    tags: ["HTML", "CSS"],
  },
  {
    name: "Binary Educator",
    description: "An interactive way to practice reading and writing binary numbers.",
    image: "/images/projects/binary-educator.png",
    liveUrl: "https://xerrath.github.io/binary-educator-app/",
    repoUrl: "https://github.com/Xerrath/binary-educator-app",
    tags: ["JavaScript"],
  },
];

export const liveProjects = projects.filter((project) => project.liveUrl);
