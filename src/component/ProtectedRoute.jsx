import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({isAuthenticated , children}) => {
    return isAuthenticated ? children : <Navigate to={"sign-in"}/>
}
export default ProtectedRoute;