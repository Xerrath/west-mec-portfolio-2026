// Add a skill: copy one object, change the values. It sorts itself into its category.
// confidence is 0 to 100. Categories show in the order of skillCategories.
// Confidence numbers carried over from the 2025 portfolio; review before publishing.

export const skillCategories = ["Languages", "Frameworks", "Databases", "Modeling"];

export const skills = [
  { name: "HTML5", confidence: 99, category: "Languages", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", confidence: 92, category: "Languages", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", confidence: 99, category: "Languages", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "SCSS / Sass", confidence: 90, category: "Languages", link: "https://sass-lang.com/" },
  { name: "Python", confidence: 90, category: "Languages", link: "https://www.python.org/" },
  { name: "Java", confidence: 80, category: "Languages", link: "https://www.java.com/en/" },
  { name: "Lua", confidence: 75, category: "Languages", link: "https://www.lua.org/" },
  { name: "C#", confidence: 60, category: "Languages", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "C++", confidence: 60, category: "Languages", link: "https://learn.microsoft.com/en-us/cpp/cpp/" },
  { name: "C", confidence: 60, category: "Languages", link: "https://en.cppreference.com/w/c" },

  { name: "React", confidence: 80, category: "Frameworks", link: "https://react.dev/" },
  { name: "Next.js", confidence: 80, category: "Frameworks", link: "https://nextjs.org/" },
  { name: "Tailwind CSS", confidence: 80, category: "Frameworks", link: "https://tailwindcss.com/" },
  { name: "Bootstrap", confidence: 80, category: "Frameworks", link: "https://getbootstrap.com/" },
  { name: "Konva (JS)", confidence: 80, category: "Frameworks", link: "https://konvajs.org/" },
  { name: "Mantine", confidence: 60, category: "Frameworks", link: "https://mantine.dev/" },
  { name: "MUI", confidence: 60, category: "Frameworks", link: "https://mui.com/" },

  { name: "SQL", confidence: 80, category: "Databases", link: "https://www.w3schools.com/sql/" },
  { name: "MongoDB", confidence: 80, category: "Databases", link: "https://www.mongodb.com/" },
  { name: "MySQL", confidence: 80, category: "Databases", link: "https://www.mysql.com/" },
  { name: "PostgreSQL", confidence: 80, category: "Databases", link: "https://www.postgresql.org/" },
  { name: "SQLite", confidence: 80, category: "Databases", link: "https://www.sqlite.org/" },
  { name: "Redis", confidence: 60, category: "Databases", link: "https://redis.io/" },
  { name: "AWS S3", confidence: 40, category: "Databases", link: "https://aws.amazon.com/s3/" },

  { name: "UML", confidence: 90, category: "Modeling", link: "https://www.uml.org/" },
];
