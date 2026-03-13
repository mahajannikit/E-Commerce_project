import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function StatCard({ title, value, icon: Icon, className, trend }) {
  return (
    <Card className={cn("border-zinc-200", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-500">{title}</p>
            <p className="mt-1 text-2xl font-bold text-zinc-900">{value}</p>
            {trend && <p className="mt-1 text-xs text-emerald-600">{trend}</p>}
          </div>
          {Icon && (
            <div className="rounded-lg bg-teal-100 p-3">
              <Icon className="h-6 w-6 text-teal-600" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
