"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Project } from "@/lib/data"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Image hover animation
    if (imageRef.current) {
      imageRef.current.addEventListener("mouseenter", () => {
        gsap.to(imageRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      imageRef.current.addEventListener("mouseleave", () => {
        gsap.to(imageRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    }

    // Title hover animation
    if (titleRef.current) {
      titleRef.current.addEventListener("mouseenter", () => {
        gsap.to(titleRef.current, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      titleRef.current.addEventListener("mouseleave", () => {
        gsap.to(titleRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    }

    // Tech badges hover animation
    const badges = techRef.current?.querySelectorAll(".badge")
    badges?.forEach(badge => {
      badge.addEventListener("mouseenter", () => {
        gsap.to(badge, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      badge.addEventListener("mouseleave", () => {
        gsap.to(badge, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    // Links hover animation
    const links = linksRef.current?.querySelectorAll("a")
    links?.forEach(link => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener("mouseenter", () => {})
        imageRef.current.removeEventListener("mouseleave", () => {})
      }
      if (titleRef.current) {
        titleRef.current.removeEventListener("mouseenter", () => {})
        titleRef.current.removeEventListener("mouseleave", () => {})
      }
      badges?.forEach(badge => {
        badge.removeEventListener("mouseenter", () => {})
        badge.removeEventListener("mouseleave", () => {})
      })
      links?.forEach(link => {
        link.removeEventListener("mouseenter", () => {})
        link.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return (
    <Card 
      ref={cardRef}
      className="overflow-hidden transition-all duration-300 bg-card/50 backdrop-blur-sm cursor-pointer"
      onClick={onClick}
    >
      <div 
        ref={imageRef}
        className="relative w-full h-48 overflow-hidden"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-fill transition-transform duration-300 "
        />
      </div>
      <CardHeader>
        <CardTitle 
          ref={titleRef}
          className="text-xl font-bold tracking-tight"
        >
          {project.title}
        </CardTitle>
        <p 
          ref={descriptionRef}
          className="text-muted-foreground line-clamp-2"
        >
          {project.description}
        </p>
      </CardHeader>
      <CardContent>
        <div 
          ref={techRef}
          className="flex flex-wrap gap-2 mb-4"
        >
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div 
          ref={linksRef}
          className="flex gap-2"
        >
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
      </CardContent>
    </Card>
  )
} 