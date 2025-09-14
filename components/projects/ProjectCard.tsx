"use client"

import { Project } from "@/lib/data"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: Project
  onClick?: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="relative w-full h-full rounded-3xl p-3 flex flex-col cursor-pointer"
      style={{
        backgroundColor: 'transparent',
        background: 'transparent',
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between mt-2">
        <div>
          <h3 className="text-xl font-bold tracking-tight mb-1">{project.title}</h3>
          <p className="text-muted-foreground line-clamp-2 mb-2">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech: string) => (
            <span key={tech} className="px-2 py-1 text-xs rounded-full border border-neutral-300/50 dark:border-white/20 text-neutral-700 dark:text-neutral-300 bg-transparent">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-sm rounded-md border border-neutral-300/50 dark:border-white/20 text-neutral-700 dark:text-neutral-300 bg-transparent hover:bg-neutral-100/30 dark:hover:bg-white/5 transition-colors"
            >
              <Github className="h-4 w-4 mr-2" />
              Code
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-sm rounded-md border border-neutral-300/50 dark:border-white/20 text-neutral-700 dark:text-neutral-300 bg-transparent hover:bg-neutral-100/30 dark:hover:bg-white/5 transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
} 