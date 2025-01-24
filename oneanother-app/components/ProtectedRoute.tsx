import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import AuthService from "@/services/AuthService";
import { View, ActivityIndicator } from "react-native";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (!AuthService.isAuthenticated()) {
          // Redirect to login if no token exists
          router.replace("/(auth)/login.screen");
          return;
        }

        // Try to refresh token
        await AuthService.refreshToken();
        setIsLoading(false);
      } catch (error) {
        console.error("Authentication error:", error);
        router.replace("/(auth)/login.screen");
      }
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
