"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { skills, skillCategories } from "@/lib/data"
import Image from "next/image"
import { useTheme } from "next-themes"
import gsap from "gsap"

const fallbackIcon = "/skills/fallback.svg";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { theme } = useTheme()
  const skillCardsRef = useRef<(HTMLDivElement | null)[]>([])
  
  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const handleImgError = (e: any) => {
    e.target.src = fallbackIcon;
  }

  const getIconContainerClass = (skillName: string) => {
    const baseClass = "w-10 h-10 flex items-center justify-center rounded shadow-sm";
    const isDarkMode = theme === 'dark';
    
    if (isDarkMode && ['Vercel', 'Cursor', 'Git/GitHub', 'SQL'].includes(skillName)) {
      return `${baseClass} bg-white/90 border border-border`;
    }
    
    return `${baseClass} bg-background/80`;
  }

  useEffect(() => {
    skillCardsRef.current.forEach((card, index) => {
      if (!card) return;

      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -8,
          scale: 1.02,
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, [filteredSkills]);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive showcase of my technical expertise and proficiency levels in various technologies.
          </p>
        </div>
        
        <Tabs 
          defaultValue="all" 
          className="w-full max-w-4xl mx-auto"
          onValueChange={setSelectedCategory}
        >
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Skills</TabsTrigger>
              {skillCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={selectedCategory} className="mt-0">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  variants={itemVariants}
                  ref={el => skillCardsRef.current[index] = el}
                >
                  <Card className="overflow-hidden transition-all duration-300 bg-card/50 backdrop-blur-sm cursor-pointer">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className={getIconContainerClass(skill.name)}>
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              width={32}
                              height={32}
                              style={{ objectFit: 'contain', maxWidth: 32, maxHeight: 32 }}
                              onError={handleImgError}
                            />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                          skill.proficiency === 'Advanced' 
                            ? 'bg-green-500/10 text-green-500 dark:text-green-400'
                            : skill.proficiency === 'Proficient'
                            ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400'
                            : skill.proficiency === 'Intermediate'
                            ? 'bg-yellow-500/10 text-yellow-500 dark:text-yellow-400'
                            : 'bg-orange-500/10 text-orange-500 dark:text-orange-400'
                        }`}>
                          {skill.proficiency}
                        </span>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}