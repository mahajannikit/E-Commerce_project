import { Outlet } from "react-router-dom"
import VendorSidebar from "@/components/dashboard/VendorSidebar"
import DashboardHeader from "@/components/dashboard/DashboardHeader"

export default function VendorLayout() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <VendorSidebar />
      <div className="pl-64">
        <DashboardHeader title="Vendor Dashboard" />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
