"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-20 lg:px-30 max-w-[900px] flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
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
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m <span className="font-semibold">Dy Minea</span>, a passionate full stack developer dedicated to building beautiful, high-performance web applications that make a difference. With a strong foundation in JavaScript, React, and modern UI/UX principles, I thrive on transforming complex ideas into seamless digital experiences. My approach blends technical excellence with a deep understanding of user needs, ensuring every project is both robust and intuitive.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Driven by curiosity and a love for learning, I stay at the forefront of web technology, always seeking new ways to deliver value—whether through open-source contributions, team collaboration, or independent innovation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="italic">(This is placeholder text. Update with your real story soon!)</span>
          </p>
        </div>
      </div>
    </section>
  );
} 