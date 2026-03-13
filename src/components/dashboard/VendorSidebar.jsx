import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Package, PlusCircle, ShoppingCart } from "lucide-react"

const vendorNavItems = [
  { to: "/vendor-dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/vendor-dashboard/add-product", icon: PlusCircle, label: "Add Product" },
  { to: "/vendor-dashboard/products", icon: Package, label: "My Products" },
  { to: "/vendor-dashboard/orders", icon: ShoppingCart, label: "Orders" },
]

export default function VendorSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-200 bg-white">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b border-zinc-200 px-6">
          <span className="font-bold text-zinc-900">Vendor Panel</span>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {vendorNavItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/vendor-dashboard"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-teal-50 text-teal-700"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                  )
                }
              >
                <Icon className="h-5 w-5 shrink-0" />
                {item.label}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
