import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-teal-600" />
              <span className="font-bold text-zinc-900">MyShop</span>
            </Link>
            <p className="mt-2 text-sm text-zinc-600">
              Your trusted e-commerce destination for quality products.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900">Shop</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/#categories" className="text-sm text-zinc-600 hover:text-zinc-900">All Categories</Link>
              </li>
              <li>
                <Link to="/#products" className="text-sm text-zinc-600 hover:text-zinc-900">Featured Products</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-zinc-900">Support</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">Contact Us</a></li>
              <li><a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">FAQ</a></li>
              <li><a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">Shipping</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-zinc-200 pt-8">
          <p className="text-center text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} MyShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
