"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Image animation with enhanced effects
    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.8,
        opacity: 0,
        rotation: -5,
        y: 50,
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Add hover animation to image
    if (imageRef.current) {
      imageRef.current.addEventListener("mouseenter", () => {
        gsap.to(imageRef.current, {
          scale: 1.05,
          rotation: 2,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      imageRef.current.addEventListener("mouseleave", () => {
        gsap.to(imageRef.current, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

    // Title animation with enhanced effects
    const titleElement = contentRef.current?.querySelector("h2");
    if (titleElement) {
      gsap.fromTo(
        titleElement,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Enhanced paragraphs animation
    paragraphsRef.current.forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        {
          y: 30,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paragraph,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add hover animation to paragraphs
      paragraph.addEventListener("mouseenter", () => {
        gsap.to(paragraph, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      paragraph.addEventListener("mouseleave", () => {
        gsap.to(paragraph, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (imageRef.current) {
        imageRef.current.removeEventListener("mouseenter", () => {});
        imageRef.current.removeEventListener("mouseleave", () => {});
      }
      paragraphsRef.current.forEach(paragraph => {
        paragraph.removeEventListener("mouseenter", () => {});
        paragraph.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-20 lg:px-30 max-w-[900px] flex flex-col md:flex-row items-center gap-16">
        <div ref={imageRef} className="flex-shrink-0 cursor-pointer">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/10 shadow-lg">
            <Image
              src="/images/Minea.png"
              alt="Profile picture placeholder"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div ref={contentRef} className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <p 
            ref={el => paragraphsRef.current[0] = el!}
            className="text-lg text-muted-foreground leading-relaxed cursor-pointer"
          >
            Hey there, I&apos;m <span className="font-semibold">Dy Minea</span> – a web developer with a passion for transforming ideas into smooth, responsive websites. I specialize in technologies like React, Tailwind, PHP, Next.js, and SQL, crafting clean and user-friendly web applications that solve real-world challenges. I&apos;m always diving into new tech and exploring AI-driven solutions to stay ahead of the game.
          </p>
          <p 
            ref={el => paragraphsRef.current[1] = el!}
            className="text-lg text-muted-foreground leading-relaxed cursor-pointer"
          >
            When I&apos;m not coding, you&apos;ll likely find me working on side projects, staying active, or learning something new.
          </p>
          <p 
            ref={el => paragraphsRef.current[2] = el!}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            <span className="italic">Let&apos;s connect and create something incredible together!</span>
          </p>
        </div>
      </div>
    </section>
  );
} 