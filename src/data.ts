export const profile = {
  name: "Vignesh Balamurugan",
  location: "South Brunswick, NJ",
  email: "vignesh.balamurugan@rutgers.edu",
  linkedin: "https://linkedin.com/in/vigneshbalamurugan",
  resume: "/Vignesh-Balamurugan-Resume.pdf",
  tagline: "Finance & Business Analytics student turning data into decisions.",
  blurb:
    "I'm a student at Rutgers Business School studying Finance and Business Analytics & Information Technology. I like building dashboards and models that make messy data legible — and leading teams that ship real software for real people.",
};

export const education = {
  school: "Rutgers University, Rutgers Business School",
  location: "New Brunswick, NJ",
  degree: "B.S. in Finance & Business Analytics and Information Technology",
  date: "Expected Dec 2028",
  gpa: "Cumulative GPA: 3.2/4.0 · Major GPA: 3.48/4.0 (Finance), 3.77/4.0 (BAIT)",
  coursework: [
    "Data 101",
    "Data Structures",
    "Multivariable Calculus",
    "Introduction to Linear Algebra",
    "Management Information Systems",
    "Operations Management",
  ],
};

export const experience = [
  {
    org: "Rutgers Business School, Dean's Office",
    role: "Data Analytics Intern",
    location: "New Brunswick, NJ",
    date: "Jul 2026 – Present",
    bullets: [
      "Build a Tableau dashboard tracking US News MBA rankings across Big Ten/BTAA business schools, reshaping wide-format ranking data into a longitudinal structure to enable trend analysis",
      "Design an outcome-visualization dashboard tracking post-graduation reporting rates, aggregating and de-identifying student data and restricting access to safeguard privacy",
      "Partner directly with the Assistant Dean for Analytics and Strategic Intelligence through iterative feedback cycles to refine dashboard design and improve reporting accuracy",
    ],
  },
  {
    org: "Rutgers School of Communication & Information",
    role: "IT Helpdesk Associate",
    location: "New Brunswick, NJ",
    date: "Jun 2026 – Present",
    bullets: [
      "Resolve technical support tickets via phone, email, and walk-in requests, documenting issues and resolutions to maintain accurate service records",
      "Troubleshoot hardware and software issues for students, faculty, and staff, and configure equipment to department specifications",
      "Coordinate with fellow consultants to maintain lab readiness and ensure smooth daily helpdesk operations",
    ],
  },
  {
    org: "Rutgers Hack4Impact",
    role: "Executive Director",
    location: "Piscataway, NJ",
    date: "Jul 2025 – Sep 2026",
    bullets: [
      "Direct a 20-member multidisciplinary team to design and launch a full-cycle software product for a nonprofit client, owning project scope, timelines, and deliverables",
      "Build the organization's website with Sanity (headless CMS) and develop bootcamp infrastructure and training resources to onboard and upskill incoming team members",
    ],
  },
  {
    org: "Rutgers School of Art & Sciences",
    role: "Learning Assistant, Calc 1 and Pre-Calc 2",
    location: "New Brunswick, NJ",
    date: "Aug 2026 – Present",
    bullets: [
      "Facilitate weekly discussion sections and office hours, reinforcing lecture concepts in Calculus/Pre-Calculus fundamentals for 30+ students",
      "Grade assignments against course rubrics and work with the instructor to identify and address common misconceptions",
      "Hold walk-in tutoring hours to help students debug queries and troubleshoot data analysis exercises",
    ],
  },
  {
    org: "Mathnasium",
    role: "Math Instructor",
    location: "Princeton, NJ",
    date: "Feb 2025 – Sep 2025",
    bullets: [
      "Provide one-on-one and small group instruction to 20+ students per week, tailoring lessons to individual needs using Mathnasium's structured curriculum",
      "Fostered a 95% student engagement rate by creating a fun and supportive learning environment, boosting confidence and problem-solving skills",
      "Collaborate with a team of 10+ instructors to maintain 100% curriculum consistency and teaching quality",
    ],
  },
  {
    org: "Rutgers Solar Car Team",
    role: "Newsletter Team Lead, Finance/Business Team Member",
    location: "New Brunswick, NJ",
    date: "Sep 2024 – Apr 2026",
    bullets: [
      "Secured $1,000+ in sponsorships by strategically reaching out to organizations via email campaigns",
      "Led a 4-member newsletter team managing a publication with 400+ monthly readers, improving engagement through consistent updates on team progress",
      "Launched a dedicated blog highlighting engineering, business, and project milestones to strengthen internal communication and external visibility",
    ],
  },
  {
    org: "Starbucks",
    role: "Part-Time Barista",
    location: "South Brunswick, NJ",
    date: "Aug 2024 – Mar 2025",
    bullets: [
      "Engaged with 100+ customers daily, delivering exceptional service and driving sales — contributing to the highest store sales in 3 years through personalized recommendations and upselling",
      "Improved drive-thru efficiency, cutting average service time from 75 to 45 seconds per customer, enhancing speed and satisfaction",
    ],
  },
];

export const projects = [
  {
    title: "Credit Portfolio Expected Loss & Stress Testing Dashboard",
    description:
      "A Python/SQL model calculating expected loss (PD × LGD × EAD) and aggregating portfolio-level credit risk, paired with an interactive dashboard for stress-scenario analysis.",
    bullets: [
      "Built a Python/SQL model to calculate expected loss (PD × LGD × EAD) and aggregate portfolio-level credit risk",
      "Developed an interactive dashboard to analyze portfolio sensitivity under stress scenarios, improving risk-assessment speed by ~35%",
      "Aggregated loan-level data into portfolio-level insights to support risk management decision-making",
    ],
    tags: ["Python", "SQL", "Risk Modeling", "Dashboards"],
    links: [{ label: "GitHub", href: "https://github.com/balamuruganvignesh/Credit-risk-dashboard" }],
  },
  {
    title: "Fraud & Anti-Money Laundering Detection Network",
    description:
      "A fraud/AML detection pipeline that models transactions as a graph to surface money-laundering rings, with LLM-assisted triage for analysts.",
    bullets: [
      "Built a fraud/AML detection pipeline in Python and SQL, using NetworkX to model transaction relationships as a graph and surface patterns indicative of money laundering rings",
      "Integrated the Gemini API to flag and summarize anomalous transactions for analyst review",
    ],
    tags: ["Python", "SQL", "NetworkX", "Gemini API"],
    links: [{ label: "GitHub", href: "https://github.com/balamuruganvignesh/fraud-aml-detection" }],
  },
  {
    title: "The Prediction Game",
    badge: "Hobby project",
    description:
      "A real-time multiplayer trick-taking card game (Judgement) for 2–10 players in the browser — plus Hearts and Blackjack at the same table. No accounts, just a 4-letter table code.",
    bullets: [
      "Built a Socket.io + Express real-time game server with all table state held in memory, synced live across every connected player",
      "Implemented three full card game rule sets — bidding/trick-taking, Hearts (with passing and shoot-the-moon), and Blackjack (vs-dealer and vs-players modes)",
      "Designed a secret 'Double' side-bet mechanic and a 3-second between-trick beat so play never skips a disconnected or slow player",
      "Deployed on Fly.io with Docker, running as a single always-on process to keep every table's state consistent",
    ],
    tags: ["TypeScript", "React", "Socket.io", "Express", "Fly.io"],
    links: [
      { label: "Play it live", href: "https://thepredictiongame.fly.dev" },
      { label: "GitHub", href: "https://github.com/balamuruganvignesh/thepredictiongame" },
    ],
  },
];

export const skills = {
  data: ["SQL", "Python", "R", "Tableau", "Power BI", "Excel", "Java", "LaTeX"],
  web: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "HTML/CSS", "Git"],
  languages: ["English", "Tamil", "French", "Hindi"],
};
