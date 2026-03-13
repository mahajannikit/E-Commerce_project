import { useState, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginVendor } from "@/redux/authSlice"
import AuthLayout from "@/components/auth/AuthLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function VendorSignup() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [storeName, setStoreName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({ storeName: "", email: "", password: "" })

  const isEmailValid = useMemo(() => EMAIL_REGEX.test(email.trim()), [email])
  const canSubmit = storeName.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0 && isEmailValid

  function validate() {
    const next = { storeName: "", email: "", password: "" }
    const s = storeName.trim()
    const e = email.trim()
    const p = password.trim()

    if (!s) next.storeName = "Store name is required."
    if (!e) next.email = "Email is required."
    else if (!EMAIL_REGEX.test(e)) next.email = "Enter a valid email (e.g. user@example.com)."
    if (!p) next.password = "Password is required."

    setErrors(next)
    return !next.storeName && !next.email && !next.password
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    dispatch(loginVendor())
    navigate("/vendor-dashboard")
  }

  return (
    <AuthLayout title="Vendor Sign Up" description="Create your vendor account">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="storeName" className="mb-1.5 block text-sm font-medium text-zinc-700">
            Store Name
          </label>
          <Input
            id="storeName"
            type="text"
            placeholder="My Store"
            value={storeName}
            onChange={(e) => {
              setStoreName(e.target.value)
              if (errors.storeName) setErrors((p) => ({ ...p, storeName: "" }))
            }}
            className={cn(errors.storeName && "border-red-500")}
          />
          {errors.storeName && <p className="mt-1.5 text-xs text-red-600">{errors.storeName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-700">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="vendor@example.com"
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

        <div className="space-y-2 pt-2 text-center text-sm">
          <p>
            <Link to="/vendor-login" className="text-teal-600 hover:underline">
              Already have an account? Login
            </Link>
          </p>
          <p>
            <Link to="/user-signup" className="text-zinc-500 hover:text-zinc-900">
              Sign up as User
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
