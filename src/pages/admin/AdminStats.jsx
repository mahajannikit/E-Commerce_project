import StatCard from "@/components/dashboard/StatCard"
import { Users, Store, Package, ShoppingCart } from "lucide-react"

export default function AdminStats() {
  const stats = [
    { title: "Total Users", value: "1,284", icon: Users, trend: "+18% this month" },
    { title: "Active Vendors", value: "42", icon: Store, trend: "+5 new" },
    { title: "Total Products", value: "2,450", icon: Package, trend: "+156 this week" },
    { title: "Orders Today", value: "89", icon: ShoppingCart, trend: "+12% from yesterday" },
  ]

  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold text-zinc-900">Dashboard Overview</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  )
}
