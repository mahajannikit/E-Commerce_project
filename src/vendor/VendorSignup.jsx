import { useNavigate } from "react-router-dom"

function VendorSignup(){

const navigate = useNavigate()

function handleSignup(){
navigate("/vendor-dashboard")
}

function goToUserSignup(){
navigate("/user-signup")
}

function goToLogin(){
navigate("/vendor-login")
}

return(

<div className="login-page">

<div className="login-box">

<h2>Vendor Signup</h2>

<input type="text" placeholder="Store Name" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />

<button onClick={handleSignup}>Signup</button>

<p className="switch" onClick={goToLogin}>
Already have an account? Login
</p>

<p className="switch" onClick={goToUserSignup}>
Do you want to sign up as a User?
</p>

</div>

</div>

)

}

export default VendorSignup