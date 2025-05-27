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

export const skills: Skill[] = [
  // Frontend Development
  { 
    name: "HTML/CSS", 
    level: 80, 
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
    name: "React", 
    level: 70, 
    category: "frontend",
    icon: "/skills/react.svg",
    proficiency: "Proficient"
  },
  { 
    name: "NextJS", 
    level: 65, 
    category: "frontend",
    icon: "/skills/nextjs.svg",
    proficiency: "Intermediate"
  },
  { 
    name: "Tailwind", 
    level: 75, 
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
    level: 65, 
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
    level: 65, 
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
    level: 80, 
    category: "tools",
    icon: "/skills/vscode.svg",
    proficiency: "Advanced"
  },
  { 
    name: "Cursor", 
    level: 70, 
    category: "tools",
    icon: "/skills/Cursor.svg",
    proficiency: "Proficient"
  },
  { 
    name: "Vercel", 
    level: 70, 
    category: "tools",
    icon: "/skills/vercel.svg",
    proficiency: "Proficient"
  },
  { 
    name: "Trello", 
    level: 75, 
    category: "tools",
    icon: "/skills/trello.svg",
    proficiency: "Proficient"
  },
  
  // CMS & Design
  { 
    name: "WordPress", 
    level: 70, 
    category: "other",
    icon: "/skills/wordpress.svg",
    proficiency: "Proficient"
  },
  { 
    name: "Joomla", 
    level: 65, 
    category: "other",
    icon: "/skills/joomla.svg",
    proficiency: "Intermediate"
  },
  { 
    name: "Canva", 
    level: 75, 
    category: "other",
    icon: "/skills/canva.svg",
    proficiency: "Proficient"
  },
  { 
    name: "Adobe Creative Suite", 
    level: 65, 
    category: "other",
    icon: "/skills/adobe.svg",
    proficiency: "Intermediate"
  },
  { 
    name: "Microsoft Office", 
    level: 80, 
    category: "other",
    icon: "/skills/office.svg",
    proficiency: "Advanced"
  },
  
  // Programming Languages
  { 
    name: "C++", 
    level: 70, 
    category: "other",
    icon: "/skills/cpp.svg",
    proficiency: "Proficient"
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
    description: "A next-generation trading and analytics platform empowering users with real-time market insights and portfolio management. TradeKaizen delivers a seamless, data-driven experience for traders of all levels, featuring dynamic dashboards, secure authentication, and responsive design.",
    image: "/projects/TradeKaizen.png",
    demoUrl: "",
    repoUrl: "https://github.com/Mineaworld/TradeKaizen",
    techStack: ["React", "Node.js", "Tailwind CSS"],
    problem: "Traders and investors need real-time, actionable insights and a reliable platform to manage portfolios efficiently.",
    solution: "Developed a robust, user-centric platform with real-time data visualization, secure user management, and responsive dashboards for optimal trading experiences."
  },
  {
    id: "zentry-clone",
    title: "Zentry-Clone",
    description: "A polished, full-featured clone of the Zentry platform, showcasing advanced authentication, state management, and a modern, responsive UI.",
    image: "/projects/Zentry.png",
    demoUrl: "https://zentry-clone-awwards.vercel.app/",
    repoUrl: "https://github.com/Mineaworld/Zentry-Clone",
    techStack: ["React", "JavaScript"],
    problem: "Modern platforms require secure authentication and seamless user experiences across devices.",
    solution: "Engineered a scalable architecture with robust authentication flows and a clean, intuitive design, ensuring both security and usability."
  },
  {
    id: "banking-react-tailwind-ui",
    title: "Banking-React-Tailwind-UI",
    description: "A sleek, professional banking dashboard built with React and Tailwind CSS. Features real-time data, secure login, and a seamless user journey.",
    image: "/projects/Banking.png",
    demoUrl: "https://banking-modern-ui.vercel.app/",
    repoUrl: "https://github.com/Mineaworld/Banking-React-Tailwind-UI",
    techStack: ["React", "Tailwind CSS"],
    problem: "Banking users expect intuitive dashboards and secure, real-time access to their financial data.",
    solution: "Designed and implemented a responsive, visually engaging dashboard with robust security and real-time data visualization."
  },
  {
    id: "inventory-management",
    title: "Inventory-Management",
    description: "A comprehensive inventory management system supporting CRUD operations, analytics, and user roles.",
    image: "/projects/Inventory.png",
    demoUrl: "https://github.com/Mineaworld/Inventory-Management",
    repoUrl: "https://github.com/Mineaworld/Inventory-Management",
    techStack: ["JavaScript", "Node.js"],
    problem: "Businesses need efficient tools to track inventory, analyze stock levels, and manage user permissions.",
    solution: "Built a user-friendly system with powerful analytics, role-based access, and seamless CRUD operations for streamlined inventory control."
  }
]

export const experiences: Experience[] = [
  {
    id: "exp-1",
    position: "Web Development Student",
    company: "Self-Taught / Online Courses",
    location: "Remote",
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
  email: "minea.dyy@gmail.com"
}
