import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginVendor } from "../redux/authSlice"

function VendorLogin(){

const navigate = useNavigate()
const dispatch = useDispatch()

function handleLogin(){

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

<input type="text" placeholder="Email" />

<input type="password" placeholder="Password" />

<button onClick={handleLogin}>Login</button>

<p className="switch" onClick={goToUser}>
Do you want to sign in as a User?
</p>

<p className="switch" onClick={() => navigate("/vendor-signup")}>
Create Vendor Account
</p>

</div>

</div>

)

}

export default VendorLogin