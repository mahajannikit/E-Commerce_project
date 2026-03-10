import { useNavigate } from "react-router-dom"

function UserSignup(){

const navigate = useNavigate()

function handleSignup(){
navigate("/user-home")
}

function goToVendorSignup(){
navigate("/vendor-signup")
}

function goToLogin(){
navigate("/user-login")
}

return(

<div className="login-page">

<div className="login-box">

<h2>User Signup</h2>

<input type="text" placeholder="Name" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />

<button onClick={handleSignup}>Signup</button>

<p className="switch" onClick={goToLogin}>
Already have an account? Login
</p>

<p className="switch" onClick={goToVendorSignup}>
Do you want to sign up as a Vendor?
</p>

</div>

</div>

)

}

export default UserSignup