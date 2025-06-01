"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface HistoricalFigure {
  id: number
  name: string
  fullName: string
  birthDate: string
  deathDate: string
  birthPlace: string
  deathPlace: string
  majorEvents: string[]
  period: string
  category: string
  image: string
  description: string
}

// Sample historical figures data
const historicalFigures: HistoricalFigure[] = [
  {
    id: 1,
    name: "Soekarno",
    fullName: "Ir. H. Soekarno",
    birthDate: "6 Juni 1901",
    deathDate: "21 Juni 1970",
    birthPlace: "Surabaya, Jawa Timur",
    deathPlace: "Jakarta",
    majorEvents: ["Proklamasi Kemerdekaan Indonesia", "Konferensi Asia-Afrika", "Pembentukan Pancasila"],
    period: "1901-1970",
    category: "Presiden",
    image: "/images/soekarno.png",
    description:
      "Presiden pertama Republik Indonesia yang memimpin perjuangan kemerdekaan dan merumuskan dasar negara Pancasila.",
  },
  {
    id: 2,
    name: "Cut Nyak Dhien",
    fullName: "Cut Nyak Dhien",
    birthDate: "1848",
    deathDate: "6 November 1908",
    birthPlace: "Lampadang, Aceh",
    deathPlace: "Sumedang, Jawa Barat",
    majorEvents: ["Perang Aceh", "Perlawanan terhadap Belanda", "Pahlawan Nasional"],
    period: "1848-1908",
    category: "Pahlawan",
    image: "/images/soekarno.png",
    description:
      "Pahlawan nasional dari Aceh yang memimpin perlawanan terhadap penjajahan Belanda dengan penuh keberanian.",
  },
  {
    id: 3,
    name: "R.A. Kartini",
    fullName: "Raden Adjeng Kartini",
    birthDate: "21 April 1879",
    deathDate: "17 September 1904",
    birthPlace: "Jepara, Jawa Tengah",
    deathPlace: "Rembang, Jawa Tengah",
    majorEvents: ["Pelopor Emansipasi Wanita", "Pendidikan untuk Perempuan", "Surat-surat Kartini"],
    period: "1879-1904",
    category: "Emansipasi",
    image: "/images/soekarno.png",
    description: "Pelopor kebangkitan perempuan pribumi dan pendidikan kaum perempuan di Indonesia.",
  },
  {
    id: 4,
    name: "Mohammad Hatta",
    fullName: "Dr. H. Mohammad Hatta",
    birthDate: "12 Agustus 1902",
    deathDate: "14 Maret 1980",
    birthPlace: "Bukittinggi, Sumatera Barat",
    deathPlace: "Jakarta",
    majorEvents: ["Proklamasi Kemerdekaan", "Wakil Presiden Pertama", "Bapak Koperasi Indonesia"],
    period: "1902-1980",
    category: "Wakil Presiden",
    image: "/images/soekarno.png",
    description: "Wakil Presiden pertama Indonesia dan dikenal sebagai Bapak Koperasi Indonesia.",
  },
]

const HistoricalGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === historicalFigures.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? historicalFigures.length - 1 : prevIndex - 1
      }
    })
  }

  const currentFigure = historicalFigures[currentIndex]

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galeri Tokoh Bersejarah</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jelajahi kehidupan dan perjuangan para tokoh bersejarah Indonesia yang telah membentuk bangsa ini
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative h-[500px] overflow-hidden rounded-2xl bg-white shadow-2xl">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1)
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1)
                    }
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentFigure.image || "/placeholder.svg"}
                    alt={currentFigure.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{currentFigure.name}</h3>
                    <p className="text-sm opacity-90">{currentFigure.period}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white z-10"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white z-10"
                onClick={() => paginate(1)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                  {currentFigure.category}
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2">{currentFigure.fullName}</h3>

                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">
                      {currentFigure.birthDate} - {currentFigure.deathDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{currentFigure.birthPlace}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{currentFigure.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Peristiwa Penting:</h4>
                  <ul className="space-y-2">
                    {currentFigure.majorEvents.map((event, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {historicalFigures.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-amber-500" : "bg-gray-300"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
              />
            ))}
          </div>
        </div>

        {/* Read More Section */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-amber-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pelajari Lebih Lanjut</h3>
              <p className="text-gray-600 mb-6">
                Temukan lebih banyak cerita inspiratif dari para tokoh bersejarah Indonesia dan pelajari bagaimana
                mereka membentuk bangsa ini menjadi seperti sekarang.
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">Baca Selengkapnya</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HistoricalGallery
