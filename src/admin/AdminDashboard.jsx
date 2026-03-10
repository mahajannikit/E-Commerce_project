import TopBar from "../components/TopBar"
import LeftSidebar from "../components/LeftSidebar"

function AdminDashboard(){

return(

<div>

<TopBar/>

<div className="admin-layout">

<LeftSidebar/>

<div className="admin-content">

<h2>Admin Dashboard</h2>
<p>Manage Users, Vendors, Products</p>

</div>

</div>

</div>

)

}

export default AdminDashboard

