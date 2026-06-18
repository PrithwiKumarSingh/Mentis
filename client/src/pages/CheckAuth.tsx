import { Navigate } from "react-router-dom";

const CheckAuth = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/signin" replace />;
    }

    return <Navigate to="/dashboard" replace />;
};

export default CheckAuth;