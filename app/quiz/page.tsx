import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, CheckCircle, Play, Users } from "lucide-react"
import { raleway } from "../fonts"
import Link from "next/link"

interface Quiz {
  id: number
  title: string
  description: string
  questionCount: number
  status: "available" | "completed"
}

const quizzes: Quiz[] = [
  {
    id: 1,
    title: "Quiz Lokasi kerajaan indonesia",
    description: "Tebak Lokasi Kerajaan Indonesia",
    questionCount: 2,
    status: "available",
  },
  {
    id: 2,
    title: "Quiz Gajah Mada",
    description: "Tebak tebakan gajah mada",
    questionCount: 2,
    status: "completed",
  },
  {
    id: 3,
    title: "Quiz Gajah Mada",
    description: "Tebak tebakan gajah mada",
    questionCount: 2,
    status: "available",

  },
  {
    id: 4,
    title: "Quiz Gajah Mada",
    description: "Tebak tebakan gajah mada",
    questionCount: 2,
    status: "available",
  },
]

export default function QuizPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-r from-[#d5ae9f] to-primary p-4 md:p-8 ${raleway.className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Quiz NusStory</h1>
          <p className=" text-lg text-white ">Ayo Test Pengetahuan Sejarahmu dengan NusStory!!!</p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {quizzes.map((quiz) => (
            <Card
              key={quiz.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-surface backdrop-blur-sm hover:bg-background"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#7D9C88] to-secondary text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-text mb-1 group-hover:text-[#7D9C88] transition-colors">
                        {quiz.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{quiz.description}</p>

                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Users className="w-4 h-4" />
                          <span>{quiz.questionCount} soal</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {quiz.status === "completed" ? (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-green-100 text-green-700">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Selesai</span>
                        </div>
                      </div>
                    ) : (
                    <Link href={`/quiz/${quiz.id}`}>
                      <Button
                        className="bg-gradient-to-r from-[#7D9C88] to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 cursor-pointer"
                        size="lg"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Mulai
                      </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </div>
  )
}
