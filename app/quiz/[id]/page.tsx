"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, MapPin, RotateCcw, Flag, Clock, Star } from "lucide-react"
import Image from "next/image"
import QuizMap from "@/components/ui/quizMap"

interface QuizDetailProps {
  quizId?: string
}

const QuizDetail = ({ quizId = "1" }: QuizDetailProps) => {
  const [currentRound, setCurrentRound] = useState(1)
  const [score, setScore] = useState(0)

  const quizData = {
    id: quizId,
    title: "Quiz Gajah Mada - Geography Challenge",
  }


  return (
    <>
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hover:bg-gray-100">
            <X className="w-4 h-4" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-900">{quizData.title}</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
          </div>
          <Button variant="outline" size="sm">
            <Flag className="w-4 h-4 mr-2" />
            Menyerah
          </Button>
        </div>
      </div>      

      <div className="flex-1 flex">
        <div className="flex-1 relative bg-gray-300">
          <div className="absolute inset-0 z-0">
            <QuizMap />
          </div>

          <div className="absolute top-4 left-12 z-10 flex gap-2">
            <Card className="shadow-lg">
              <CardContent className="p-3">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">Round</div>
                  <div className="text-lg font-bold text-gray-900">
                    {currentRound}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-3">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">Score</div>
                  <div className="text-lg font-bold text-primary flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {score}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Overlay: Control Buttons */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex gap-3">
              <Button variant="outline" className="bg-white/90 backdrop-blur-sm hover:bg-white">
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Pin
              </Button>
              <Button className="bg-secondary hover:bg-[#7D9C88] text-white px-8">Submit Tebakan</Button>
            </div>
          </div>
        </div>

        <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
          <div className="bg-gradient-to-r from-[#7D9C88] to-secondary text-white p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold">Tebak Lokasinyaa?</h2>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <X className="w-4 h-4" />
              </Button>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Round {currentRound}
            </Badge>
          </div>

          <div className="relative flex-1">
            <Image
              src={'/images/jago.jpeg'}
              alt="Location to guess"
              width={400}
              height={300}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Places Section */}
          <div className="p-6 border-t border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-3">Tempat</h3>
            <p>Ini Gambar Primata Jago Tebak Asalnyaa</p>

            <Button className="w-full bg-secondary hover:bg-[#7D9C88] text-white">
              <MapPin className="w-4 h-4 mr-2" />
              Tebakkk
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default QuizDetail
