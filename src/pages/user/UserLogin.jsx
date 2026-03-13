import { useState, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginUser } from "@/redux/authSlice"
import AuthLayout from "@/components/auth/AuthLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function UserLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({ email: "", password: "" })

  const isEmailValid = useMemo(() => EMAIL_REGEX.test(email.trim()), [email])
  const canSubmit = email.trim().length > 0 && password.trim().length > 0 && isEmailValid

  function validate() {
    const next = { email: "", password: "" }
    const e = email.trim()
    const p = password.trim()

    if (!e) next.email = "Email is required."
    else if (!EMAIL_REGEX.test(e)) next.email = "Enter a valid email (e.g. user@example.com)."
    if (!p) next.password = "Password is required."

    setErrors(next)
    return !next.email && !next.password
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    dispatch(loginUser())
    navigate("/user-home")
  }

  return (
    <AuthLayout title="User Login" description="Sign in to your account">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-700">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="user@example.com"
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
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value)
              if (errors.password) setErrors((p) => ({ ...p, password: "" }))
            }}
            className={cn(errors.password && "border-red-500")}
          />
          {errors.password && <p className="mt-1.5 text-xs text-red-600">{errors.password}</p>}
        </div>

        <Button type="submit" disabled={!canSubmit} className="w-full">
          Login
        </Button>

        <div className="space-y-2 pt-2 text-center text-sm">
          <p>
            <Link to="/user-signup" className="text-teal-600 hover:underline">
              Create Account
            </Link>
          </p>
          <p>
            <Link to="/vendor-login" className="text-zinc-500 hover:text-zinc-900">
              Sign in as Vendor
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
