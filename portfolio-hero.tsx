"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function PortfolioHero() {
  return (
    <div className="min-h-screen bg-[#1C4532]"> {/* Changed to dark green */}
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 gap-4">
        <Link href="/" className="text-2xl font-bold text-white">
          Rahul.
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <Link href="/design" className="text-sm text-white/80 hover:text-white">
            Design
          </Link>
          <Link href="/photos" className="text-sm text-white/80 hover:text-white">
            Photos
          </Link>
          <Link href="/about" className="text-sm text-white/80 hover:text-white">
            About
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/fr" className="text-sm text-white/60 hover:text-white">
              FR
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/en" className="text-sm font-medium text-white hover:text-white/90">
              EN
            </Link>
          </div>
          <Button variant="secondary" size="sm" className="bg-white text-[#1C4532] hover:bg-white/90">
            hello@rahul.dev
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative mx-auto max-w-6xl px-6 pt-20">
        <div className="grid gap-4">
          <p className="text-xl text-white">👋, my name is Rahul and I am a freelance</p>
          <div className="relative">
            <h1 className="text-4xl md:text-6xl lg:text-[8rem] font-bold leading-none tracking-tighter text-white">
              Webdesigner
              <ArrowUpRight className="absolute right-4 md:right-20 top-2 md:top-8 h-4 md:h-8 w-4 md:w-8" />
            </h1>
            <div className="relative">
              <h2 className="text-4xl md:text-6xl lg:text-[8rem] font-bold leading-none tracking-tighter text-transparent">
                & Photographer
              </h2>
            </div>
          </div>
          <p className="text-xl text-white">based in Paris, France.</p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button
              className="rounded-full bg-white px-4 md:px-8 py-4 md:py-6 text-[#1C4532] hover:bg-white/90 text-sm md:text-base"
              size="lg"
            >
              You need a designer
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white px-4 md:px-8 py-4 md:py-6 text-white hover:bg-white/10 text-sm md:text-base"
              size="lg"
            >
              You need a photographer
            </Button>
          </div>

          {/* Background Image */}
          <div className="absolute right-0 top-1/2 -z-10 h-[500px] w-[400px] -translate-y-1/2">
            <Image
              src="/placeholder.svg"
              alt="Portrait"
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>

          {/* Client Logos */}
          <div className="mt-12 md:mt-20 flex flex-wrap items-center gap-4 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 md:h-8 w-16 md:w-20 bg-white/20" />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

