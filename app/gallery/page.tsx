"use client"

import { useState } from "react"
import { Search, Calendar, User, MapPin, Skull } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

const historicalFigures: HistoricalFigure[] = [
  {
    id: 1,
    name: "SOEKARNO",
    fullName: "Ir. H. Soekarno",
    birthDate: "6 Juni 1901",
    deathDate: "21 Juni 1970",
    birthPlace: "Surabaya, Jawa Timur",
    deathPlace: "Jakarta",
    majorEvents: ["Proklamasi Kemerdekaan", "Konferensi Asia Afrika", "Gerakan Non-Blok"],
    period: "1901-1970",
    category: "Presiden Pertama",
    image: "/images/jago.jpeg",
    description: "Presiden pertama Republik Indonesia dan Proklamator kemerdekaan Indonesia.",
  },
  {
    id: 2,
    name: "KARTINI",
    fullName: "Raden Adjeng Kartini",
    birthDate: "21 April 1879",
    deathDate: "17 September 1904",
    birthPlace: "Jepara, Jawa Tengah",
    deathPlace: "Rembang, Jawa Tengah",
    majorEvents: ["Surat-surat Kartini", "Perjuangan Emansipasi Wanita", "Pendidikan untuk Perempuan"],
    period: "1879-1904",
    category: "Pahlawan Emansipasi",
    image: "/images/jago.jpeg",
    description: "Pelopor kebangkitan perempuan pribumi dan pejuang emansipasi wanita Indonesia.",
  },
  {
    id: 3,
    name: "DIPONEGORO",
    fullName: "Pangeran Diponegoro",
    birthDate: "11 November 1785",
    deathDate: "8 Januari 1855",
    birthPlace: "Yogyakarta",
    deathPlace: "Makassar, Sulawesi Selatan",
    majorEvents: ["Perang Diponegoro", "Perlawanan terhadap Belanda", "Perang Jawa"],
    period: "1785-1855",
    category: "Pahlawan Nasional",
    image: "/images/jago.jpeg",
    description: "Pemimpin Perang Diponegoro dan pahlawan perlawanan terhadap kolonial Belanda.",
  },
  {
    id: 4,
    name: "HATTA",
    fullName: "Dr. H. Mohammad Hatta",
    birthDate: "12 Agustus 1902",
    deathDate: "14 Maret 1980",
    birthPlace: "Bukittinggi, Sumatera Barat",
    deathPlace: "Jakarta",
    majorEvents: ["Proklamasi Kemerdekaan", "Wakil Presiden Pertama", "Bapak Koperasi"],
    period: "1902-1980",
    category: "Wakil Presiden Pertama",
    image: "/images/jago.jpeg",
    description: "Wakil Presiden pertama Indonesia dan Proklamator kemerdekaan Indonesia.",
  },
  {
    id: 5,
    name: "SUDIRMAN",
    fullName: "Jenderal Besar Sudirman",
    birthDate: "24 Januari 1916",
    deathDate: "29 Januari 1950",
    birthPlace: "Purbalingga, Jawa Tengah",
    deathPlace: "Magelang, Jawa Tengah",
    majorEvents: ["Panglima Besar TNI", "Perang Kemerdekaan", "Serangan Umum 1 Maret"],
    period: "1916-1950",
    category: "Panglima Besar",
    image: "/images/jago.jpeg",
    description: "Panglima Besar Tentara Nasional Indonesia dan pahlawan perang kemerdekaan.",
  },
  {
    id: 6,
    name: "CUT NYAK DHIEN",
    fullName: "Cut Nyak Dhien",
    birthDate: "1848",
    deathDate: "6 November 1908",
    birthPlace: "Lampadang, Aceh",
    deathPlace: "Sumedang, Jawa Barat",
    majorEvents: ["Perang Aceh", "Perlawanan terhadap Belanda", "Pahlawan Wanita"],
    period: "1848-1908",
    category: "Pahlawan Nasional",
    image: "/images/jago.jpeg",
    description: "Pahlawan nasional dari Aceh yang memimpin perlawanan terhadap Belanda.",
  },
  {
    id: 7,
    name: "IMAM BONJOL",
    fullName: "Tuanku Imam Bonjol",
    birthDate: "1772",
    deathDate: "6 November 1864",
    birthPlace: "Bonjol, Sumatera Barat",
    deathPlace: "Lotak, Pineleng, Minahasa",
    majorEvents: ["Perang Padri", "Perlawanan Minangkabau", "Pemimpin Agama"],
    period: "1772-1864",
    category: "Pahlawan Nasional",
    image: "/images/jago.jpeg",
    description: "Pemimpin Perang Padri dan ulama besar dari Minangkabau.",
  },
  {
    id: 8,
    name: "SULTAN HASANUDDIN",
    fullName: "Sultan Hasanuddin",
    birthDate: "12 Januari 1631",
    deathDate: "12 Juni 1670",
    birthPlace: "Gowa, Sulawesi Selatan",
    deathPlace: "Gowa, Sulawesi Selatan",
    majorEvents: ["Perang Makassar", "Perlawanan Gowa", "Ayam Jantan dari Timur"],
    period: "1631-1670",
    category: "Pahlawan Nasional",
    image: "/images/jago.jpeg",
    description: "Raja Gowa yang dijuluki 'Ayam Jantan dari Timur' karena keberaniannya.",
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
}

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      duration: 0.8,
    },
  },
}

const searchVariants = {
  hidden: {
    opacity: 0,
    x: -100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.3,
    },
  },
}

const statsVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: 0.8,
    },
  },
}

const cardHoverVariants = {
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.95,
  },
}

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredFigures = historicalFigures.filter((figure) => {
    const matchesSearch =
      figure.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      figure.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || figure.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = ["all", ...Array.from(new Set(historicalFigures.map((f) => f.category)))]

  return (
    <motion.div
      className="min-h-screen bg-[#f5f1e8] p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.header className="text-center mb-12" variants={headerVariants}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-amber-900 mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
          >
            GALERI TOKOH SEJARAH
          </motion.h1>
          <motion.p
            className="text-lg text-amber-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Koleksi tokoh-tokoh bersejarah Indonesia yang telah memberikan kontribusi besar bagi bangsa
          </motion.p>
        </motion.header>

        {/* Search and Filter */}
        <motion.div className="flex flex-col md:flex-row gap-4 mb-8" variants={searchVariants}>
          <motion.div className="flex-1 relative" whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4" />
            <Input
              placeholder="Cari tokoh sejarah..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/70 border-amber-200 focus:border-amber-400 text-amber-800 placeholder:text-amber-500"
            />
          </motion.div>

          <motion.div
            className="flex gap-2 flex-wrap"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-amber-600 text-white"
                    : "bg-white/70 text-amber-700 hover:bg-amber-100"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === "all" ? "Semua" : category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            key={selectedCategory + searchTerm} // Re-animate when filters change
          >
            {filteredFigures.map((figure, index) => (
              <motion.div
                key={figure.id}
                variants={itemVariants}
                custom={index}
                whileHover="hover"
                whileTap="tap"
                layout
              >
                <Card className="bg-white/90 border-amber-200 overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                  {/* Figure Image */}
                  <motion.div
                    className="aspect-square overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200"
                    variants={cardHoverVariants}
                  >
                    <motion.div
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 0.2 + index * 0.1,
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                    >
                      <Image
                        src={figure.image || "/placeholder.svg"}
                        alt={figure.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Figure Info */}
                  <motion.div
                    className="p-4 space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.5,
                    }}
                  >
                    {/* Name and Category */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <h3 className="font-bold text-lg text-amber-900 mb-1">{figure.name}</h3>
                      <p className="text-sm text-amber-700 font-medium">{figure.fullName}</p>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.5 + index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        <Badge variant="outline" className="mt-2 text-xs border-amber-300 text-amber-700">
                          {figure.category}
                        </Badge>
                      </motion.div>
                    </motion.div>

                    {/* Birth Date */}
                    <motion.div
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Calendar className="w-4 h-4 text-amber-600" />
                      <span className="text-amber-800">
                        <span className="font-medium">Lahir:</span> {figure.birthDate}
                      </span>
                    </motion.div>

                    {/* Death Date */}
                    <motion.div
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <Skull className="w-4 h-4 text-amber-600" />
                      <span className="text-amber-800">
                        <span className="font-medium">Wafat:</span> {figure.deathDate}
                      </span>
                    </motion.div>

                    {/* Birth Place */}
                    <motion.div
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <span className="text-amber-800">
                        <span className="font-medium">Tempat:</span> {figure.birthPlace}
                      </span>
                    </motion.div>

                    {/* Period */}
                    <motion.div
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <User className="w-4 h-4 text-amber-600" />
                      <span className="text-amber-800">
                        <span className="font-medium">Periode:</span> {figure.period}
                      </span>
                    </motion.div>

                    {/* Major Events */}
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 + index * 0.1 }}
                    >
                      <h4 className="text-sm font-semibold text-amber-900">Peristiwa Penting:</h4>
                      <div className="space-y-1">
                        {figure.majorEvents.slice(0, 2).map((event, eventIndex) => (
                          <motion.div
                            key={eventIndex}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.1 + index * 0.1 + eventIndex * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-xs text-amber-700 leading-relaxed">{event}</span>
                          </motion.div>
                        ))}
                        {figure.majorEvents.length > 2 && (
                          <motion.div
                            className="text-xs text-amber-600 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.3 + index * 0.1 }}
                          >
                            +{figure.majorEvents.length - 2} peristiwa lainnya
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      className="pt-2 border-t border-amber-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 + index * 0.1 }}
                    >
                      <p className="text-xs text-amber-700 leading-relaxed line-clamp-3">{figure.description}</p>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex gap-2 pt-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                    >
                    </motion.div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredFigures.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3,
            }}
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-4 bg-amber-200 rounded-full flex items-center justify-center"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Search className="w-12 h-12 text-amber-600" />
            </motion.div>
            <motion.h3
              className="text-xl font-semibold text-amber-800 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Tokoh tidak ditemukan
            </motion.h3>
            <motion.p
              className="text-amber-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Coba ubah kata kunci pencarian atau filter kategori
            </motion.p>
          </motion.div>
        )}

      </div>
    </motion.div>
  )
}
