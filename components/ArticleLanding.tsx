import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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

const ArticleLanding = () => {
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
  ]

  return (
    <section className="bg-secondary py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Artikel NusStory</h2>
          <hr className="border-white/30 mb-6 w-24" />
          <p className="max-w-xl text-white/80">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem mollitia nihil quibusdam, ipsa deleniti
            minus rem distinctio explicabo saepe quod.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/article/${article.slug}`} className="group">
              <article className="bg-primary rounded-lg overflow-hidden transition-all hover:bg-red-900">
                {/* Article Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs text-white border-white/30">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-white/70">{article.date} ago</span>
                  </div>

                  <h3 className="text-xl font-bold leading-tight group-hover:text-white/90 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-white/70 leading-relaxed line-clamp-3">{article.description}</p>

                  {/* Read More */}
                  <div className="flex items-center justify-end pt-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white/70"></div>
                      </div>
                      <Badge variant="outline" className="text-xs text-white border-white/30">
                        READ MORE
                      </Badge>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/articles">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-800">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ArticleLanding
