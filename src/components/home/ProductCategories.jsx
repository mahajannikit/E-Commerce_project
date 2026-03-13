import { Link } from "react-router-dom"
import { Card } from "@/components/ui/card"
import { Laptop, Shirt, Home, BookOpen, Smartphone } from "lucide-react"

const categories = [
  { id: 1, name: "Electronics", icon: Laptop, count: "250+", color: "bg-blue-100 text-blue-700" },
  { id: 2, name: "Fashion", icon: Shirt, count: "500+", color: "bg-rose-100 text-rose-700" },
  { id: 3, name: "Home & Garden", icon: Home, count: "180+", color: "bg-emerald-100 text-emerald-700" },
  { id: 4, name: "Books", icon: BookOpen, count: "1200+", color: "bg-amber-100 text-amber-800" },
  { id: 5, name: "Accessories", icon: Smartphone, count: "320+", color: "bg-violet-100 text-violet-700" },
]

export default function ProductCategories() {
  return (
    <section id="categories" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Shop by Category</h2>
          <p className="mt-2 text-zinc-600">Find what you need across our curated collections</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.id} to="/#products">
                <Card className="group cursor-pointer p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 border-zinc-200">
                  <div className={`inline-flex rounded-xl p-3 ${category.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-3 font-semibold text-zinc-900 group-hover:text-teal-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-zinc-500">{category.count} products</p>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
