import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginUser } from "../redux/authSlice"

function UserLogin(){

const navigate = useNavigate()
const dispatch = useDispatch()

function handleLogin(){

dispatch(loginUser())   
navigate("/user-home")  

}

function goToVendor(){
navigate("/vendor-login")
}

return(

<div className="login-page">

<div className="login-box">

<h2>User Login</h2>

<input type="text" placeholder="Email" />

<input type="password" placeholder="Password" />

<button onClick={handleLogin}>Login</button>

<p className="switch" onClick={goToVendor}>
Do you want to sign in as a Vendor?
</p>

<p className="switch" onClick={() => navigate("/user-signup")}>
Create Account
</p>

</div>

</div>

)

}

export default UserLogin