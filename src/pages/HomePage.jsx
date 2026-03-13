import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/home/Hero"
import ProductCategories from "@/components/home/ProductCategories"
import FeaturedProducts from "@/components/home/FeaturedProducts"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  )
}
