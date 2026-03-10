import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginAdmin } from "../redux/authSlice"
import { useState } from "react"

function AdminLogin(){

const navigate = useNavigate()
const dispatch = useDispatch()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

function handleLogin(){

if(email === "admin@gmail.com" && password === "12345"){

dispatch(loginAdmin())
navigate("/admin-dashboard")

}else{

alert("Invalid Admin Credentials")

}

}

return(

<div className="login-page">

<div className="login-box">

<h2>Admin Login</h2>

<input 
type="text" 
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input 
type="password" 
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>Login</button>

</div>

</div>

)

}

export default AdminLogin