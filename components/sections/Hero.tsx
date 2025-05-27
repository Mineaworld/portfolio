"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { socialLinks } from "@/lib/data"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timeout)
  }, [])
  
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-background" />
      
      <div className="container mx-auto px-6 sm:px-20 lg:px-30 max-w-[1200px] py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div 
            className={cn(
              "lg:col-span-3 space-y-8",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              "transition-all duration-700"
            )}
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Hi, I&apos;m <span className="text-primary">Dy Minea</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed">
                Web Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I create beautiful, functional websites and web applications with a focus on user experience. 
              Specializing in modern frontend technologies like PHP Laravel, React, Next.js, and Tailwind CSS.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <Button size="lg" className="min-w-[160px]" asChild>
                <a href="#contact">Let&apos;s Talk</a>
              </Button>
              <Button size="lg" className="min-w-[200px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-pink-500/30 hover:scale-105 transition-transform font-bold border-0 ring-2 ring-pink-400/60" asChild>
                <a href="Resume/DY MINEA - Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5 animate-bounce" />
                  Download My Resume
                </a>
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-6">
              <a 
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-7 w-7" />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-7 w-7" />
              </a>
            </div>
          </div>
          
          <div 
            className={cn(
              "lg:col-span-2 flex justify-center",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
              "transition-all duration-700 delay-300"
            )}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl">
              <Image
                src="images/profile-pic.png"
                alt="Dy Minea"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}