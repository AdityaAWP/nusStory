"use client"

import { Crown, Scroll, Users, Calendar, ArrowRight } from "lucide-react"
import { useState } from "react"

interface Era {
  id: number
  title: string
  period: string
  icon: any
  color: string
  description: string
  stories: string[]
  pattern: string
}

interface InteractiveEraTimelineProps {
  isDarkMode?: boolean
}

export default function InteractiveEraTimeline({ isDarkMode = false }: InteractiveEraTimelineProps) {
  const [activeEra, setActiveEra] = useState(0)

  const eras: Era[] = [
    {
      id: 0,
      title: "Era Kerajaan",
      period: "700-1500 M",
      icon: Crown,
      color: isDarkMode ? "#8A76D" : "#5C3D2E",
      description:
        "Masa kejayaan Sriwijaya, Majapahit, dan kerajaan-kerajaan Nusantara yang menguasai jalur perdagangan maritim.",
      stories: ["Sriwijaya Maritime Empire", "Majapahit Golden Age", "Borobudur Construction"],
      pattern: "ancient",
    },
    {
      id: 1,
      title: "Masa Kolonial",
      period: "1500-1945",
      icon: Scroll,
      color: isDarkMode ? "#7D9C88" : "#A7705C",
      description: "Periode penjajahan Belanda dan Jepang, perlawanan rakyat, dan munculnya gerakan kemerdekaan.",
      stories: ["Dutch Colonial Rule", "Japanese Occupation", "Independence Movement"],
      pattern: "colonial",
    },
    {
      id: 2,
      title: "Kemerdekaan",
      period: "1945-1998",
      icon: Users,
      color: "#dc2626",
      description: "Proklamasi kemerdekaan, era Soekarno dan Soeharto, pembangunan nasional dan reformasi.",
      stories: ["Proclamation Day", "Sukarno Era", "New Order Period"],
      pattern: "independence",
    },
    {
      id: 3,
      title: "Era Modern",
      period: "1998-Now",
      icon: Calendar,
      color: isDarkMode ? "#B9C388" : "#8A76D",
      description: "Era reformasi, demokrasi, dan transformasi Indonesia menjadi negara modern di abad ke-21.",
      stories: ["Reform Era", "Digital Transformation", "Modern Indonesia"],
      pattern: "modern",
    },
  ]

  const EraIcon = ({ era }: { era: Era }) => {
    const IconComponent = era.icon
    return <IconComponent className="w-8 h-8 text-white" />
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Floating Navigation */}


        {/* Interactive Timeline */}
        <div className="relative">
          {/* Background Era Display */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={`text-[20rem] font-bold opacity-5 transition-all duration-1000 ${
                isDarkMode ? "text-[#B9C388]" : "text-[#A7705C]"
              }`}
              style={{
                fontFamily: "serif",
                transform: `rotate(-15deg) scale(${1 + activeEra * 0.1})`,
              }}
            >
              {eras[activeEra].period.split("-")[0]}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 min-h-[80vh] flex items-center">
            <div className="w-full">
              {/* Era Selector */}
              <div className="flex justify-center mb-16">
                <div className="flex space-x-2 p-2 rounded-full bg-black/10 backdrop-blur-sm">
                  {eras.map((era, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveEra(index)}
                      className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                        activeEra === index
                          ? isDarkMode
                            ? "bg-[#8A76D] text-[#F5F5F5]"
                            : "bg-[#5C3D2E] text-[#F5F5F5]"
                          : isDarkMode
                            ? "text-[#A96D88] hover:text-[#F5F5F5]"
                            : "text-[#715144] hover:text-[#2e2e2e]"
                      }`}
                      style={{ fontFamily: "serif" }}
                    >
                      <EraIcon era={era} />
                      <span className="hidden md:block">{era.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Era Content */}
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Era Info */}
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: eras[activeEra].color }}
                      >
                        <EraIcon era={eras[activeEra]} />
                      </div>
                      <div>
                        <h3
                          className={`text-4xl font-bold ${isDarkMode ? "text-[#F5F5F5]" : "text-[#2e2e2e]"}`}
                          style={{ fontFamily: "serif" }}
                        >
                          {eras[activeEra].title}
                        </h3>
                        <p
                          className={`text-xl ${isDarkMode ? "text-[#B9C388]" : "text-[#A7705C]"}`}
                          style={{ fontFamily: "serif" }}
                        >
                          {eras[activeEra].period}
                        </p>
                      </div>
                    </div>
                    <p
                      className={`text-lg leading-relaxed ${isDarkMode ? "text-[#A96D88]" : "text-[#715144]"}`}
                      style={{ fontFamily: "serif" }}
                    >
                      {eras[activeEra].description}
                    </p>
                  </div>

                  {/* Stories List */}
                  <div className="space-y-4">
                    <h4
                      className={`text-2xl font-bold ${isDarkMode ? "text-[#F5F5F5]" : "text-[#2e2e2e]"}`}
                      style={{ fontFamily: "serif" }}
                    >
                      Kisah Utama:
                    </h4>
                    {eras[activeEra].stories.map((story, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
                          isDarkMode
                            ? "border-[#3B2A21] hover:border-[#B9C388] bg-[#2d1e18]/50"
                            : "border-[#d2e0c0] hover:border-[#A7705C] bg-[#f1f1ee]/50"
                        }`}
                      >
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: eras[activeEra].color }} />
                        <span
                          className={`${isDarkMode ? "text-[#F5F5F5]" : "text-[#2e2e2e]"}`}
                          style={{ fontFamily: "serif" }}
                        >
                          {story}
                        </span>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-50" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Interactive Visual */}
                <div className="relative">
                  <div
                    className={`aspect-square rounded-full border-8 relative overflow-hidden transition-all duration-1000 ${
                      isDarkMode ? "border-[#3B2A21]" : "border-[#d2e0c0]"
                    }`}
                    style={{
                      transform: `rotate(${activeEra * 90}deg)`,
                      background: `conic-gradient(from 0deg, ${eras[activeEra].color}20, transparent, ${eras[activeEra].color}40)`,
                    }}
                  >
                    {/* Center Content */}
                    <div
                      className="absolute inset-8 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: eras[activeEra].color,
                        transform: `rotate(-${activeEra * 90}deg)`,
                      }}
                    >
                      <div className="text-center text-white">
                        <EraIcon era={eras[activeEra]} />
                        <div className="text-2xl font-bold" style={{ fontFamily: "serif" }}>
                          {eras[activeEra].period}
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-4 h-4 rounded-full bg-white/30"
                        style={{
                          top: `${20 + Math.sin(i * 0.785) * 30}%`,
                          left: `${50 + Math.cos(i * 0.785) * 30}%`,
                          animationDelay: `${i * 0.2}s`,
                          animation: "pulse 2s infinite",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  )
}