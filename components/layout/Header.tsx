"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          href="#home" 
          className="text-xl font-bold tracking-tight transition-colors hover:text-primary/90 ml-4 sm:ml-8 md:ml-12 flex items-center space-x-1"
          onClick={() => scrollToSection("#home")}
        >
          <span className="text-primary">&lt;</span>
          <span>Dy Minea</span>
          <span className="text-primary">/&gt;</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-1">
          <nav className="mr-4">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className="text-base hover:text-primary/90"
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
        
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="ml-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-md">
          <nav className="container mx-auto py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className="w-full justify-start text-base"
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}