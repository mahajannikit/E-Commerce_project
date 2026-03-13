import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, Store, Package, ShoppingCart } from "lucide-react"

const adminNavItems = [
  { to: "/admin-dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin-dashboard/users", icon: Users, label: "Manage Users" },
  { to: "/admin-dashboard/vendors", icon: Store, label: "Manage Vendors" },
  { to: "/admin-dashboard/products", icon: Package, label: "Manage Products" },
  { to: "/admin-dashboard/orders", icon: ShoppingCart, label: "Order Management" },
]

export default function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-200 bg-white">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b border-zinc-200 px-6">
          <span className="font-bold text-zinc-900">Admin Panel</span>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {adminNavItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/admin-dashboard"}
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
