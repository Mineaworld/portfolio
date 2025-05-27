"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { experiences } from "@/lib/data"

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and key achievements in web development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-border -translate-x-1/2 z-0" />
            
            {experiences.map((experience, index) => (
              <motion.div 
                key={experience.id}
                className="mb-12 relative z-10"
                variants={itemVariants}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  <div className="md:w-1/2 flex justify-center">
                    <Card className={`w-full max-w-lg ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'} shadow-md hover:shadow-lg transition-shadow`}>
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
                  
                  <div className="hidden md:block w-4 h-4 absolute left-1/2 top-10 -translate-x-1/2 rounded-full bg-primary border-4 border-background" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}