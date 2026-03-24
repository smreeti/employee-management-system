import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./auth/AuthProvider";

export const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};