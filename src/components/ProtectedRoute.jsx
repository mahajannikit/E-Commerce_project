import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function ProtectedRoute({ children, allowedRoles }) {

const role = useSelector((state) => state.auth.role)

if (!allowedRoles.includes(role)) {
return <Navigate to="/user-login" />
}

return children

}

export default ProtectedRoute