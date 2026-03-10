import { useNavigate } from "react-router-dom"

function AdminSignup(){

const navigate = useNavigate()

function handleSignup(){
navigate("/admin-dashboard")
}

function goToLogin(){
navigate("/admin-login")
}

return(

<div className="login-page">

<div className="login-box">

<h2>Admin Signup</h2>

<input type="text" placeholder="Name" />

<input type="text" placeholder="Email" />

<input type="password" placeholder="Password" />

<button onClick={handleSignup}>Signup</button>

<p className="switch" onClick={goToLogin}>
Already have an account? Login
</p>

</div>

</div>

)

}

export default AdminSignup