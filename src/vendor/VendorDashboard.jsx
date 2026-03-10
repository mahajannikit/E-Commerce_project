import TopBar from "../components/TopBar"
import RightSidebar from "../components/RightSidebar"

function VendorDashboard(){

return(

<div>

<TopBar/>

<div className="vendor-layout">

<div className="vendor-content">

<h2>Vendor Dashboard</h2>
<p>Manage your products and orders</p>

</div>

<RightSidebar/>

</div>

</div>

)

}

export default VendorDashboard