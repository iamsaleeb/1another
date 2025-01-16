import React, { useEffect } from "react";
import { router } from "expo-router";
import AuthService from "@/app/services/AuthService";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    useEffect(() => {
        if (!AuthService.isAuthenticated()) {
            router.replace("/screens/login/login.screen");
        }
    }, []);

    return <>{children}</>;
};

export default ProtectedRoute;