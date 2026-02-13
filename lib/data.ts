import { CodeIcon, LayoutIcon, ServerIcon, WrenchIcon } from "lucide-react";

export type Skill = {
  name: string;
  category:
    | "frontend"
    | "backend"
    | "databases"
    | "ai_automation"
    | "swe_tools"
    | "design_other";
  icon: string;
  isComponentIcon?: boolean;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  iframeUrl?: string;
  demoUrl: string;
  repoUrl?: string;
  techStack: string[];
  problem: string;
  solution: string;
};

export type Experience = {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  achievements: string[];
};

export type HomeNavigationItem = {
  href: `#${string}`;
  label: string;
};

export type HomepageProfile = {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  availability: string;
  about: string[];
  contact: {
    email: string;
    location: string;
    responseWindow: string;
  };
};

export const homeNavigation: HomeNavigationItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const homepageProfile: HomepageProfile = {
  name: "Dy Minea",
  role: "Software Engineer & UI-Focused Builder",
  tagline:
    "I build fast, clear digital products that teams can ship and scale with confidence.",
  summary:
    "I work across Typescript, React, Next.js, Laravel and modern backend tooling to turn ideas into production-ready products with strong UX and maintainable architecture.",
  location: "Phnom Penh, Cambodia",
  availability: "Open for freelance software engineering projects",
  about: [
    "I focus on building products that balance visual quality with long-term maintainability. My process starts with clear structure, then layers in thoughtful interaction and performance.",
    "Most of my work sits at the intersection of software engineering and product design. I translate complex requirements into interfaces that are easy to use and quick to understand.",
    "Outside client and portfolio work, I sharpen my skills through side projects, technical experiments, and continuous learning."
  ],
  contact: {
    email: "minea.dyy@gmail.com",
    location: "Remote-friendly across time zones",
    responseWindow: "Usually within 24 to 48 hours",
  },
};

export const portfolioStats = {
  projectsCompleted: "9",
  yearsOfExperience: "1-2 yrs hands-on",
  happyClients: 30,
  codingHours: 10000,
};

export const skills: Skill[] = [
  {
    name: "JavaScript",
    category: "backend",
    icon: "/skills/javascript.svg",
  },
  {
    name: "TypeScript",
    category: "backend",
    icon: "/skills/Typescript.svg",
  },
  {
    name: "React",
    category: "frontend",
    icon: "/skills/react.svg",
  },
  {
    name: "NextJS",
    category: "frontend",
    icon: "/skills/nextjs.svg",
  },
  {
    name: "Tailwind",
    category: "frontend",
    icon: "/skills/Tailwind.svg",
  },
  {
    name: "GSAP",
    category: "frontend",
    icon: "/skills/gsap.svg",
  },
  {
    name: "HTML/CSS",
    category: "frontend",
    icon: "/skills/htmlcss.svg",
  },
  {
    name: "PHP",
    category: "backend",
    icon: "/skills/php.svg",
  },
  {
    name: "Laravel",
    category: "backend",
    icon: "/skills/laravel.svg",
  },
  {
    name: "Firebase",
    category: "databases",
    icon: "/skills/firebase.svg",
  },
  {
    name: "SQL",
    category: "databases",
    icon: "/skills/sql.svg",
  },
  {
    name: "MySQL",
    category: "databases",
    icon: "/skills/mysql.svg",
  },
  {
    name: "PostgreSQL",
    category: "databases",
    icon: "/skills/fallback.svg",
  },
  {
    name: "SQL Server",
    category: "databases",
    icon: "/skills/sqlserver.svg",
  },
  {
    name: "Oracle",
    category: "databases",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Supabase",
    category: "databases",
    icon: "/skills/supabase.svg",
  },
  {
    name: "Navicat",
    category: "databases",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Python",
    category: "backend",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Git/GitHub",
    category: "swe_tools",
    icon: "/skills/github.svg",
  },
  {
    name: "Linux",
    category: "swe_tools",
    icon: "/skills/fallback.svg",
  },
  {
    name: "VS Code",
    category: "swe_tools",
    icon: "/skills/vscode.svg",
  },
  {
    name: "Cursor",
    category: "swe_tools",
    icon: "/skills/Cursor.svg",
  },
  {
    name: "Vercel",
    category: "swe_tools",
    icon: "/skills/vercel.svg",
  },
  {
    name: "AWS",
    category: "swe_tools",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Trello",
    category: "swe_tools",
    icon: "/skills/trello.svg",
  },
  {
    name: "ClickUp",
    category: "swe_tools",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Lucidchart",
    category: "swe_tools",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Mermaid",
    category: "swe_tools",
    icon: "/skills/fallback.svg",
  },
  {
    name: "n8n",
    category: "ai_automation",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Make",
    category: "ai_automation",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Codex",
    category: "ai_automation",
    icon: "/skills/fallback.svg",
  },
  {
    name: "Claude Code",
    category: "ai_automation",
    icon: "/skills/fallback.svg",
  },
  {
    name: "WordPress",
    category: "design_other",
    icon: "/skills/wordpress.svg",
  },
  {
    name: "Joomla",
    category: "design_other",
    icon: "/skills/joomla.svg",
  },
  {
    name: "Canva",
    category: "design_other",
    icon: "/skills/canva.svg",
  },
  {
    name: "Adobe Creative Suite",
    category: "design_other",
    icon: "/skills/adobe.svg",
  },
  {
    name: "Microsoft Office",
    category: "design_other",
    icon: "/skills/office.svg",
  },
];

export const skillCategories = [
  { id: "frontend", name: "Frontend", icon: LayoutIcon },
  { id: "backend", name: "Backend", icon: ServerIcon },
  { id: "databases", name: "Databases", icon: ServerIcon },
  { id: "ai_automation", name: "AI / Automation", icon: CodeIcon },
  { id: "swe_tools", name: "SWE Tools", icon: WrenchIcon },
  { id: "design_other", name: "Design / Other", icon: CodeIcon },
] as const;

export const projects: Project[] = [
  {
    id: "uni-assignment",
    title: "UniAssignment",
    description:
      "A modern academic workspace for university students to track assignments, manage subjects, and stay on top of deadlines.",
    image: "/projects/UniAssignment.png",
    demoUrl: "https://uni-assignment.vercel.app",
    repoUrl: "https://github.com/Mineaworld/UniAssignment",
    techStack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
      "Cloud Functions",
    ],
    problem:
      "Students often manage coursework across scattered notes and reminders, which causes missed deadlines and poor planning.",
    solution:
      "Built a single workspace with assignment tracking, subject management, calendar views, notes, Pomodoro support, and Telegram reminders.",
  },
  {
    id: "idea-studio",
    title: "IdeaStudio",
    description:
      "An AI-powered product ideation workspace that turns rough inputs into structured project documentation and PRDs.",
    image: "/projects/UniAssignment.png",
    demoUrl: "https://ideastudio.vercel.app",
    repoUrl: "https://github.com/Mineaworld/IdeaStudio",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "Telegram"],
    problem:
      "Early product ideas are often fragmented across notes and social links, which makes planning and execution slow.",
    solution:
      "Built an idea capture and expansion workflow that converts text, links, and voice inputs into organized build-ready documentation.",
  },
  {
    id: "tradekaizen",
    title: "TradeKaizen",
    description:
      "A trading-focused web app inspired by the Kaizen philosophy, combining journaling, analytics, and productivity workflows in one interface.",
    image: "/projects/TradeKaizen.png",
    demoUrl: "https://tradekaizen.vercel.app/",
    repoUrl: "https://github.com/Mineaworld/TradeKaizen",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
    problem:
      "Traders need one place to manage journals, strategy workflows, and performance insights without switching between tools.",
    solution:
      "Implemented a Next.js platform with Supabase auth/data, drag-and-drop interactions, and chart-based analytics for daily trading review.",
  },
  {
    id: "inventory-management",
    title: "Inventory-Management",
    description:
      "A full-stack stock management system for SMB workflows with bilingual support and role-based operations.",
    image: "/projects/Inventory.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/Inventory-Management",
    techStack: ["Laravel", "React.js", "Inertia.js", "MySQL"],
    problem:
      "Small and mid-sized teams need structured product, supplier, and stock movement tracking with clear role permissions.",
    solution:
      "Built a role-aware platform with product/supplier CRUD, stock movement history, and English/Khmer UI support for practical day-to-day operations.",
  },
  {
    id: "zentry-clone",
    title: "Zentry-Clone",
    description:
      "A responsive frontend clone of Zentry, built as hands-on practice for GSAP animation workflows and advanced React UI implementation.",
    image: "/projects/Zentry.png",
    demoUrl: "https://zentry-clone-awwards.vercel.app/",
    repoUrl: "https://github.com/Mineaworld/Zentry-Clone",
    techStack: ["React.js", "Javascript", "Tailwind CSS", "GSAP"],
    problem:
      "The goal was to practice complex motion design and responsive interaction patterns on a visually rich interface.",
    solution:
      "Extended a tutorial baseline with mobile-first responsiveness, smoother transitions, and performance-minded UI behavior.",
  },
  {
    id: "city-weather-app",
    title: "CityWeatherApp",
    description:
      "A React weather application for searching cities and viewing real-time weather conditions from an external API.",
    image: "/projects/Banking.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/CityWeatherApp",
    techStack: ["React.js", "JavaScript", "Vite", "Weatherbit API"],
    problem:
      "Users need quick weather checks without navigating heavy weather platforms.",
    solution:
      "Implemented a focused city-search interface that fetches and displays temperature, humidity, and wind data in a clean layout.",
  },
  {
    id: "cafe-pos",
    title: "Cafe POS System",
    description:
      "A desktop point-of-sale and management system for cafe operations built with C# and SQL Server.",
    image: "/projects/Inventory.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/Cafe-POS",
    techStack: ["C#", "WinForms", "SQL Server"],
    problem:
      "Cafe staff need reliable transaction handling, product management, and reporting in one operational system.",
    solution:
      "Developed a role-based POS workflow with billing, product controls, and reporting tools to improve day-to-day operational efficiency.",
  },
  {
    id: "skincare-pos",
    title: "Skincare POS System",
    description:
      "A desktop POS system tailored for skincare sellers, focused on product management and checkout workflows.",
    image: "/projects/Inventory.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/Skincare_POS",
    techStack: ["C#", "WinForms", ".NET Framework"],
    problem:
      "Small skincare businesses need lightweight tooling to manage catalog data and streamline sales.",
    solution:
      "Built a practical desktop system for product CRUD and order flow foundations, designed for future customer and reporting expansion.",
  },
  {
    id: "banking-react-tailwind-ui",
    title: "Banking-React-Tailwind-UI",
    description:
      "A responsive banking interface project built with React and Tailwind CSS to practice modern dashboard composition and reusable UI sections.",
    image: "/projects/Banking.png",
    demoUrl: "https://banking-modern-ui.vercel.app/",
    repoUrl: "https://github.com/Mineaworld/Banking-React-Tailwind-UI",
    techStack: ["React.js", "Javascript", "Tailwind CSS", "Vite"],
    problem:
      "Financial UI layouts require clear hierarchy and responsive behavior across screen sizes.",
    solution:
      "Delivered a clean, modern, and responsive banking UI with reusable components and consistent styling patterns.",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    position: "Hands-On Full-Stack Project Development",
    company: "Personal and Academic Portfolio Projects",
    location: "Remote and Phnom Penh",
    startDate: "2024",
    endDate: "Present",
    achievements: [
      "Built and deployed practical web applications using React, Next.js, Laravel, and Firebase.",
      "Implemented authentication, role-based flows, and CRUD-heavy modules across multiple projects.",
      "Iterated features from user feedback and maintained project structure for long-term updates.",
    ],
  },
  {
    id: "exp-2",
    position: "Practical Frontend Engineering Practice",
    company: "Self-Led UI and Interaction Projects",
    location: "Remote",
    startDate: "2023",
    endDate: "2024",
    achievements: [
      "Practiced responsive UI implementation through clone and dashboard projects with real component structure.",
      "Improved motion and interaction quality using GSAP and modern React patterns.",
      "Turned tutorial baselines into customized implementations with added features and better usability.",
    ],
  },
];

export const socialLinks = {
  github: "https://github.com/Mineaworld",
  linkedin: "https://linkedin.com/in/mineadev",
  twitter: "https://x.com/Minea_Dy",
  email: "minea.dyy@gmail.com",
  telegram: "https://t.me/ImMinea",
};
