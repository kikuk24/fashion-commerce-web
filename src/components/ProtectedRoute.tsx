import { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebaseConfigs"; // Ensure you import your Firebase auth instance

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    return user ? children : <Navigate to="/signin" replace />;
}
