"use client"

import React from "react"
import { motion } from "framer-motion"

interface AnimatedTooltipProps {
  children: React.ReactNode
  tooltip: string | React.ReactNode
  className?: string
}

export function AnimatedTooltip({ children, tooltip, className = "" }: AnimatedTooltipProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 pointer-events-none z-50"
      >
        <div className="bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg shadow-lg border border-white/20">
          {typeof tooltip === "string" ? (
            <span className="whitespace-nowrap">{tooltip}</span>
          ) : (
            tooltip
          )}
          {/* Arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90" />
        </div>
      </motion.div>
    </div>
  )
}
