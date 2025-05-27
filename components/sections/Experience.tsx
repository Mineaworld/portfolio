"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { experiences } from "@/lib/data"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const dotsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Timeline line animation
    gsap.fromTo(
      timelineRef.current,
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scaleY: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Cards animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return

      const direction = index % 2 === 0 ? 1 : -1
      
      gsap.fromTo(
        card,
        {
          x: direction * 100,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
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
        gsap.to(card, {
          y: -8,
          scale: 1.02,
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          duration: 0.3,
          ease: "power2.out"
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    // Timeline dots animation
    dotsRef.current.forEach((dot, index) => {
      if (!dot) return

      gsap.fromTo(
        dot,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: dot,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      cardsRef.current.forEach(card => {
        if (!card) return
        card.removeEventListener("mouseenter", () => {})
        card.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and key achievements in web development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div 
              ref={timelineRef}
              className="absolute left-0 md:left-1/2 h-full w-px bg-border -translate-x-1/2 z-0 origin-top"
            />
            
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className="mb-12 relative z-10"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  <div className="md:w-1/2 flex justify-center">
                    <Card 
                      ref={el => cardsRef.current[index] = el}
                      className={`w-full max-w-lg ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'} shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
                    >
                      <CardHeader>
                        <CardTitle>{experience.position}</CardTitle>
                        <div className="text-sm text-muted-foreground">
                          <div>{experience.company} | {experience.location}</div>
                          <div>{experience.startDate} - {experience.endDate}</div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 list-disc pl-5">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div 
                    ref={el => dotsRef.current[index] = el}
                    className="hidden md:block w-4 h-4 absolute left-1/2 top-10 -translate-x-1/2 rounded-full bg-primary border-4 border-background"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}