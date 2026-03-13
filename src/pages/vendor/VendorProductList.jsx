import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { formatINR } from "@/lib/currency"

const mockProducts = [
  { id: 1, name: "Wireless Headphones", price: 129.99, stock: 45, status: "Active" },
  { id: 2, name: "Cotton T-Shirt", price: 29.99, stock: 120, status: "Active" },
  { id: 3, name: "Desk Lamp", price: 49.99, stock: 0, status: "Out of Stock" },
  { id: 4, name: "Minimalist Watch", price: 89.99, stock: 23, status: "Active" },
]

export default function VendorProductList() {
  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold text-zinc-900">My Products</h2>
      <Card className="border-zinc-200">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[70px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{formatINR(product.price)}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        product.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon-xs">
                        <Pencil className="h-3 w-3" />
                      </Button>
                      <Button variant="ghost" size="icon-xs">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
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
