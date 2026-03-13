import { Outlet, Routes, Route, Navigate } from "react-router-dom"
import VendorLayout from "./VendorLayout"
import VendorStats from "./VendorStats"
import VendorAddProduct from "./VendorAddProduct"
import VendorProductList from "./VendorProductList"
import VendorOrderList from "./VendorOrderList"

export default function VendorDashboard() {
  return (
    <Routes>
      <Route element={<VendorLayout />}>
        <Route index element={<VendorStats />} />
        <Route path="add-product" element={<VendorAddProduct />} />
        <Route path="products" element={<VendorProductList />} />
        <Route path="orders" element={<VendorOrderList />} />
      </Route>
    </Routes>
  )
}
