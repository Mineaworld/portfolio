"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import Image from "next/image"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

interface TechnologyIconProps {
  skill: {
    name: string
    icon: string
    proficiency: string
    category: string
  }
  index: number
}

const TechnologyIcon = ({ skill, index }: TechnologyIconProps) => {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Advanced':
        return 'bg-green-500'
      case 'Proficient':
        return 'bg-blue-500'
      case 'Intermediate':
        return 'bg-yellow-500'
      default:
        return 'bg-purple-500'
    }
  }

  // Check if this skill should have no icon container or proficiency indicator
  const isSpecialCase = skill.name === 'PHP' || skill.name === 'GSAP' || skill.name === 'Microsoft Office'

  const tooltipContent = (
    <div className="text-center">
      <p className="font-semibold text-sm">{skill.name}</p>
    </div>
  )

  return (
    <AnimatedTooltip tooltip={tooltipContent}>
      <motion.div
        className="relative group cursor-pointer p-4 flex flex-col items-center justify-center space-y-2 h-20"
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4, 
          delay: index * 0.03,
          ease: "easeOut"
        }}
      >
        {/* Icon container - only show for non-special cases */}
        {!isSpecialCase && (
          <div className="w-12 h-12 flex items-center justify-center transition-all duration-200 group-hover:scale-110">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={48}
              height={48}
              className="object-contain filter drop-shadow-sm"
              onError={(e) => {
                e.currentTarget.src = "/skills/fallback.svg"
              }}
            />
          </div>
        )}

        {/* Show icon directly for special cases */}
        {isSpecialCase && (
          <Image
            src={skill.icon}
            alt={skill.name}
            width={48}
            height={48}
            className="object-contain filter drop-shadow-sm transition-all duration-200 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "/skills/fallback.svg"
            }}
          />
        )}

        {/* Proficiency indicator - only show for non-special cases */}
        {!isSpecialCase && (
          <div className={`
            w-2 h-2 rounded-full ${getProficiencyColor(skill.proficiency)}
            opacity-60 group-hover:opacity-100 transition-opacity duration-200
          `} />
        )}
      </motion.div>
    </AnimatedTooltip>
  )
}

export function TechnologiesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Technologies
          </h2>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main technologies grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {skills.map((skill, index) => (
              <TechnologyIcon
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}