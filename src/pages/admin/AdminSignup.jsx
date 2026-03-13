import { useState, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginAdmin } from "@/redux/authSlice"
import AuthLayout from "@/components/auth/AuthLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function AdminSignup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({ name: "", email: "", password: "" })

  const isEmailValid = useMemo(() => EMAIL_REGEX.test(email.trim()), [email])
  const canSubmit = name.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0 && isEmailValid

  function validate() {
    const next = { name: "", email: "", password: "" }
    const n = name.trim()
    const e = email.trim()
    const p = password.trim()

    if (!n) next.name = "Name is required."
    if (!e) next.email = "Email is required."
    else if (!EMAIL_REGEX.test(e)) next.email = "Enter a valid email (e.g. user@example.com)."
    if (!p) next.password = "Password is required."

    setErrors(next)
    return !next.name && !next.email && !next.password
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    dispatch(loginAdmin())
    navigate("/admin-dashboard")
  }

  return (
    <AuthLayout title="Admin Sign Up" description="Create an admin account">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-700">
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Admin name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              if (errors.name) setErrors((p) => ({ ...p, name: "" }))
            }}
            className={cn(errors.name && "border-red-500")}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-700">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="admin@example.com"
            value={email}
            autoComplete="email"
            onChange={(e) => {
              setEmail(e.target.value)
              if (errors.email) setErrors((p) => ({ ...p, email: "" }))
            }}
            className={cn(errors.email && "border-red-500")}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-zinc-700">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            autoComplete="new-password"
            onChange={(e) => {
              setPassword(e.target.value)
              if (errors.password) setErrors((p) => ({ ...p, password: "" }))
            }}
            className={cn(errors.password && "border-red-500")}
          />
          {errors.password && <p className="mt-1.5 text-xs text-red-600">{errors.password}</p>}
        </div>

        <Button type="submit" disabled={!canSubmit} className="w-full">
          Sign Up
        </Button>

        <div className="pt-2 text-center text-sm">
          <Link to="/admin-login" className="text-teal-600 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}
