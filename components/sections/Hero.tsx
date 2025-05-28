"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { SocialIcons } from "@/components/ui/social-icons"
import gsap from "gsap"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    
    // Title animation
    tl.fromTo(
      titleRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
      }
    )
    
    // Subtitle animation
    .fromTo(
      subtitleRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
      "-=0.6"
    )
    
    // Description animation
    .fromTo(
      descriptionRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
      "-=0.6"
    )
    
    // Buttons animation
    .fromTo(
      buttonsRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
      "-=0.6"
    )
    
    // Social icons animation
    .fromTo(
      socialRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      },
      "-=0.6"
    )
    
    // Image animation
    .fromTo(
      imageRef.current,
      {
        scale: 0.8,
        opacity: 0,
        rotation: -5,
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      },
      "-=1"
    )

    // Add hover animation to image
    if (imageRef.current) {
      imageRef.current.addEventListener("mouseenter", () => {
        gsap.to(imageRef.current, {
          scale: 1.05,
          rotation: 2,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      imageRef.current.addEventListener("mouseleave", () => {
        gsap.to(imageRef.current, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    }

    // Add hover animation to buttons
    const buttons = buttonsRef.current?.querySelectorAll("a")
    buttons?.forEach(button => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
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
      buttons?.forEach(button => {
        button.removeEventListener("mouseenter", () => {})
        button.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])
  
  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-background" />
      
      <div className="container mx-auto px-6 sm:px-20 lg:px-30 max-w-[1200px] py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div ref={contentRef} className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Hi, I&apos;m <span className="text-primary">Dy Minea</span>
              </h1>
              <h2 ref={subtitleRef} className="text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-relaxed">
                Web Developer
              </h2>
            </div>
            
            <p ref={descriptionRef} className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I create beautiful, functional websites and web applications with a focus on user experience. 
              Specializing in modern technologies like PHP Laravel, React, Next.js, and Tailwind CSS.
            </p>
            
            <div ref={buttonsRef} className="flex flex-wrap gap-6 pt-4">
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
            
            <div ref={socialRef} className="pt-8">
              <SocialIcons />
            </div>
          </div>
          
          <div ref={imageRef} className="lg:col-span-2 flex justify-center cursor-pointer">
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