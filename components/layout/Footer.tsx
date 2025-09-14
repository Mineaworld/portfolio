import Link from "next/link"
import { Mail } from "lucide-react"
import { SocialIcons } from "@/components/ui/social-icons"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-muted/50 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold">&lt; Dy Minea /&gt;</h3>
            <p className="text-sm text-muted-foreground">Web Developer</p>
          </div>
          
          <div className="flex items-center gap-4">
            <SocialIcons iconSize={4} />
            <Link 
              href="mailto:contact@dyminea.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Dy Minea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}