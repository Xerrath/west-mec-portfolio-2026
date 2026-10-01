// Add a cert: copy one object, change the values. It sorts itself into its group, newest first.
// date is "YYYY-MM" so it sorts. link is optional (a public verify page). courses is optional (a bundle of courses).
// Source: the PDFs in the vault's "additional information/Certifications" folder. West-MEC teaching certs and coaching certs are left out on purpose (tech only).

// Each inner array of certFrames is one card; small groups share a card so the two columns stay even.
export const certFrames = [["Cybersecurity", "Data Analysis"], ["Coding", "IT & Systems", "Project Management"]];

// Degrees show first, in their own full-width card, newest first.
export const degrees = [
  {
    name: "Bachelor of Science in Information Technology",
    school: "University of Phoenix",
    date: "2026-11",
    text: "Cybersecurity, cloud, networking, data, and software engineering coursework. President's List in 2025 and Dean's List in 2026.",
  },
  {
    name: "Associate in Applied Science, Exercise Science",
    school: "Paradise Valley Community College",
    date: "2019-08",
    text: "Health, Fitness and Sports Performance, earned alongside certificates in Emergency Medical Technology and Personal Training.",
  },
];

export const certifications = [
  {
    name: "Secure Computer User",
    issuer: "University of Phoenix, endorsed by EC-Council",
    date: "2026-02",
    group: "Cybersecurity",
    link: "https://www.credly.com/go/18lSu2U1",
  },
  {
    name: "Capture the Flag Competition",
    issuer: "University of Phoenix",
    date: "2026-05",
    group: "Cybersecurity",
  },
  {
    name: "Mitigating Cybersecurity Vulnerabilities",
    issuer: "LinkedIn Learning",
    date: "2026-02",
    group: "Cybersecurity",
  },
  {
    name: "IT Security Foundations: Operating System Security",
    issuer: "LinkedIn Learning",
    date: "2026-01",
    group: "Cybersecurity",
  },
  {
    name: "Information Security Series",
    issuer: "U.S. Army eLearning",
    date: "2012-04",
    group: "Cybersecurity",
    courses: [
      "Cryptography and Network Security",
      "Security Architecture and Applications Security",
      "Security Management and Operations Security",
      "Network Security Issues",
      "Access Control and Physical Security",
      "Business Continuity Planning, Law, and Ethics",
    ],
  },
  {
    name: "Information Protection Training",
    issuer: "U.S. Army CIO/G6",
    date: "2011-09",
    group: "Cybersecurity",
    courses: ["Phishing Awareness", "Personally Identifiable Information (PII)", "Portable Electronic Devices and Removable Storage Media"],
  },

  {
    name: "IT Specialist: JavaScript",
    issuer: "Certiport",
    date: "2025-11",
    group: "Coding",
    link: "https://www.credly.com/badges/a7811694-6962-43ff-8cdb-9bd84aebf8bb",
  },
  {
    name: "Full Stack Development Program",
    issuer: "Bottega University",
    date: "2023-03",
    group: "Coding",
    link: "https://www.credly.com/badges/bef9aeb6-a55c-4fbf-a552-b10a498830f6",
  },
  {
    name: "HTML",
    issuer: "Mimo",
    date: "2025-06",
    group: "Coding",
  },
  {
    name: "Python",
    issuer: "Mimo",
    date: "2025-01",
    group: "Coding",
  },
  {
    name: "Introduction to Career Skills in Software Development",
    issuer: "LinkedIn Learning (CompTIA CEU)",
    date: "2026-05",
    group: "Coding",
  },

  {
    name: "Introductory Spreadsheets",
    issuer: "University of Phoenix",
    date: "2025-10",
    group: "Data Analysis",
    link: "https://www.credly.com/badges/de39dc2a-d98c-41e5-a223-f6e320ecba86",
  },
  {
    name: "Basic Features of Excel 2003",
    issuer: "U.S. Army eLearning",
    date: "2012-03",
    group: "Data Analysis",
  },

  {
    name: "Windows 2000 Networking & Active Directory Series",
    issuer: "U.S. Army eLearning",
    date: "2012-04",
    group: "IT & Systems",
    courses: [
      "Active Directory design, security, replication, and Group Policy",
      "Implementing a Network",
      "Network Protocols and Remote Access",
      "Mobile IP",
    ],
  },
  {
    name: "Windows Server 2003 Administration and Services",
    issuer: "U.S. Army eLearning",
    date: "2012-04",
    group: "IT & Systems",
  },
  {
    name: "Windows Vista Series",
    issuer: "U.S. Army eLearning",
    date: "2012-05",
    group: "IT & Systems",
    courses: ["Installation", "Security and Performance", "User Experience"],
  },

  {
    name: "Agile at Work: Driving Productive Agile Meetings",
    issuer: "LinkedIn Learning",
    date: "2026-05",
    group: "Project Management",
  },
  {
    name: "Intentional Problem Solver",
    issuer: "University of Phoenix",
    date: "2025-10",
    group: "Project Management",
    link: "https://www.credly.com/badges/cc8c870c-f746-495c-988e-40fa3099160f",
  },
];
