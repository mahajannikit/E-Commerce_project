import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"

import HomePage from "./pages/HomePage"
import UserLogin from "./pages/user/UserLogin"
import UserSignup from "./pages/user/UserSignup"

import VendorLogin from "./pages/vendor/VendorLogin"
import VendorSignup from "./pages/vendor/VendorSignup"
import VendorDashboard from "./pages/vendor/VendorDashboard"

import AdminLogin from "./pages/admin/AdminLogin"
import AdminSignup from "./pages/admin/AdminSignup"
import AdminDashboard from "./pages/admin/AdminDashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public - storefront homepage (default route) */}
        <Route path="/" element={<HomePage />} />

        {/* User auth */}
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-home" element={<HomePage />} />

        {/* Vendor auth */}
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/vendor-signup" element={<VendorSignup />} />
        <Route
          path="/vendor-dashboard/*"
          element={
            <ProtectedRoute allowedRoles={["vendor", "admin"]}>
              <VendorDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin auth */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route
          path="/admin-dashboard/*"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
