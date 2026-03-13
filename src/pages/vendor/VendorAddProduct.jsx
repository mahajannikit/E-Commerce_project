import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function VendorAddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Product added:", formData)
    setFormData({ name: "", price: "", category: "", description: "" })
  }

  return (
    <div>
      <h2 className="mb-6 text-lg font-semibold text-zinc-900">Add New Product</h2>
      <Card className="max-w-2xl border-zinc-200">
        <CardHeader>
          <h3 className="text-base font-medium">Product Details</h3>
          <p className="text-sm text-zinc-500">Fill in the information below</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-700">Product Name</label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter product name"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="mb-2 block text-sm font-medium text-zinc-700">Price (₹)</label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="mb-2 block text-sm font-medium text-zinc-700">Category</label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g. Electronics, Fashion"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="mb-2 block text-sm font-medium text-zinc-700">Description</label>
              <textarea
                id="description"
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="Describe your product..."
              />
            </div>
            <Button type="submit">Add Product</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
