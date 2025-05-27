"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { skills, skillCategories } from "@/lib/data"

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  
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
                <motion.div key={skill.name} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center justify-between gap-2">
                        {/* Placeholder for skill icon */}
                        {/* <SkillIcon name={skill.name} /> */}
                        <span>{skill.name}</span>
                        <span className="text-sm font-normal text-muted-foreground">
                          {skill.level}%
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        indicatorClassName="bg-gradient-to-r from-primary to-secondary transition-all duration-700"
                      />
                    </CardContent>
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