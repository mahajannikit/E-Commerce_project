import StatCard from "@/components/dashboard/StatCard"
import { Package, ShoppingCart, DollarSign, TrendingUp } from "lucide-react"
import { formatINR } from "@/lib/currency"

export default function VendorStats() {
  const stats = [
    { title: "Total Products", value: "24", icon: Package, trend: "+3 this month" },
    { title: "Orders", value: "156", icon: ShoppingCart, trend: "+12% from last week" },
    { title: "Revenue", value: formatINR(12450), icon: DollarSign, trend: "+8% from last month" },
    { title: "Conversion", value: "3.2%", icon: TrendingUp },
  ]

  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold text-zinc-900">Overview</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  )
}
