function LeftSidebar(){

return(

<div style={{
width:"200px",
height:"calc(100vh - 70px)",   
background:"#10375f",
color:"white",
padding:"19px",
position:"fixed",
left:"0",
top:"70px"    


}}>

<h3>Admin Panel</h3>

<ul style={{listStyle:"none"}}>

<li>Dashboard</li>
<br />
<li>Users</li>
<br />
<li>Vendors</li>
<br />
<li>Products</li>

</ul>

</div>

)

}

export default LeftSidebar
