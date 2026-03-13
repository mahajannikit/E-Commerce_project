import { Outlet } from "react-router-dom"
import AdminSidebar from "@/components/dashboard/AdminSidebar"
import DashboardHeader from "@/components/dashboard/DashboardHeader"

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <AdminSidebar />
      <div className="pl-64">
        <DashboardHeader title="Admin Dashboard" />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
