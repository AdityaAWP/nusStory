import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { raleway } from "@/app/fonts"

interface ArticleData {
  id: number
  title: string
  description: string
  image: string
  author: string
  category: string
  date: string
  tags: string[]
  slug: string
  content?: string
}

// This would typically come from a database or CMS
const articles: ArticleData[] = [
  {
    id: 1,
    title: "Hope dies last",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/jago.jpeg",
    author: "John Doe",
    category: "Portrait",
    date: "1 day",
    tags: ["Art", "History"],
    slug: "hope-dies-last",
    content: `I know a place. It's somewhere I go when I need to remember your face. We get married in our heads. Something to do while we try to recall how we met. Do you think I have forgotten? Do you think I have forgotten? Do you think I have forgotten about you? You and I (don't let go) were alive (don't let go). With nothing to do I could lay and just look in your eyes. Wait (don't let go) and pretend (don't let go). Hold on and pretend that we'll never end. Do you think I have forgotten? Do you think I have forgotten? Do you think I have forgotten about you? Do you think I have forgotten? Do you think I have forgotten? Do you think I have forgotten about you?

There was something 'bout you that now I can't remember. It's the same damn thing that made my heart surrender. And I miss you on a train, I miss you in the morning. I never know what to think about. I think about you (so don't let go). About you (so don't let go). Do you think I have forgotten About you? (Don't let go) About you About you. Do you think I have forgotten About you? (Don't let go).

The memories we created together will forever remain in my heart. Every moment we shared, every laugh we had, every tear we shed - they all contributed to the beautiful tapestry of our relationship. Though time may pass and circumstances may change, the essence of what we had will never fade away.`,
  },
  {
    id: 2,
    title: "Don't close your eyes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/jago.jpeg",
    author: "Jane Smith",
    category: "Emotion",
    date: "2 days",
    tags: ["Psychology", "Art"],
    slug: "dont-close-your-eyes",
    content: `The power of keeping your eyes open to the world around you cannot be understated. In a society that often encourages us to look away from difficult truths, there is profound strength in maintaining our gaze.

When we close our eyes to the beauty and pain of existence, we rob ourselves of the full human experience. Art has always been about seeing - truly seeing - the world in all its complexity and contradiction.

The artist's eye captures not just what is visible, but what lies beneath the surface. It's about finding the extraordinary in the ordinary, the sacred in the mundane. This is why we must never close our eyes to the possibilities that surround us every day.

Through observation and mindful attention, we develop empathy, understanding, and a deeper connection to our shared humanity. The act of seeing becomes an act of love, a way of honoring the world and all its inhabitants.`,
  },
  {
    id: 3,
    title: "The best art museums",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/jago.jpeg",
    author: "Mike Johnson",
    category: "Museums",
    date: "3 days",
    tags: ["Museums", "Culture"],
    slug: "the-best-art-museums",
    content: `Art museums serve as sanctuaries for human creativity and expression. They are places where time stands still, where centuries of artistic achievement converge in sacred halls dedicated to beauty and meaning.

The greatest museums in the world share certain characteristics: they house collections that span cultures and centuries, they provide educational experiences that transform visitors, and they serve as bridges between past and present.

From the Louvre in Paris to the Metropolitan Museum of Art in New York, from the Uffizi in Florence to the British Museum in London, these institutions preserve our collective cultural heritage. They remind us that art is not merely decoration, but a fundamental expression of what it means to be human.

Walking through these hallowed halls, one encounters the dreams, struggles, and triumphs of countless artists who dared to capture their vision of the world. Each painting, sculpture, and artifact tells a story that transcends time and speaks to the universal human experience.`,
  },
  {
    id: 4,
    title: "The devil is the details",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/jago.jpeg",
    author: "Sarah Wilson",
    category: "Analysis",
    date: "4 days",
    tags: ["Philosophy", "Art"],
    slug: "the-devil-is-the-details",
    content: `In art, as in life, the smallest elements often carry the greatest significance. The devil, as they say, is in the details - those minute choices that separate masterpieces from mere attempts at creation.

Consider the way light falls across a subject's face in a portrait, or the precise placement of a single brushstroke that brings a landscape to life. These details are not accidents; they are deliberate decisions made by artists who understand that perfection lies in the accumulation of countless small choices.

The great masters knew this secret. They spent hours perfecting the curve of a lip, the shadow beneath an eye, the texture of fabric. They understood that viewers might not consciously notice these details, but they would feel their impact.

This principle extends beyond the visual arts. In literature, it's the carefully chosen word that creates atmosphere. In music, it's the subtle variation in tempo that moves the soul. In all creative endeavors, attention to detail separates the amateur from the professional, the good from the great.

The devil may be in the details, but so is the divine. It is in these small moments of perfection that we glimpse the infinite possibilities of human creativity.`,
  },
  {
    id: 5,
    title: "An indestructible hope",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/jago.jpeg",
    author: "David Brown",
    category: "Symbolism",
    date: "5 days",
    tags: ["Symbolism", "Hope"],
    slug: "an-indestructible-hope",
    content: `Hope is perhaps the most powerful force in the human experience. It is the light that guides us through darkness, the strength that sustains us through adversity, and the vision that propels us toward a better future.

Throughout history, artists have sought to capture the essence of hope in their work. They have painted it in the faces of their subjects, sculpted it in marble, and woven it into the very fabric of their compositions. Hope appears in the upward gaze of a figure, in the golden light of dawn, in the green shoots emerging from barren ground.

What makes hope truly indestructible is its ability to regenerate itself. Even when circumstances seem hopeless, even when all evidence points to despair, hope finds a way to survive. It lives in the human heart like an eternal flame, sometimes dimmed but never extinguished.

Artists understand this quality of hope because they themselves are vessels of it. Every time they pick up a brush, chisel, or pen, they are making an act of faith - believing that their creation will matter, that it will touch someone, that it will add beauty to the world.

In our darkest moments, art reminds us that hope is not naive optimism but a choice - a decision to believe in possibility despite evidence to the contrary. This is what makes hope truly indestructible.`,
  },
  {
    id: 6,
    title: "Street art festival",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/book-illustrator.png",
    author: "Lisa Garcia",
    category: "Events",
    date: "1 week",
    tags: ["Street Art", "Festival"],
    slug: "street-art-festival",
    content: `Street art festivals represent the democratization of artistic expression. They bring art out of galleries and museums and into the streets, making it accessible to everyone regardless of their economic status or cultural background.

These festivals transform urban landscapes into open-air galleries, where walls become canvases and entire neighborhoods become immersive art experiences. They celebrate the raw, unfiltered creativity that emerges from the streets - art that is immediate, relevant, and deeply connected to the communities where it appears.

The beauty of street art lies in its temporary nature and its accessibility. Unlike traditional art forms that require formal training or expensive materials, street art can be created by anyone with a vision and the courage to express it. It speaks the language of the people, addressing social issues, celebrating culture, and challenging conventional notions of what art should be.

Street art festivals also foster community engagement and cultural exchange. They bring together artists from different backgrounds, styles, and perspectives, creating a melting pot of creativity that reflects the diversity of urban life.

In a world that often feels divided, street art festivals remind us of our shared humanity and our collective capacity for beauty, even in the most unexpected places.`,
  },
]

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-[#f5f1eb] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/articles" className="text-blue-600 hover:underline">
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-[#f5f1eb] ${raleway.className}`}>
      {/* Navigation */}
      <nav className="p-6">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>
      </nav>

      {/* Newspaper Header */}
      <header className="border-b-2 border-black mx-6 pb-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-6xl md:text-8xl font-bold text-black" style={{ fontFamily: "serif" }}>
              NusStory
            </h1>
          </div>

          <div className="flex justify-between items-center text-sm border-b border-black pb-2 mb-4">
            <span className="font-semibold">Special Edition</span>
            <span className="font-semibold">{article.category}</span>
            <span className="font-semibold">
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-7xl mx-auto px-6 pb-12">
        {/* Article Title */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-6xl font-bold text-black uppercase tracking-wider mb-8"
            style={{ fontFamily: "serif" }}
          >
            {article.title}
          </h2>
        </div>

        {/* Main Article Image */}
        <div className="mb-12 text-center">
          <div className="inline-block border-2 border-black">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={200}
              height={100}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mb-12">
          <blockquote className="text-xl md:text-2xl font-bold text-black uppercase tracking-wide border-t border-b border-black py-6">
            "{article.description}"
          </blockquote>
        </div>

        {/* Article Content in Newspaper Columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="text-lg leading-relaxed text-black text-justify" style={{ fontFamily: "serif" }}>
              {article.content
                ?.split("\n\n")
                .slice(0, 2)
                .map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>

          <div className="space-y-4">

            <div className="text-lg leading-relaxed text-black text-justify" style={{ fontFamily: "serif" }}>
              {article.content
                ?.split("\n\n")
                .slice(2)
                .map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* Article Meta Information */}
        <div className="border-t border-black pt-6 mb-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm">
              <span>
                <strong>Author:</strong> {article.author}
              </span>
              <span>
                <strong>Category:</strong> {article.category}
              </span>
              <span>
                <strong>Published:</strong> {article.date} ago
              </span>
            </div>

            <div className="flex gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs border-black">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Credit */}
        <footer className="text-center border-t border-black pt-6">
          <p className="text-sm text-black" style={{ fontFamily: "serif" }}>
            Design by Nusstory Editorial Team
          </p>
        </footer>
      </main>
    </div>
  )
}
