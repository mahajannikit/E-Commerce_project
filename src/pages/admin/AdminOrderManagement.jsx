import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { formatINR } from "@/lib/currency"

const mockOrders = [
  { id: "ORD-001", customer: "Nikita Mahajan", vendor: "TechStore Pro", amount: 259.98, status: "Delivered", date: "2025-03-10" },
  { id: "ORD-002", customer: "Isha Rathor", vendor: "Fashion Hub", amount: 89.97, status: "Shipped", date: "2025-03-11" },
  { id: "ORD-003", customer: "Mohini Waghele", vendor: "Home Essentials", amount: 49.99, status: "Processing", date: "2025-03-12" },
]

const statusColors = {
  Delivered: "bg-emerald-100 text-emerald-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-amber-100 text-amber-700",
}

export default function AdminOrderManagement() {
  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold text-zinc-900">Order Management</h2>
      <Card className="border-zinc-200">
        <div className="flex items-center justify-between border-b border-zinc-200 p-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <Input placeholder="Search orders..." className="pl-9" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-sm">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.vendor}</TableCell>
                  <TableCell>{formatINR(order.amount)}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        statusColors[order.status] || "bg-zinc-100 text-zinc-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-zinc-500">{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}
