import { CodeIcon, LayoutIcon, ServerIcon, WrenchIcon } from "lucide-react"

export type Skill = {
  name: string
  level: number // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'other'
  icon: string // Path to the icon
  proficiency: 'Advanced' | 'Proficient' | 'Intermediate' | 'Familiar'
  isComponentIcon?: boolean
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
  iframeUrl?: string
  demoUrl: string
  repoUrl: string
  techStack: string[]
  problem: string
  solution: string
}

export type Experience = {
  id: string
  position: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  achievements: string[]
}

export const portfolioStats = {
  projectsCompleted: 50,
  yearsOfExperience: 5,
  happyClients: 30,
  codingHours: 10000
}

export const skills: Skill[] = [
  // Frontend Development
  { 
    name: "HTML/CSS", 
    level: 89, 
    category: "frontend",
    icon: "/skills/htmlcss.svg",
    proficiency: "Advanced"
  },
  { 
    name: "JavaScript", 
    level: 75, 
    category: "frontend",
    icon: "/skills/javascript.svg",
    proficiency: "Proficient"
  },
  { 
    name: "TypeScript", 
    level: 75, 
    category: "frontend",
    icon: "/skills/Typescript.svg",
    proficiency: "Intermediate"
},
  { 
    name: "React", 
    level: 70, 
    category: "frontend",
    icon: "/skills/react.svg",
    proficiency: "Intermediate"
  },
  { 
    name: "NextJS", 
    level: 60, 
    category: "frontend",
    icon: "/skills/nextjs.svg",
    proficiency: "Intermediate"
  },
  { 
    name: "Tailwind", 
    level: 70, 
    category: "frontend",
    icon: "/skills/Tailwind.svg",
    proficiency: "Proficient"
  },
  { 
    name: "GSAP", 
    level: 60, 
    category: "frontend",
    icon: "/skills/gsap.svg",
    proficiency: "Intermediate"
  },
  
  // Backend & Databases
  { 
    name: "PHP", 
    level: 50, 
    category: "backend",
    icon: "/skills/php.svg",
    proficiency: "Intermediate"
  },
  { 
    name: "SQL", 
    level: 70, 
    category: "backend",
    icon: "/skills/sql.svg",
    proficiency: "Proficient"
  },
  { 
    name: "MySQL", 
    level: 60, 
    category: "backend",
    icon: "/skills/mysql.svg",
    proficiency: "Intermediate"
  },
  { 
    name: "SQL Server", 
    level: 60, 
    category: "backend",
    icon: "/skills/sqlserver.svg",
    proficiency: "Intermediate"
  },
  { 
    name: "Supabase", 
    level: 65, 
    category: "backend",
    icon: "/skills/supabase.svg",
    proficiency: "Intermediate"
  },
  
  // Development Tools
  { 
    name: "Git/GitHub", 
    level: 75, 
    category: "tools",
    icon: "/skills/github.svg",
    proficiency: "Proficient"
  },
  { 
    name: "VS Code", 
    level: 90, 
    category: "tools",
    icon: "/skills/vscode.svg",
    proficiency: "Advanced"
  },
  { 
    name: "Cursor", 
    level: 80, 
    category: "tools",
    icon: "/skills/Cursor.svg",
    proficiency: "Proficient"
  },
  { 
    name: "Vercel", 
    level: 70, 
    category: "tools",
    icon: "/skills/vercel.svg",
    proficiency: "Intermediate"
  },
  { 
    name: "Trello", 
    level: 70, 
    category: "tools",
    icon: "/skills/trello.svg",
    proficiency: "Intermediate"
  },
  
  // CMS & Design
  { 
    name: "WordPress", 
    level: 80, 
    category: "other",
    icon: "/skills/wordpress.svg",
    proficiency: "Proficient"
  },
  { 
    name: "Joomla", 
    level: 60, 
    category: "other",
    icon: "/skills/joomla.svg",
    proficiency: "Intermediate"
  },
  { 
    name: "Canva", 
    level: 85, 
    category: "other",
    icon: "/skills/canva.svg",
    proficiency: "Advanced"
  },
  { 
    name: "Adobe Creative Suite", 
    level: 75, 
    category: "other",
    icon: "/skills/adobe.svg",
    proficiency: "Proficient"
  },
  { 
    name: "Microsoft Office", 
    level: 80, 
    category: "other",
    icon: "/skills/office.svg",
    proficiency: "Proficient"
  },
  
  // Programming Languages
  { 
    name: "C++", 
    level: 70, 
    category: "other",
    icon: "/skills/cpp.svg",
    proficiency: "Intermediate"
  },
  { 
    name: "C#", 
    level: 65, 
    category: "other",
    icon: "/skills/csharp.svg",
    proficiency: "Intermediate"
  }
]

export const skillCategories = [
  { id: "frontend", name: "Frontend", icon: LayoutIcon },
  { id: "backend", name: "Backend", icon: ServerIcon },
  { id: "tools", name: "Tools", icon: WrenchIcon },
  { id: "other", name: "Other", icon: CodeIcon },
]

export const projects: Project[] = [
  {
    id: "tradekaizen",
    title: "TradeKaizen",
    description: "A modern trading journal and analytics platform built with Next.js 14, empowering traders with real-time insights, performance analytics, and a seamless user experience.",
    image: "/projects/TradeKaizen.png",
    demoUrl: "", // No public demo link in the repo
    repoUrl: "https://github.com/Mineaworld/TradeKaizen",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    problem: "Traders need a reliable, real-time platform to track trades, analyze performance, and continuously improve their strategies. Existing solutions often lack modern UX, real-time data, and actionable analytics.",
    solution: "Developed a robust, user-centric platform with real-time data via Supabase, interactive charts, drag-and-drop strategy management, secure authentication, and a beautiful, responsive UI. Features include a trading dashboard, journal, analytics, calendar, and resources, all designed for continuous improvement and efficiency."
  },
  {
    id: "zentry-clone",
    title: "Zentry-Clone",
    description: "A polished, full-featured clone of the Zentry platform, showcasing advanced, state management, and a modern, responsive UI.",
    image: "/projects/Zentry.png",
    demoUrl: "https://zentry-clone-awwards.vercel.app/",
    repoUrl: "https://github.com/Mineaworld/Zentry-Clone",
    techStack: ["React.js", "Javascript", "Tailwind CSS", "GSAP"],
    problem: "Modern platforms require a polish UI and seamless user experiences across devices.",
    solution: "Engineered a scalable architecture with robust authentication flows and a clean, intuitive design, ensuring both security and usability."
  },
  {
    id: "banking-react-tailwind-ui",
    title: "Banking-React-Tailwind-UI",
    description: "A sleek, professional banking dashboard built with React and Tailwind CSS. Features real-time data and a seamless user journey.",
    image: "/projects/Banking.png",
    demoUrl: "https://banking-modern-ui.vercel.app/",
    repoUrl: "https://github.com/Mineaworld/Banking-React-Tailwind-UI",
    techStack: ["React.js", "Javascript", "Tailwind CSS"],
    problem: "Banking users expect modern UX/UI following the responsive design and polish looking",
    solution: "Designed and implemented a responsive, visually engaging dashboard with robust security and real-time data visualization."
  },
  {
    id: "inventory-management",
    title: "Inventory-Management",
    description: "A comprehensive inventory management system supporting CRUD operations, analytics, user roles and bilingual supported.",
    image: "/projects/Inventory.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/Inventory-Management",
    techStack: ["Laravel", "React.js", "MySQL"],
    problem: "Businesses need efficient tools to track inventory, analyze stock levels, and manage user permissions.",
    solution: "Built a user-friendly system with powerful analytics, role-based access, and seamless CRUD operations for streamlined inventory control."
  }
]

export const experiences: Experience[] = [
  {
    id: "exp-1",
    position: "Web Development Student",
    company: "Uni Studen / Self-Taught / Online Courses",
    location: "Remote and Phnom Penh, Cambodia",
    startDate: "2023",
    endDate: "Present",
    achievements: [
      "Completed comprehensive coursework in Web Development.",
      "Built and deployed several portfolio projects to demonstrate practical skills.",
      "Continuously learning and applying new technologies in personal projects."
    ]
  }
]

export const socialLinks = {
  github: "https://github.com/Mineaworld",
  linkedin: "https://linkedin.com/in/mineadev",
  twitter: "https://twitter.com/Minea_Blue",
  email: "minea.dyy@gmail.com",
  telegram: "https://t.me/ImMinea"
}
