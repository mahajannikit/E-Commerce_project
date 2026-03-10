import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"

import ProtectedRoute from "./components/ProtectedRoute"

import UserLogin from "./user/UserLogin"
import UserSignup from "./user/UserSignup"
import UserHome from "./user/UserHome"


import VendorLogin from "./vendor/VendorLogin"
import VendorSignup from "./vendor/VendorSignup"
import VendorDashboard from "./vendor/VendorDashboard"


import AdminLogin from "./admin/AdminLogin"
import AdminSignup from "./admin/AdminSignup"
import AdminDashboard from "./admin/AdminDashboard"

function App(){

    
return(

<BrowserRouter>

<Routes>


<Route path="/" element={<UserLogin/>} />

<Route path="/user-signup" element={<UserSignup/>} />
<Route path="/user-login" element={<UserLogin/>} />

<Route
path="/user-home"
element={
<ProtectedRoute allowedRoles={["user","vendor","admin"]}>
<UserHome/>
</ProtectedRoute>
}
/>




<Route path="/vendor-login" element={<VendorLogin/>} />
<Route path="/vendor-signup" element={<VendorSignup/>} />

<Route
path="/vendor-dashboard"
element={
<ProtectedRoute allowedRoles={["vendor","admin"]}>
<VendorDashboard/>
</ProtectedRoute>
}
/>

<Route path="/admin-login" element={<AdminLogin/>}/>
<Route path="/admin-signup" element={<AdminSignup/>}/>

<Route
path="/admin-dashboard"
element={
<ProtectedRoute allowedRoles={["admin"]}>
<AdminDashboard/>
</ProtectedRoute>
}
/>


</Routes>

</BrowserRouter>

)

}

export default App