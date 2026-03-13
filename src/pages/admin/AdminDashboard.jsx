import { Routes, Route } from "react-router-dom"
import AdminLayout from "./AdminLayout"
import AdminStats from "./AdminStats"
import AdminManageUsers from "./AdminManageUsers"
import AdminManageVendors from "./AdminManageVendors"
import AdminManageProducts from "./AdminManageProducts"
import AdminOrderManagement from "./AdminOrderManagement"

export default function AdminDashboard() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AdminStats />} />
        <Route path="users" element={<AdminManageUsers />} />
        <Route path="vendors" element={<AdminManageVendors />} />
        <Route path="products" element={<AdminManageProducts />} />
        <Route path="orders" element={<AdminOrderManagement />} />
      </Route>
    </Routes>
  )
}
