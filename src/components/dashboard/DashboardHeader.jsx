import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { logout } from "@/redux/authSlice"

export default function DashboardHeader({ title }) {
  const dispatch = useDispatch()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-6">
      <h1 className="text-xl font-semibold text-zinc-900">{title}</h1>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/">View Store</Link>
        </Button>
        <Button variant="ghost" size="icon-sm" onClick={() => dispatch(logout())} asChild>
          <Link to="/user-login">
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Logout</span>
          </Link>
        </Button>
      </div>
    </header>
  )
}
