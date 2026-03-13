import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { House, Menu, ShoppingBag, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="h-8 w-8 text-teal-700" />
          <span className="text-xl font-bold tracking-tight text-zinc-900">MyShop</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
             <House className="h-6 w-6 text-teal-700" />
          </Link>
          <Link to="/#categories" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Categories
          </Link>
          <Link to="/#products" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Products
          </Link>
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link to="/user-login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/user-signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-zinc-600 hover:bg-zinc-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-4">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-sm font-medium text-zinc-600" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/#categories" className="text-sm font-medium text-zinc-600" onClick={() => setMobileMenuOpen(false)}>
              Categories
            </Link>
            <Link to="/#products" className="text-sm font-medium text-zinc-600" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="sm" asChild className="flex-1">
                <Link to="/user-login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              </Button>
              <Button size="sm" asChild className="flex-1">
                <Link to="/user-signup" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
