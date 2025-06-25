"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Project } from "@/lib/data"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useMotionValue, useTransform } from "framer-motion"

interface ProjectCardProps {
  project: Project
  onClick?: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  // 3D Card Effect logic
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [15, -15])
  const rotateY = useTransform(x, [-50, 50], [-15, 15])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    x.set(mouseX - centerX)
    y.set(mouseY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-80 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between bg-white dark:bg-black cursor-pointer transition-transform duration-300"
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="relative w-full h-40 overflow-hidden rounded-xl mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold tracking-tight mb-1">{project.title}</h3>
          <p className="text-muted-foreground line-clamp-2 mb-2">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech: string) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          {project.repoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
} 