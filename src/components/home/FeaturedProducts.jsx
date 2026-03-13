import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatINR } from "@/lib/currency"

const featuredProducts = [
  { id: 1, name: "Wireless Headphones", price: 499.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", category: "Electronics" },
  { id: 2, name: "Minimalist Watch", price: 899.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", category: "Accessories" },
  { id: 3, name: "Cotton T-Shirt", price: 299.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", category: "Fashion" },
  { id: 4, name: "Desk Lamp", price: 499.99, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop", category: "Home" },
]

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-zinc-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Featured Products</h2>
          <p className="mt-2 text-zinc-600">Handpicked favorites from our collection</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map(  (product) => (
            <Card key={product.id} className="overflow-hidden border-zinc-200 transition-shadow hover:shadow-lg">
              <div className="aspect-square overflow-hidden bg-zinc-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-xs font-medium text-teal-600">{product.category}</p>
                <h3 className="mt-1 font-semibold text-zinc-900">{product.name}</h3>
                <p className="mt-1 text-lg font-bold text-zinc-900">{formatINR(product.price)}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/#products">Add to Cart</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
