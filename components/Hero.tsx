"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          height: `calc(100% + ${scrollY * 0.5}px)`,
        }}
      >
        <Image src="/images/bg.png" alt="Ancient temples in misty forest" fill priority className="object-cover" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center mb-10 text-white z-10">
        <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">NusStory</h1>
          <p className="text-xl md:text-2xl">Jelajahi Nusantara Lewat Cerita</p>
        </div>
      </div>

      {/* Historical Figure Image */}
      <div className="absolute md:bottom-1/6 bottom-1/12 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <div className="relative w-[200px] h-[300px] md:w-[300px] md:h-[400px] overflow-hidden animate-float">
          <Image src="/images/soekarno.png" alt="Historical figure" fill  />
        </div>
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(0.5deg);
          }
          50% {
            transform: translateY(-4px) rotate(0deg);
          }
          75% {
            transform: translateY(-12px) rotate(-0.5deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
