"use client"

import React from "react"

import { useState } from "react"
import { Search, ChevronRight, X, ChevronLeft, BookOpen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence, PanInfo } from "framer-motion"

const allBooks = [
  {
    id: 1,
    title: "The Seven Husbands of Evelyn Hugo",
    cover: "/images/jago.jpeg",
  },
  {
    id: 2,
    title: "Project Hail Mary",
    cover: "/images/jago.jpeg",
  },
  {
    id: 3,
    title: "Strategic Writing for UX",
    cover: "/images/jago.jpeg",
  },
  {
    id: 4,
    title: "Klara and the Sun",
    cover: "/images/jago.jpeg",
  },
  {
    id: 5,
    title: "The Lord of the Rings",
    cover: "/images/jago.jpeg",
  },
  {
    id: 6,
    title: "The Seven Moons of Maali Almeida",
    cover: "/images/jago.jpeg",
  },
  {
    id: 7,
    title: "The Hobbit",
    cover: "/images/jago.jpeg",
  },
  {
    id: 8,
    title: "1984",
    cover: "/images/jago.jpeg",
  },
  {
    id: 9,
    title: "The Design of Everyday Things",
    cover: "/images/jago.jpeg",
  },
  {
    id: 10,
    title: "Steve Jobs",
    cover: "/images/jago.jpeg",
  },
  {
    id: 11,
    title: "The Handmaid's Tale",
    cover: "/images/jago.jpeg",
  },
  {
    id: 12,
    title: "One of Us Is Lying",
    cover: "/images/jago.jpeg",
  },
  {
    id: 13,
    title: "101 Things I Learned in Architecture School",
    cover: "/images/jago.jpeg",
  },
  {
    id: 14,
    title: "The Silent Patient",
    cover: "/images/jago.jpeg",
  },
  {
    id: 15,
    title: "Modern Love",
    cover: "/images/jago.jpeg",
  },
]

interface BookContent {
  id: number
  pages: string[]
}

const bookContents: BookContent[] = [
  {
    id: 1,
    pages: [
      "The Seven Husbands of Evelyn Hugo\n\nChapter 1\n\nIt was the phone call I had been waiting for my entire career. Well, not my entire career. But at least since I'd started working at Vivant magazine seven years ago.\n\n'Monique,' my editor said. 'I have an assignment for you.'\n\nI was sitting in my cubicle, eating a turkey sandwich and reading about how to properly fold fitted sheets online. It was just past one in the afternoon on a random Thursday in March.",
      "I had been working at Vivant for seven years, and in those seven years, I had written exactly one piece that had gotten any attention. It was about a young actress who had been getting a lot of buzz, and I'd managed to get an interview with her right before she booked a starring role in a big-budget action movie.\n\nThe piece did well. It got shared on social media. People liked it. But that was two years ago, and I hadn't been able to replicate that success since.",
      "So when my editor called me over to her desk that Thursday afternoon, I was hoping she was going to give me something good. Something that might help me prove that I belonged at a magazine like Vivant.\n\n'Evelyn Hugo wants to give her first interview in decades,' she said. 'And she specifically requested you.'\n\nI nearly choked on my sandwich.",
      "Evelyn Hugo was a reclusive Hollywood icon. She had been one of the most famous actresses in the world during the fifties, sixties, and seventies. She was known for her seven marriages, her beauty, and her talent. But she had been out of the public eye for years.\n\nAnd now she wanted to talk to me.\n\n'Are you sure?' I asked.\n\n'Positive,' my editor said. 'She called this morning and specifically asked for Monique Grant.'",
    ],
  },
  {
    id: 2,
    pages: [
      "Project Hail Mary\n\nChapter 1\n\nWhat's two plus two?\n\nSomething is wrong. I don't know what, but something's definitely wrong.\n\nI can't remember anything. But I know two plus two equals four. How can I remember that two plus two equals four but not remember my own name?\n\nMy name...\n\nI know I have a name. Everyone has a name. But I can't remember what it is.",
      "I'm in a room. That much I can figure out. I'm lying on some kind of bed. The room is small and cramped. There are all sorts of equipment and displays around me. It looks like...\n\nA spaceship?\n\nThat can't be right. I'm not an astronaut. Am I? I don't feel like an astronaut. But then again, I don't know what an astronaut is supposed to feel like.",
      "I try to sit up. My body feels weak and unsteady. How long have I been lying here? There are tubes connected to my arms. Medical equipment. Someone has been taking care of me.\n\nBut where is everyone?\n\nI look around the room more carefully. It's definitely some kind of spacecraft. The walls are curved, and everything looks high-tech and expensive. But I'm alone.",
      "There's a computer terminal near my bed. The screen shows various readouts and data that I don't understand. But there's one thing that catches my eye: a countdown timer.\n\nIt's counting down from something. Days, hours, minutes, seconds. But counting down to what?\n\nAnd why do I have the feeling that whatever it's counting down to is very, very important?",
    ],
  },
  // Add more book contents as needed
]

// Split books into shelves of 6 books each
const createShelves = (books: typeof allBooks) => {
  const shelves = []
  for (let i = 0; i < books.length; i += 6) {
    shelves.push(books.slice(i, i + 6))
  }
  return shelves
}

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState("shelves")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBook, setSelectedBook] = useState<(typeof allBooks)[0] | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next")

  const filteredBooks = allBooks.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const shelves = createShelves(filteredBooks)

  const openBookModal = (book: (typeof allBooks)[0]) => {
    setSelectedBook(book)
    setCurrentPage(0)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedBook(null)
    setCurrentPage(0)
    setIsFlipping(false) // Reset flipping state
  }

  const nextPage = () => {
    const bookContent = bookContents.find((content) => content.id === selectedBook?.id)
    if (bookContent && currentPage < bookContent.pages.length - 1 && !isFlipping) {
      setIsFlipping(true)
      setFlipDirection("next")
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
      }, 300)
    }
  }

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setFlipDirection("prev")
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
      }, 300)
    }
  }


  const handleSwipe = (event: PointerEvent, info: PanInfo) => {
    const swipeThreshold = 100
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        prevPage()
      } else {
        nextPage()
      }
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop, not the modal content
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const getCurrentBookContent = () => {
    if (!selectedBook) return null
    return bookContents.find((content) => content.id === selectedBook.id)
  }

  // Keyboard navigation - Fixed dependency array
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isModalOpen) return

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault()
          prevPage()
          break
        case "ArrowRight":
          event.preventDefault()
          nextPage()
          break
        case "Escape":
          event.preventDefault()
          closeModal()
          break
      }
    }

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyPress)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen, currentPage, isFlipping, selectedBook]) // Added missing dependencies

  return (
    <div className="min-h-screen bg-[#f5f1e8] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Navigation */}
        <div className="flex items-center gap-8 mb-8">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("shelves")}
              className={`text-lg font-medium ${
                activeTab === "shelves"
                  ? "text-amber-800 border-b-2 border-amber-800"
                  : "text-amber-600 hover:text-amber-800"
              } pb-1`}
            >
              Shelves
            </button>
            <button
              onClick={() => setActiveTab("all-books")}
              className={`text-lg font-medium ${
                activeTab === "all-books"
                  ? "text-amber-800 border-b-2 border-amber-800"
                  : "text-amber-600 hover:text-amber-800"
              } pb-1`}
            >
              All Books
            </button>
          </div>

          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 w-4 h-4" />
            <Input
              placeholder="Search in My Library"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/70 border-amber-200 focus:border-amber-400 text-amber-800 placeholder:text-amber-500"
            />
          </div>
        </div>

        {/* Shelves View */}
        {activeTab === "shelves" && (
          <div className="space-y-12">
            {shelves.map((shelf, shelfIndex) => (
              <div key={shelfIndex} className="relative">
                {/* Shelf Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium text-amber-800">Shelf {shelfIndex + 1}</h2>
                  {shelf.length === 6 && (
                    <button className="flex items-center gap-1 text-sm text-amber-600 hover:text-amber-800 transition-colors">
                      Full shelf
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Books on Shelf */}
                <div className="relative">
                  {/* Books Container */}
                  <div className="flex gap-4 pb-8 px-4">
                    {shelf.map((book) => (
                      <div
                        key={book.id}
                        className="flex-shrink-0 group cursor-pointer"
                        style={{ width: "120px" }}
                        onClick={() => openBookModal(book)}
                      >
                        <div className="relative">
                          <img
                            src={book.cover || "/placeholder.svg"}
                            alt={book.title}
                            width={120}
                            height={180}
                            className="rounded-sm shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                          />
                          {/* Book spine shadow */}
                          <div className="absolute -bottom-2 left-1 right-1 h-2 bg-black/10 rounded-full blur-sm"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Wooden Shelf */}
                  <div className="relative">
                    {/* Main shelf surface */}
                    <div
                      className="h-8 rounded-lg shadow-lg"
                      style={{
                        background: "linear-gradient(180deg, #d4a574 0%, #b8956a 50%, #a08660 100%)",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                      }}
                    >
                      {/* Wood grain texture overlay */}
                      <div
                        className="w-full h-full rounded-lg opacity-30"
                        style={{
                          background: `repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 2px,
                            rgba(139, 69, 19, 0.1) 2px,
                            rgba(139, 69, 19, 0.1) 4px
                          )`,
                        }}
                      ></div>
                    </div>

                    {/* Shelf edge/front */}
                    <div
                      className="h-3 rounded-b-lg shadow-md"
                      style={{
                        background: "linear-gradient(180deg, #a08660 0%, #8b7355 100%)",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    ></div>

                    {/* Shelf supports */}
                    <div className="absolute -bottom-1 left-4 w-2 h-4 bg-gradient-to-b from-amber-700 to-amber-800 rounded-b-sm shadow-sm"></div>
                    <div className="absolute -bottom-1 right-4 w-2 h-4 bg-gradient-to-b from-amber-700 to-amber-800 rounded-b-sm shadow-sm"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* All Books Grid View */}
        {activeTab === "all-books" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {filteredBooks.map((book) => (
              <Card
                key={book.id}
                className="bg-white/50 border-amber-200 p-3 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => openBookModal(book)}
              >
                <img
                  src={book.cover || "/placeholder.svg"}
                  alt={book.title}
                  width={140}
                  height={200}
                  className="rounded-md shadow-sm w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <p className="text-xs text-amber-800 mt-2 line-clamp-2 font-medium">{book.title}</p>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-amber-600 text-lg">No books found matching your search.</p>
          </div>
        )}

        {/* E-Book Modal */}
        <AnimatePresence>
          {isModalOpen && selectedBook && (
            <motion.div 
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={handleBackdropClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative max-w-4xl w-full h-[80vh] bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-2xl overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                {/* Book Header */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-amber-200/80 to-transparent p-6 z-10">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-amber-800" />
                    <h2 className="text-xl font-bold text-amber-900">{selectedBook.title}</h2>
                  </div>
                </div>

                {/* Book Content Area */}
                <motion.div
                  className="h-full pt-20 pb-16 px-8 flex relative overflow-hidden"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleSwipe}
                  dragElastic={0.1}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPage}
                      className="absolute inset-0 pt-20 pb-16 px-8 flex"
                      initial={{
                        rotateY: flipDirection === "next" ? 90 : -90,
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        rotateY: 0,
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        rotateY: flipDirection === "next" ? -90 : 90,
                        opacity: 0,
                        scale: 0.8,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.4, 0.0, 0.2, 1],
                        rotateY: { duration: 0.8 },
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      {/* Left Page */}
                      <motion.div
                        className="flex-1 relative"
                        initial={{ x: flipDirection === "next" ? -50 : 50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3}}
                      >
                        <div
                          className="h-full bg-white rounded-l-lg shadow-inner p-8 border-r border-amber-200 relative"
                          style={{
                            background: "linear-gradient(135deg, #fefefe 0%, #f8f8f8 100%)",
                            boxShadow: "inset 2px 0 4px rgba(0,0,0,0.1), 0 0 20px rgba(0,0,0,0.1)",
                          }}
                        >
                          {/* Page curl effect */}
                          <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-transparent to-amber-100/50 transform rotate-45 translate-x-4 -translate-y-4"></div>

                          <motion.div
                            className="h-full overflow-y-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                          >
                            <div className="text-sm leading-relaxed text-gray-800 whitespace-pre-line font-serif">
                              {getCurrentBookContent()?.pages[currentPage] || "Content not available"}
                            </div>
                            <motion.div
                              className="absolute bottom-4 left-8 text-xs text-gray-500"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              {currentPage + 1}
                            </motion.div>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Right Page */}
                      <motion.div
                        className="flex-1 relative"
                        initial={{ x: flipDirection === "next" ? 50 : -50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className="h-full bg-white rounded-r-lg shadow-inner p-8 relative"
                          style={{
                            background: "linear-gradient(225deg, #fefefe 0%, #f8f8f8 100%)",
                            boxShadow: "inset -2px 0 4px rgba(0,0,0,0.1), 0 0 20px rgba(0,0,0,0.1)",
                          }}
                        >
                          {/* Page curl effect */}
                          <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-bl from-transparent to-amber-100/50 transform -rotate-45 -translate-x-4 -translate-y-4"></div>

                          {currentPage + 1 < (getCurrentBookContent()?.pages.length || 0) ? (
                            <motion.div
                              className="h-full overflow-y-auto"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                            >
                              <div className="text-sm leading-relaxed text-gray-800 whitespace-pre-line font-serif">
                                {getCurrentBookContent()?.pages[currentPage + 1] || ""}
                              </div>
                              <motion.div
                                className="absolute bottom-4 right-8 text-xs text-gray-500"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                              >
                                {currentPage + 2}
                              </motion.div>
                            </motion.div>
                          ) : (
                            <motion.div
                              className="h-full flex items-center justify-center text-gray-400"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                            >
                              <div className="text-center">
                                <motion.div
                                  initial={{ y: 10 }}
                                  animate={{ y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.5 }}
                                >
                                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                                  <p className="text-lg font-serif">End of preview</p>
                                  <p className="text-sm mt-2">Thank you for reading</p>
                                </motion.div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Flip indicator */}
                  {isFlipping && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="bg-white/90 rounded-full p-4 shadow-lg"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: flipDirection === "next" ? [0, 5, 0] : [0, -5, 0],
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.div
                          animate={{ x: flipDirection === "next" ? [0, 10, 0] : [0, -10, 0] }}
                          transition={{ duration: 0.6 }}
                        >
                          {flipDirection === "next" ? (
                            <ChevronRight className="w-6 h-6 text-amber-600" />
                          ) : (
                            <ChevronLeft className="w-6 h-6 text-amber-600" />
                          )}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Navigation Controls */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-200/80 to-transparent p-4"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center justify-between max-w-md mx-auto">
                    <motion.button
                      onClick={prevPage}
                      disabled={currentPage === 0 || isFlipping}
                      className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </motion.button>

                    <motion.div
                      className="flex items-center gap-2 text-sm text-amber-800"
                      key={currentPage}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Page {currentPage + 1}</span>
                      <span>of</span>
                      <span>{getCurrentBookContent()?.pages.length || 0}</span>
                    </motion.div>

                    <motion.button
                      onClick={nextPage}
                      disabled={
                        !getCurrentBookContent() || currentPage >= getCurrentBookContent()!.pages.length - 1 || isFlipping
                      }
                      className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Swipe hint */}
                  <motion.div
                    className="text-center mt-2 text-xs text-amber-600/70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    Swipe left/right or use arrow keys to navigate
                  </motion.div>
                </motion.div>

                {/* Book Binding Effect */}
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-amber-400 to-amber-600 transform -translate-x-1/2 shadow-lg"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}