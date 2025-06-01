"use client"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"

interface GalleryItem {
  id: number
  title: string
  imageUrl: string
  description?: string
}

const gallery: GalleryItem[] = [
  {
    id: 1,
    title: "Motif Parang",
    imageUrl: "/images/jago.jpeg",
    description: "Traditional Javanese batik pattern",
  },
  {
    id: 2,
    title: "Sakura Blossom",
    imageUrl: "/images/jago.jpeg",
    description: "Cherry blossom decorative pattern",
  },
  {
    id: 3,
    title: "Geometric Art",
    imageUrl: "/images/jago.jpeg",
    description: "Modern geometric composition",
  },
  {
    id: 4,
    title: "Fish Motif",
    imageUrl: "/images/jago.jpeg",
    description: "Traditional fish pattern design",
  },
  {
    id: 5,
    title: "Portrait Art",
    imageUrl: "/images/jago.jpeg",
    description: "Contemporary portrait illustration",
  },
  {
    id: 6,
    title: "Wayang Figure",
    imageUrl: "/images/jago.jpeg",
    description: "Traditional puppet art",
  },
  {
    id: 7,
    title: "Decorative Lamp",
    imageUrl: "/images/jago.jpeg",
    description: "Handcrafted decorative lighting",
  },
  {
    id: 8,
    title: "Floral Sketch",
    imageUrl: "/images/jago.jpeg",
    description: "Hand-drawn botanical illustration",
  },
  {
    id: 9,
    title: "Batik Pattern",
    imageUrl: "/images/jago.jpeg",
    description: "Diamond pattern batik design",
  },
  {
    id: 10,
    title: "Colorful Motif",
    imageUrl: "/images/jago.jpeg",
    description: "Vibrant traditional pattern",
  },
  {
    id: 11,
    title: "Wood Carving",
    imageUrl: "/images/jago.jpeg",
    description: "Traditional wooden sculpture",
  },
  {
    id: 12,
    title: "Woven Basket",
    imageUrl: "/images/jago.jpeg",
    description: "Handwoven traditional basket",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  return (
    <>
      <div className="min-h-screen bg-linear-to-r from-[#936b56] via-[#936b56] to-primary py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-white text-2xl font-bold capitalize"
            >
              Profile History
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-white text-lg"
            >
              Berikut adalah galeri dari Nus Story
            </motion.p>
          </div>

          {/* Gallery Grid - Masonry Style */}
          <motion.div
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {gallery.map((galleryItem, index) => (
              <motion.div
                key={galleryItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 },
                }}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer break-inside-avoid mb-4"
                onClick={() => setSelectedImage(galleryItem)}
              >
                <div
                  className={`relative ${
                    // Vary heights for masonry effect
                    index % 5 === 0
                      ? "aspect-[3/4]"
                      : index % 5 === 1
                        ? "aspect-square"
                        : index % 5 === 2
                          ? "aspect-[4/5]"
                          : index % 5 === 3
                            ? "aspect-[3/2]"
                            : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={galleryItem.imageUrl || "/placeholder.svg"}
                    alt={galleryItem.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                  {/* Overlay text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h3 className="text-white text-sm font-medium truncate">{galleryItem.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-white/30 backdrop-blur-sm bg-opacity-75 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{
                    scale: 0.8,
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    scale: 0.8,
                    opacity: 0,
                    y: 50,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative max-w-4xl max-h-full bg-primary rounded-lg overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button with animation */}
                  <motion.button
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10 bg-white rounded-full p-2 transition-colors duration-200"
                    onClick={() => setSelectedImage(null)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>

                  <div className="flex flex-col md:flex-row">
                    {/* Image container with animation */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="relative w-full md:w-2/3 aspect-square md:aspect-auto"
                    >
                      <Image
                        src={selectedImage.imageUrl || "/placeholder.svg"}
                        alt={selectedImage.title}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/10"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="p-6 md:w-1/3"
                    >
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="text-2xl mt-9 font-bold text-white mb-2"
                      >
                        {selectedImage.title}
                      </motion.h2>

                      {selectedImage.description && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                          className="text-white/90 leading-relaxed"
                        >
                          {selectedImage.description}
                        </motion.p>
                      )}

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "3rem" }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="h-1 bg-white/50 rounded-full mt-4"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}
