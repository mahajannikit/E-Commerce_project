import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

import HomePage from "@/pages/HomePage"

export default function RoleGate() {
  const { role, isLogin } = useSelector((state) => state.auth)

  if (!isLogin) return <Navigate to="/user-login" replace />

  if (role === "admin") return <Navigate to="/admin-dashboard" replace />
  if (role === "vendor") return <Navigate to="/vendor-dashboard" replace />

  return <HomePage />
}

