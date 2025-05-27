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
    
    // Image animation
    gsap.fromTo(
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
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Title animation
    const titleElement = contentRef.current?.querySelector("h2");
    if (titleElement) {
      gsap.fromTo(
        titleElement,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
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

    // Paragraphs animation
    paragraphsRef.current.forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
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
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-20 lg:px-30 max-w-[900px] flex flex-col md:flex-row items-center gap-10">
        <div ref={imageRef} className="flex-shrink-0">
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
        <div ref={contentRef} className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">About Me</h2>
          <p 
            ref={el => paragraphsRef.current[0] = el!}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I&apos;m <span className="font-semibold">Dy Minea</span>, a passionate full stack developer dedicated to building beautiful, high-performance web applications that make a difference. With a strong foundation in JavaScript, React, and modern UI/UX principles, I thrive on transforming complex ideas into seamless digital experiences. My approach blends technical excellence with a deep understanding of user needs, ensuring every project is both robust and intuitive.
          </p>
          <p 
            ref={el => paragraphsRef.current[1] = el!}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Driven by curiosity and a love for learning, I stay at the forefront of web technology, always seeking new ways to deliver value—whether through open-source contributions, team collaboration, or independent innovation.
          </p>
          <p 
            ref={el => paragraphsRef.current[2] = el!}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            <span className="italic">(This is placeholder text. Update with your real story soon!)</span>
          </p>
        </div>
      </div>
    </section>
  );
} 