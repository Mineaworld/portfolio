import Link from "next/link"
import { Mail } from "lucide-react"
import { SocialIcons } from "@/components/ui/social-icons"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Dy Minea</h3>
            <p className="text-muted-foreground">Web Developer</p>
          </div>
          
          <div className="flex items-center gap-4">
            <SocialIcons iconSize={5} />
            <Link 
              href="mailto:contact@dyminea.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Dy Minea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}