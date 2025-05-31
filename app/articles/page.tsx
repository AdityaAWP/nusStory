import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ArticlePage() {
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
  }
  const articles: ArticleData[] = [
    {
      id: 1,
      title: "Hope dies last",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque.",
      image: "/images/jago.jpeg",
      author: "John Doe",
      category: "Portrait",
      date: "1 day",
      tags: ["Art", "History"],
      slug: "hope-dies-last",
    },
    {
      id: 2,
      title: "Don't close your eyes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque.",
      image: "/images/jago.jpeg",
      author: "Jane Smith",
      category: "Emotion",
      date: "2 days",
      tags: ["Psychology", "Art"],
      slug: "dont-close-your-eyes",
    },
    {
      id: 3,
      title: "The best art museums",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque.",
      image: "/images/jago.jpeg",
      author: "Mike Johnson",
      category: "Museums",
      date: "3 days",
      tags: ["Museums", "Culture"],
      slug: "the-best-art-museums",
    },
    {
      id: 4,
      title: "The devil is the details",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque.",
      image: "/images/jago.jpeg",
      author: "Sarah Wilson",
      category: "Analysis",
      date: "4 days",
      tags: ["Philosophy", "Art"],
      slug: "the-devil-is-the-details",
    },
    {
      id: 5,
      title: "An indestructible hope",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque.",
      image: "/images/jago.jpeg",
      author: "David Brown",
      category: "Symbolism",
      date: "5 days",
      tags: ["Symbolism", "Hope"],
      slug: "an-indestructible-hope",
    },
    {
      id: 6,
      title: "Street art festival",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque.",
      image: "/images/book-illustrator.png",
      author: "Lisa Garcia",
      category: "Events",
      date: "1 week",
      tags: ["Street Art", "Festival"],
      slug: "street-art-festival",
    },
  ]

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <Image src={"/images/logo.png"} alt="logo" width={200} height={200} className="inline" />
          <h1 className="text-4xl md:text-8xl font-bold  text-black tracking-tight">ARTIKEL NUSSTORY</h1>
        </div>
      </header>

      {/* Articles Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/${article.slug}`}>
              <article className="group cursor-pointer">
                {/* Article Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{article.date} ago</span>
                </div>

                {/* Article Image */}
                <div className="aspect-square mb-6 overflow-hidden bg-gray-100">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
                  />
                </div>

                {/* Article Content */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-black leading-tight group-hover:text-gray-700 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{article.description}</p>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>
                        Text: <span className="text-black">{article.author}</span>
                      </span>
                      <span>
                        Category: <span className="text-black">{article.category}</span>
                      </span>
                      <span className="text-black">{article.date}</span>
                    </div>
                  </div>

                  {/* Read More Section */}
                  <div className="flex items-center justify-end pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        READ MORE
                      </Badge>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
