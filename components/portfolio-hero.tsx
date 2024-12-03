"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Linkedin, Github, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { downloadCV } from "@/app/actions"

export default function PortfolioHero() {
  const [activeSection, setActiveSection] = useState("")
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true)
      const { url, filename } = await downloadCV()
      
      // Create a link element and trigger download
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading CV:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const NavButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = activeSection === href.replace("#", "")
    
    return (
      <button
        onClick={() => scrollToSection(href.replace("#", ""))}
        className={cn(
          "relative text-sm text-white/80 hover:text-white transition-all duration-300",
          "before:absolute before:inset-0 before:-z-10",
          "before:transform before:transition-transform before:duration-300",
          "hover:before:scale-110",
          "active:before:scale-95",
          "px-6 py-2 rounded-lg",
          "bg-gradient-to-br from-white/10 to-transparent",
          "shadow-[0_0_15px_rgba(255,255,255,0.1)]",
          "hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
          "active:shadow-[0_0_10px_rgba(255,255,255,0.1)]",
          isActive && "text-white bg-white/20 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
        )}
      >
        {children}
      </button>
    )
  }

  const SocialButton = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button 
        variant="outline" 
        size="lg" 
        className={cn(
          "rounded-xl border-2 border-white text-white",
          "hover:bg-white/10 transform transition-all duration-300",
          "hover:scale-110 active:scale-95",
          "shadow-[0_5px_15px_rgba(255,255,255,0.1)]",
          "hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]",
          "backdrop-blur-sm",
          "group",
          "bg-gradient-to-r from-[#1C4532] to-[#2A5A43]", // Matching the background theme
          "border-opacity-50 hover:border-opacity-100"
        )}
      >
        <Icon className="h-6 w-6 mr-2 group-hover:animate-bounce" />
        {label}
      </Button>
    </Link>
  )

  return (
    <section className="relative">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#1C4532]/80 flex flex-col md:flex-row items-center justify-between p-4 md:p-6 gap-4">
        <Link href="/" className="text-2xl font-bold text-white hover:scale-105 transition-transform">
          Rahul Gour
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <NavButton href="#about">About</NavButton>
          <NavButton href="#skills">Skills</NavButton>
          <NavButton href="#projects">Projects</NavButton>
          <NavButton href="#experience">Experience</NavButton>
          <Button 
            variant="secondary" 
            size="lg"
            onClick={handleDownloadCV}
            disabled={isDownloading}
            className={cn(
              "bg-white text-[#1C4532] hover:bg-white/90",
              "transform transition-all duration-300",
              "hover:scale-105 active:scale-95",
              "shadow-[0_0_20px_rgba(255,255,255,0.2)]",
              "hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
              "flex items-center gap-2"
            )}
          >
            <Download className={cn(
              "h-4 w-4",
              isDownloading && "animate-bounce"
            )} />
            {isDownloading ? "Downloading..." : "Download CV"}
          </Button>
        </div>
      </nav>

      <div className="relative mx-auto max-w-6xl px-6 pt-20">
        <div className="grid gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
              AI Engineer
              <ArrowUpRight className="inline-block ml-2 h-8 w-8" />
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Versatile AI and Software Engineer specializing in Machine Learning, Deep Learning, and cloud infrastructure management.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-white/80">
            <Link 
              href="mailto:rahulgaur608@gmail.com" 
              className="flex items-center gap-2 hover:text-white transform transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              rahulgaur608@gmail.com
            </Link>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              HSR LAYOUT, Bengaluru
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <SocialButton 
              href="https://www.linkedin.com/in/rahul-gaur-9570812a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialButton 
              href="https://github.com/rahulgaur608/portfolio"
              icon={Github}
              label="GitHub"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

