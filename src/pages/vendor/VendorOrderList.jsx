import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatINR } from "@/lib/currency"

const mockOrders = [
  { id: "ORD-001", product: "Wireless Headphones", customer: "John Doe", amount: 129.99, status: "Delivered", date: "2025-03-10" },
  { id: "ORD-002", product: "Cotton T-Shirt", customer: "Jane Smith", amount: 29.99, status: "Shipped", date: "2025-03-11" },
  { id: "ORD-003", product: "Desk Lamp", customer: "Bob Wilson", amount: 49.99, status: "Processing", date: "2025-03-12" },
]

const statusColors = {
  Delivered: "bg-emerald-100 text-emerald-700",
  Shipped: "bg-blue-100 text-blue-700",
  Processing: "bg-amber-100 text-amber-700",
}

export default function VendorOrderList() {
  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold text-zinc-900">Orders</h2>
      <Card className="border-zinc-200">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-sm">{order.id}</TableCell>
                  <TableCell>{order.product}</TableCell>
                  <TableCell>{order.customer}</TableCell>
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
