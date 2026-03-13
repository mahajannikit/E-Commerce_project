import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginVendor } from "../redux/authSlice"
import { useMemo, useState } from "react"

function VendorLogin(){

const navigate = useNavigate()
const dispatch = useDispatch()

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [errors, setErrors] = useState({ email: "", password: "" })

const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, [])
const isEmailValid = useMemo(() => emailRegex.test(email.trim()), [email, emailRegex])
const canSubmit = email.trim().length > 0 && password.trim().length > 0 && isEmailValid

function validate(){
  const next = { email: "", password: "" }
  const e = email.trim()
  const p = password.trim()

  if (!e) next.email = "Email is required."
  else if (!emailRegex.test(e)) next.email = "Enter a valid email address (e.g. user@example.com)."

  if (!p) next.password = "Password is required."

  setErrors(next)
  return !next.email && !next.password
}

function handleLogin(e){
  e.preventDefault()

  if(!validate()) return

dispatch(loginVendor())   // Redux me vendor role set hoga
navigate("/vendor-dashboard")  // vendor dashboard open hoga

}

function goToUser(){
navigate("/user-login")
}

return(

<div className="login-page">

<div className="login-box">

<h2>Vendor Login</h2>

<form onSubmit={handleLogin} noValidate>
<input
  type="email"
  placeholder="Email"
  autoComplete="email"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value)
    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }))
  }}
/>
{errors.email ? <div className="field-error">{errors.email}</div> : null}

<input
  type="password"
  placeholder="Password"
  autoComplete="current-password"
  value={password}
  onChange={(e) => {
    setPassword(e.target.value)
    if (errors.password) setErrors((prev) => ({ ...prev, password: "" }))
  }}
/>
{errors.password ? <div className="field-error">{errors.password}</div> : null}

<button type="submit" disabled={!canSubmit}>Login</button>

<p className="switch" onClick={goToUser}>
Do you want to sign in as a User?
</p>

<p className="switch" onClick={() => navigate("/vendor-signup")}>
Create Vendor Account
</p>

</form>
</div>

</div>

)

}

export default VendorLogin