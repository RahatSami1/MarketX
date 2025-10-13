import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import Toast from "react-native-toast-message";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, Platform } from "react-native";

const theme = {
  background: "#000000", // Black theme
  statusBarStyle: "light-content", // Light text/icons for dark background
};

export default function App() {
  return (
    <SafeAreaProvider>
      {/* StatusBar styling */}
      <StatusBar
        barStyle={theme.statusBarStyle}
        backgroundColor={theme.background} // Android status bar background
        translucent={false} // Avoid blending with content
      />

      {/* Safe area */}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.background, // Safe area matches theme
        }}
        edges={[]}
      >
        <AppNavigator />
        <Toast />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
