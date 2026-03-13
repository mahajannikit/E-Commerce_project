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
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const mockVendors = [
  { id: 1, name: "TechStore Pro", owner: "Alice Johnson", products: 85, status: "Verified" },
  { id: 2, name: "Fashion Hub", owner: "Mike Brown", products: 120, status: "Verified" },
  { id: 3, name: "Home Essentials", owner: "Sarah Lee", products: 45, status: "Pending" },
]

export default function AdminManageVendors() {
  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold text-zinc-900">Manage Vendors</h2>
      <Card className="border-zinc-200">
        <div className="flex items-center justify-between border-b border-zinc-200 p-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <Input placeholder="Search vendors..." className="pl-9" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Store Name</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockVendors.map((vendor) => (
                <TableRow key={vendor.id}>
                  <TableCell className="font-medium">{vendor.name}</TableCell>
                  <TableCell>{vendor.owner}</TableCell>
                  <TableCell>{vendor.products}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        vendor.status === "Verified" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {vendor.status}
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
