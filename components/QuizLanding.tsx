import { Button } from "@/components/ui/button"
import { MapPin, Play } from "lucide-react"
import Image from "next/image"

export default function QuizLanding() {
  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <h3 className="text-xl font-semibold mb-4">Wanna try our game?</h3>

      <div className="p-4 border rounded-lg bg-card">
        <div className="space-y-3">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="Historical scene"
              width={300}
              height={200}
              className="w-full h-32 object-cover rounded-md"
            />
            <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-1">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Guess the time & place</p>
            <Button className="w-full">
              <Play className="mr-2 h-4 w-4" />
              Let's Play the Game
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
