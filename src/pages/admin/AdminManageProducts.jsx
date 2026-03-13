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

const mockProducts = [
  { id: 1, name: "Wireless Headphones", vendor: "TechStore Pro", price: 129.99, category: "Electronics", status: "Active" },
  { id: 2, name: "Cotton T-Shirt", vendor: "Fashion Hub", price: 29.99, category: "Fashion", status: "Active" },
  { id: 3, name: "Desk Lamp", vendor: "Home Essentials", price: 49.99, category: "Home", status: "Inactive" },
]

export default function AdminManageProducts() {
  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold text-zinc-900">Manage Products</h2>
      <Card className="border-zinc-200">
        <div className="flex items-center justify-between border-b border-zinc-200 p-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <Input placeholder="Search products..." className="pl-9" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.vendor}</TableCell>
                  <TableCell>{formatINR(product.price)}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        product.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}
