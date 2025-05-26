'use client'

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, MapPin, RotateCcw, Flag, Star } from "lucide-react"
import Image from "next/image"
import QuizMap from "@/components/ui/quizMap"
import L from "leaflet"

interface QuizDetailProps {
  quizId?: string
}

function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

const dummyQuestions = [
  {
    id: 1,
    quiz_id: 1,
    historical_figure_id: 2,
    image: "https://asset.kompas.com/crops/x5XMZVkKLDYLrSskv0B7xfTB7EE=/155x0:1000x563/750x500/data/photo/2021/04/12/60741caa65ee2.jpg",
    hint: "Seoarnag Prajurit abadi majapahit",
    correct_latitude: "-7.57488260",
    correct_longitude: "111.87377930",
    order: 1,
    historical_figure: {
      name: "Patih Gajah Mada"
    }
  },
  {
    id: 2,
    quiz_id: 1,
    historical_figure_id: 2,
    image: "https://asset.kompas.com/crops/x5XMZVkKLDYLrSskv0B7xfTB7EE=/155x0:1000x563/750x500/data/photo/2021/04/12/60741caa65ee2.jpg",
    hint: "hura hura",
    correct_latitude: "-7.36246687",
    correct_longitude: "110.12695313",
    order: 2,
    historical_figure: {
      name: "Patih Gajah Mada"
    }
  }
]

const QuizDetail = ({ quizId = "1" }: QuizDetailProps) => {
  const [currentRound, setCurrentRound] = useState(1)
  const [score, setScore] = useState(0)
  const [markers, setMarkers] = useState<L.LatLng[]>([]) 
  const [feedbackMessage, setFeedbackMessage] = useState("")
  const [quizFinished, setQuizFinished] = useState(false)

  const quizData = {
    id: quizId,
    title: "Quiz Gajah Mada - Geography Challenge",
  }

  const currentQuestion = dummyQuestions.find(q => q.order === currentRound)

  const handleSubmit = () => {
    if (markers.length === 0 || !currentQuestion) {
      setFeedbackMessage("Silakan pilih lokasi terlebih dahulu.")
      return
    }

    const lastMarker = markers[markers.length - 1]

    const correctLat = parseFloat(currentQuestion.correct_latitude)
    const correctLng = parseFloat(currentQuestion.correct_longitude)
    const distance = getDistanceKm(lastMarker.lat, lastMarker.lng, correctLat, correctLng)

    const isCorrect = distance < 10

    if (isCorrect) {
      setScore(prev => prev + 100)
      setFeedbackMessage("Tebakan kamu BENAR! 🎉")

      if (currentRound < dummyQuestions.length) {
        setCurrentRound(prev => prev + 1)
        setMarkers([])  
        setFeedbackMessage("")
      } else {
        setFeedbackMessage("Quiz selesai! 🎉")
        setQuizFinished(true)
      }
    } else {
      setFeedbackMessage(`Tebakan kamu SALAH. Jarak tebakan: ${distance.toFixed(2)} km`)
    }
  }

  const handleResetPin = () => {
    setMarkers([])
    setFeedbackMessage("")
  }

  const handleAddMarker = (latlng: L.LatLng) => {
    setMarkers(prev => [...prev, latlng])
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hover:bg-gray-100">
            <X className="w-4 h-4" />
          </Button>
          <h1 className="text-lg font-semibold text-gray-900">{quizData.title}</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Flag className="w-4 h-4 mr-2" />
            Menyerah
          </Button>
        </div>
      </div>

      <div className="flex-1 flex">
        <div className="flex-1 relative bg-gray-300">
          <div className="absolute inset-0 z-0">
            <QuizMap markers={markers} onAddMarker={handleAddMarker} />
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

          {!quizFinished && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="flex gap-3">
                <Button
                  onClick={handleResetPin}
                  variant="outline"
                  className="bg-white/90 backdrop-blur-sm hover:bg-white"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset Pin
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-secondary hover:bg-[#7D9C88] text-white px-8"
                >
                  Submit Tebakan
                </Button>
              </div>
            </div>
          )}
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
              src={`${currentQuestion?.image}`}
              alt="Location to guess"
              width={400}
              height={300}
              className="w-full h-96 object-cover"
            />
            <div className="p-3 text-sm text-red-600 min-h-[48px]">
              {feedbackMessage}
            </div>
          </div>

          <div className="p-6 border-t border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-3">Petunjuk</h3>
            <p>{currentQuestion?.hint}</p>

            <Button
              onClick={handleSubmit}
              className="mt-4 w-full bg-secondary hover:bg-[#7D9C88] text-white"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Tebak
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizDetail
