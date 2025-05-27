"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin } from "lucide-react"
import gsap from "gsap"

interface SocialIconsProps {
  className?: string
  iconSize?: number
}

export function SocialIcons({ className = "", iconSize = 7 }: SocialIconsProps) {
  const githubRef = useRef<HTMLAnchorElement>(null)
  const linkedinRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const icons = [githubRef.current, linkedinRef.current]
    
    icons.forEach((icon) => {
      if (!icon) return
      
      // Initial state
      gsap.set(icon, { scale: 1 })
      
      // Hover animation
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.3,
          ease: "back.out(1.7)",
          color: "var(--primary)"
        })
      })
      
      // Mouse leave animation
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          color: "var(--muted-foreground)"
        })
      })
    })
    
    return () => {
      icons.forEach((icon) => {
        if (!icon) return
        icon.removeEventListener("mouseenter", () => {})
        icon.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <a 
        ref={githubRef}
        href="https://github.com/Mineaworld"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground transition-colors"
        aria-label="GitHub Profile"
      >
        <Github className={`h-${iconSize} w-${iconSize}`} />
      </a>
      <a 
        ref={linkedinRef}
        href="https://linkedin.com/in/mineadev"
        target="_blank"
        rel="noopener noreferrer" 
        className="text-muted-foreground transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className={`h-${iconSize} w-${iconSize}`} />
      </a>
    </div>
  )
} 