"use client"

import { motion } from "framer-motion"
import { portfolioStats } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Code, Users, Clock, CheckSquare } from "lucide-react"

const stats = [
  { 
    label: "Projects Completed", 
    value: portfolioStats.projectsCompleted,
    icon: CheckSquare,
    color: "text-chart-1" 
  },
  { 
    label: "Years Experience", 
    value: portfolioStats.yearsOfExperience, 
    icon: Clock,
    color: "text-chart-2" 
  },
  { 
    label: "Happy Clients", 
    value: portfolioStats.happyClients, 
    icon: Users,
    color: "text-chart-3" 
  },
  { 
    label: "Coding Hours", 
    value: portfolioStats.codingHours.toLocaleString(), 
    icon: Code,
    color: "text-chart-4" 
  }
]

export function Stats() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={cn("p-4 rounded-full bg-primary-foreground/10", stat.color)}>
                    <Icon className="h-8 w-8" />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}