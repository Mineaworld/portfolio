"use client"

import { useEffect, useRef, useState } from "react"
import { projects } from "@/lib/data"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ProjectGrid() {
  const [selected, setSelected] = useState<any>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Cards animation
    cardRefs.current.forEach((card, index) => {
      if (!card) return

      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Add hover animation to cards
      card.addEventListener("mouseenter", () => {
        if (!selected && !isAnimating) { // Only animate if modal is not open and not clicking
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            duration: 0.3,
            ease: "power2.out"
          })
        }
      })

      card.addEventListener("mouseleave", () => {
        if (!selected && !isAnimating) { // Only animate if modal is not open and not clicking
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            duration: 0.3,
            ease: "power2.out"
          })
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      cardRefs.current.forEach(card => {
        if (!card) return
        card.removeEventListener("mouseenter", () => {})
        card.removeEventListener("mouseleave", () => {})
      })
    }
  }, [selected, isAnimating]) // Add isAnimating to dependencies

  const handleCardClick = (project: any) => {
    setIsAnimating(true)
    // Kill any ongoing GSAP animations
    gsap.killTweensOf(cardRefs.current)
    setSelected(project)
    // Reset animation state after a short delay
    setTimeout(() => setIsAnimating(false), 100)
  }

  return (
    <div className="relative">
      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <div 
            key={project.id}
            ref={el => cardRefs.current[index] = el}
            className="cursor-pointer"
            onClick={() => handleCardClick(project)}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <ProjectModal 
        open={!!selected} 
        onClose={() => setSelected(null)} 
        project={selected} 
      />
    </div>
  )
} 