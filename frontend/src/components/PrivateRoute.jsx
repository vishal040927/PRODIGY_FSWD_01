import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {

    const token = localStorage.getItem("token");

    // If not logged in → redirect to login
    if (!token) {
        return <Navigate to="/" />;
    }

    // If logged in → allow access
    return children;
}

export default PrivateRoute;