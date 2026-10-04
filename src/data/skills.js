// Add a skill: copy one object, change the values. It sorts itself into its category.
// confidence is 0 to 100. Each inner array of skillFrames is one card; small categories share a card so the rows stay even.
// Languages / Frameworks / Databases numbers carried over from the 2025 portfolio; review before publishing.
// Cybersecurity, Data Analysis, and Project Management numbers (70 to 90) are based on BSIT coursework, certs, and Army training.

export const skillFrames = [["Cybersecurity"], ["Languages"], ["Databases"], ["Frameworks"], ["Project Management"], ["Data Analysis", "Misc"]];

export const skills = [
  { name: "HTML5", confidence: 99, category: "Languages", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", confidence: 90, category: "Languages", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", confidence: 99, category: "Languages", link: "https://www.javascript.com/" },
  { name: "SCSS / Sass", confidence: 90, category: "Languages", link: "https://sass-lang.com/" },
  { name: "Python", confidence: 95, category: "Languages", link: "https://www.python.org/" },
  { name: "Java", confidence: 80, category: "Languages", link: "https://www.java.com/en/" },
  { name: "Lua", confidence: 75, category: "Languages", link: "https://www.lua.org/" },
  { name: "C#", confidence: 60, category: "Languages", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "C++", confidence: 60, category: "Languages", link: "https://learn.microsoft.com/en-us/cpp/cpp/" },
  { name: "C", confidence: 60, category: "Languages", link: "https://en.cppreference.com/w/c" },

  { name: "React", confidence: 80, category: "Frameworks", link: "https://react.dev/" },
  { name: "Next.js", confidence: 80, category: "Frameworks", link: "https://nextjs.org/" },
  { name: "Tailwind CSS", confidence: 90, category: "Frameworks", link: "https://tailwindcss.com/" },
  { name: "Bootstrap", confidence: 80, category: "Frameworks", link: "https://getbootstrap.com/" },
  { name: "Konva (JS)", confidence: 80, category: "Frameworks", link: "https://konvajs.org/" },
  { name: "Mantine", confidence: 60, category: "Frameworks", link: "https://mantine.dev/" },
  { name: "MUI", confidence: 60, category: "Frameworks", link: "https://mui.com/" },

  { name: "SQL", confidence: 80, category: "Databases", link: "https://www.w3schools.com/sql/" },
  { name: "MongoDB", confidence: 90, category: "Databases", link: "https://www.mongodb.com/" },
  { name: "MySQL", confidence: 80, category: "Databases", link: "https://www.mysql.com/" },
  { name: "PostgreSQL", confidence: 90, category: "Databases", link: "https://www.postgresql.org/" },
  { name: "SQLite", confidence: 80, category: "Databases", link: "https://www.sqlite.org/" },
  { name: "Firebase", confidence: 80, category: "Databases", link: "https://firebase.google.com/" },
  { name: "IndexedDB", confidence: 70, category: "Databases", link: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" },
  { name: "Redis", confidence: 60, category: "Databases", link: "https://redis.io/" },
  { name: "AWS S3", confidence: 40, category: "Databases", link: "https://aws.amazon.com/s3/" },

  { name: "Security Awareness", confidence: 90, category: "Cybersecurity", link: "https://www.cisa.gov/topics/cybersecurity-best-practices" },
  { name: "Security Fundamentals", confidence: 90, category: "Cybersecurity", link: "https://csrc.nist.gov/glossary/term/cia_triad" },
  { name: "Cyber Ethics & Policy", confidence: 80, category: "Cybersecurity", link: "https://www.nist.gov/cyberframework" },
  { name: "Disaster Recovery", confidence: 80, category: "Cybersecurity", link: "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final" },
  { name: "Identity & Access Management", confidence: 80, category: "Cybersecurity", link: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html" },
  { name: "Vulnerability Assessment", confidence: 70, category: "Cybersecurity", link: "https://www.tenable.com/products/nessus" },
  { name: "Cloud Security (AWS)", confidence: 70, category: "Cybersecurity", link: "https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html" },
  { name: "Network Security", confidence: 70, category: "Cybersecurity", link: "https://www.cisa.gov/topics/cybersecurity-best-practices" },
  { name: "OS Hardening", confidence: 70, category: "Cybersecurity", link: "https://www.cisecurity.org/cis-benchmarks" },
  { name: "Capture the Flag", confidence: 70, category: "Cybersecurity", link: "https://picoctf.org/" },

  { name: "Spreadsheets (Excel)", confidence: 99, category: "Data Analysis", link: "https://support.microsoft.com/en-us/excel" },
  { name: "Data Structures & Algorithms", confidence: 80, category: "Data Analysis", link: "https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/" },
  { name: "SQL Queries for Analysis", confidence: 80, category: "Data Analysis", link: "https://mode.com/sql-tutorial/" },
  { name: "Quantitative Reasoning", confidence: 80, category: "Data Analysis", link: "https://www.khanacademy.org/math/statistics-probability" },
  { name: "Python for Data", confidence: 70, category: "Data Analysis", link: "https://pandas.pydata.org/docs/getting_started/index.html" },

  { name: "SDLC", confidence: 80, category: "Project Management", link: "https://aws.amazon.com/what-is/sdlc/" },
  { name: "Project Planning & WBS", confidence: 90, category: "Project Management", link: "https://www.pmi.org/learning/library/work-breakdown-structure-basics-1373" },
  { name: "Agile", confidence: 80, category: "Project Management", link: "https://agilemanifesto.org/" },
  { name: "Requirements Gathering", confidence: 80, category: "Project Management", link: "https://www.atlassian.com/agile/product-management/requirements" },
  { name: "Stakeholder Management", confidence: 80, category: "Project Management", link: "https://www.pmi.org/learning/library/stakeholder-management-task-project-success-7736" },
  { name: "Software Testing Plans", confidence: 70, category: "Project Management", link: "https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing" },
  { name: "Scrum", confidence: 70, category: "Project Management", link: "https://scrumguides.org/" },

  { name: "UML", confidence: 90, category: "Misc", link: "https://www.uml.org/" },
  { name: "Prototyping & Wireframes", confidence: 90, category: "Misc", link: "https://www.figma.com/resource-library/what-is-wireframing/" },
  { name: "Database Normalization", confidence: 80, category: "Misc", link: "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description" },
];
