// Student links. Add one: copy an object, change the values.
// years: which class it's for ("Year 1", "Year 2", or both).
// category must match one of linkCategories, or it won't show.

export const linkCategories = ["Our Class Sites", "Documentation", "Guides", "Tools", "Design", "Practice"];
export const linkYears = ["Year 1", "Year 2"];

export const studentLinks = [
  // Our Class Sites
  { name: "Color Lab", category: "Our Class Sites", years: ["Year 1"], link: "https://xerrath.github.io/Color-Lab/", description: "Color wheel, palette generator, contrast checker, and the :root builder." },
  { name: "Layout Explorer", category: "Our Class Sites", years: ["Year 1"], link: "https://xerrath.github.io/Layout-Explorer/", description: "Common web layouts with mobile and PC views." },
  { name: "True Blogger API", category: "Our Class Sites", years: ["Year 1", "Year 2"], link: "https://true-blogger-api.app", description: "The blog API we fetch, post, and delete from." },

  // Documentation
  { name: "MDN: HTML", category: "Documentation", years: ["Year 1", "Year 2"], link: "https://developer.mozilla.org/en-US/docs/Web/HTML", description: "The docs we read in every Doc Hunt." },
  { name: "MDN: CSS", category: "Documentation", years: ["Year 1", "Year 2"], link: "https://developer.mozilla.org/en-US/docs/Web/CSS", description: "Every property, with examples you can try." },
  { name: "MDN: JavaScript", category: "Documentation", years: ["Year 1", "Year 2"], link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", description: "The language reference and guides." },
  { name: "React Docs", category: "Documentation", years: ["Year 2"], link: "https://react.dev/learn", description: "Components, props, state, and hooks." },
  { name: "Next.js Docs", category: "Documentation", years: ["Year 2"], link: "https://nextjs.org/docs", description: "Routing, pages, and building a full app." },
  { name: "MongoDB Docs", category: "Documentation", years: ["Year 2"], link: "https://www.mongodb.com/docs/", description: "Databases, collections, and CRUD." },
  { name: "Tailwind CSS Docs", category: "Documentation", years: ["Year 2"], link: "https://tailwindcss.com/docs", description: "Utility classes for styling right in your HTML or JSX." },
  { name: "Konva Docs", category: "Documentation", years: ["Year 2"], link: "https://konvajs.org/docs/", description: "Draw shapes, images, and animations on an HTML canvas." },
  { name: "Three.js Docs", category: "Documentation", years: ["Year 2"], link: "https://threejs.org/docs/", description: "Build 3D scenes in the browser with JavaScript." },
  { name: "Quick Ref", category: "Documentation", years: ["Year 1", "Year 2"], link: "https://quickref.me/", description: "One-page cheat sheets for almost any language." },

  // Guides (tutorials and explainers, not official docs)
  { name: "W3Schools", category: "Guides", years: ["Year 1", "Year 2"], link: "https://www.w3schools.com/", description: "Short tutorials with a Try it Yourself editor on every page." },
  { name: "CSS-Tricks", category: "Guides", years: ["Year 1", "Year 2"], link: "https://css-tricks.com/", description: "Articles and visual guides for CSS, like the famous flexbox and grid guides." },
  { name: "GeeksforGeeks", category: "Guides", years: ["Year 2"], link: "https://www.geeksforgeeks.org/", description: "Explanations of programming and computer science topics with code examples." },
  { name: "OverAPI", category: "Guides", years: ["Year 1", "Year 2"], link: "https://overapi.com/", description: "A collection of cheat sheets, one page per language." },
  { name: "ERD Guide", category: "Guides", years: ["Year 2"], link: "https://www.visual-paradigm.com/guide/data-modeling/what-is-entity-relationship-diagram/", description: "How to read and draw entity relationship diagrams for a database." },
  { name: "UML Package Diagrams", category: "Guides", years: ["Year 2"], link: "https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-package-diagram/", description: "What package diagrams show and how to draw one." },

  // Tools
  { name: "Visual Studio Code", category: "Tools", years: ["Year 1", "Year 2"], link: "https://code.visualstudio.com/", description: "The code editor we build every project in." },
  { name: "W3C Validator", category: "Tools", years: ["Year 1", "Year 2"], link: "https://validator.w3.org/", description: "Checks your HTML for errors." },
  { name: "Box-Shadow Generator", category: "Tools", years: ["Year 1"], link: "https://box-shadow.dev/", description: "Build a shadow visually, then copy the CSS." },
  { name: "CSS Gradient", category: "Tools", years: ["Year 1"], link: "https://cssgradient.io/", description: "Build a gradient visually, then copy the CSS." },
  { name: "ESLint Playground", category: "Tools", years: ["Year 2"], link: "https://eslint.org/play/", description: "Paste JavaScript to find syntax mistakes." },
  { name: "Postman", category: "Tools", years: ["Year 2"], link: "https://www.postman.com/", description: "Test API requests before you write the code." },
  { name: "npm", category: "Tools", years: ["Year 2"], link: "https://www.npmjs.com/", description: "Find and install JavaScript packages." },
  { name: "GitHub", category: "Tools", years: ["Year 1", "Year 2"], link: "https://github.com/", description: "Where we save, share, and publish our code." },
  { name: "CodePen", category: "Tools", years: ["Year 1", "Year 2"], link: "https://codepen.io/", description: "Try HTML, CSS, and JavaScript in the browser and see the result live." },
  { name: "Text Compare", category: "Tools", years: ["Year 1", "Year 2"], link: "https://text-compare.com/", description: "Paste two versions of your code to see exactly what changed." },
  { name: "PlantUML", category: "Tools", years: ["Year 2"], link: "https://plantuml.com/", description: "Type a few lines of text and get a UML diagram." },
  { name: "SQLiteStudio", category: "Tools", years: ["Year 2"], link: "https://sqlitestudio.pl/", description: "A free app for opening and editing SQLite databases." },
  { name: "pgAdmin", category: "Tools", years: ["Year 2"], link: "https://www.pgadmin.org/", description: "A free app for managing PostgreSQL databases." },

  // Design
  { name: "Figma", category: "Design", years: ["Year 1", "Year 2"], link: "https://www.figma.com/", description: "Design and wireframe a site before you build it." },
  { name: "Lucidchart", category: "Design", years: ["Year 1", "Year 2"], link: "https://www.lucidchart.com/", description: "Draw flowcharts, sitemaps, and diagrams." },
  { name: "Readymag Examples", category: "Design", years: ["Year 1", "Year 2"], link: "https://readymag.com/examples/", description: "Real sites people built, for layout and design ideas." },
  { name: "Bootstrap Icons", category: "Design", years: ["Year 1", "Year 2"], link: "https://icons.getbootstrap.com/", description: "Free SVG icons you can copy into any project." },
  { name: "Lordicon", category: "Design", years: ["Year 1", "Year 2"], link: "https://lordicon.com/", description: "Animated icons for buttons and menus." },
  { name: "CSSmatic", category: "Design", years: ["Year 1"], link: "https://www.cssmatic.com/", description: "Generators for gradients, border radius, and noise textures." },
  { name: "Clippy", category: "Design", years: ["Year 1"], link: "https://bennettfeely.com/clippy/", description: "Drag points to cut shapes with clip-path, then copy the CSS." },
  { name: "HTML Arrows", category: "Design", years: ["Year 1"], link: "https://www.toptal.com/designers/htmlarrows/", description: "HTML codes for arrows, symbols, and special characters." },
  { name: "Unicode Table", category: "Design", years: ["Year 1"], link: "https://unicode-table.com/en/", description: "Find any character or emoji and its code." },

  // Practice
  { name: "Flexbox Froggy", category: "Practice", years: ["Year 1"], link: "https://flexboxfroggy.com/", description: "Learn flexbox by moving frogs onto lily pads." },
  { name: "Grid Garden", category: "Practice", years: ["Year 1"], link: "https://cssgridgarden.com/", description: "Learn CSS grid by watering a garden." },
  { name: "Flexbox Labs", category: "Practice", years: ["Year 1"], link: "https://flexboxlabs.netlify.app/", description: "Change flexbox and grid settings and watch the layout update live." },
  { name: "Codewars", category: "Practice", years: ["Year 1", "Year 2"], link: "https://www.codewars.com/", description: "Short coding challenges that rank up as you go." },
  { name: "HackerRank", category: "Practice", years: ["Year 1", "Year 2"], link: "https://www.hackerrank.com/", description: "Coding challenges by language and topic, with a ranking system." },
  { name: "CSS Battle", category: "Practice", years: ["Year 1", "Year 2"], link: "https://cssbattle.dev/", description: "Recreate a target picture with as little CSS as you can." },
  { name: "LeetCode", category: "Practice", years: ["Year 2"], link: "https://leetcode.com/", description: "Problem solving practice, the kind used in job interviews." },
];
