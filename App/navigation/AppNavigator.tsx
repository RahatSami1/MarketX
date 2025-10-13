import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";

import { useAuthStore } from "../store/auth";

import MainStackNavigator from "./MainStackNavigator";

export default function AppNavigator() {
  const { accessToken, loadTokens } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      await loadTokens();
      setIsLoading(false);
    };

    initAuth();
  }, []);

  if (isLoading) return null;

  return (
    <NavigationContainer>
      {accessToken ? <MainStackNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
