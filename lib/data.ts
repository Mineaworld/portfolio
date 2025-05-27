import { CodeIcon, LayoutIcon, ServerIcon, WrenchIcon } from "lucide-react"

export type Skill = {
  name: string
  level: number // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export type Project = {
  id: string
  title: string
  description: string
  image: string
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
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "NextJS", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "Supabase", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Git", level: 85, category: "tools" },
  { name: "Docker", level: 60, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "Jest", level: 70, category: "tools" },
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
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://tradekaizen-demo.com",
    repoUrl: "https://github.com/Mineaworld/TradeKaizen",
    techStack: ["React", "Node.js", "Tailwind CSS"],
    problem: "Traders and investors need real-time, actionable insights and a reliable platform to manage portfolios efficiently.",
    solution: "Developed a robust, user-centric platform with real-time data visualization, secure user management, and responsive dashboards for optimal trading experiences."
  },
  {
    id: "zentry-clone",
    title: "Zentry-Clone",
    description: "A polished, full-featured clone of the Zentry platform, showcasing advanced authentication, state management, and a modern, responsive UI.",
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://zentry-clone-demo.com",
    repoUrl: "https://github.com/Mineaworld/Zentry-Clone",
    techStack: ["React", "JavaScript"],
    problem: "Modern platforms require secure authentication and seamless user experiences across devices.",
    solution: "Engineered a scalable architecture with robust authentication flows and a clean, intuitive design, ensuring both security and usability."
  },
  {
    id: "banking-react-tailwind-ui",
    title: "Banking-React-Tailwind-UI",
    description: "A sleek, professional banking dashboard built with React and Tailwind CSS. Features real-time data, secure login, and a seamless user journey.",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://banking-react-tailwind-ui-demo.com",
    repoUrl: "https://github.com/Mineaworld/Banking-React-Tailwind-UI",
    techStack: ["React", "Tailwind CSS"],
    problem: "Banking users expect intuitive dashboards and secure, real-time access to their financial data.",
    solution: "Designed and implemented a responsive, visually engaging dashboard with robust security and real-time data visualization."
  },
  {
    id: "inventory-management",
    title: "Inventory-Management",
    description: "A comprehensive inventory management system supporting CRUD operations, analytics, and user roles.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://inventory-management-demo.com",
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
    startDate: "2021",
    endDate: "2023",
    achievements: [
      "Completed comprehensive coursework in JavaScript, React, and full-stack development.",
      "Built and deployed several portfolio projects to demonstrate practical skills.",
      "Continuously learning and applying new technologies in personal projects."
    ]
  }
]

export const socialLinks = {
  github: "https://github.com/Mineaworld",
  linkedin: "https://linkedin.com/in/mineadev",
  twitter: "https://twitter.com/Minea_Blue",
  email: "your@email.com"
}

export const portfolioStats = {
  projectsCompleted: 8,
  yearsOfExperience: 2,
  happyClients: 3,
  codingHours: 2000
}