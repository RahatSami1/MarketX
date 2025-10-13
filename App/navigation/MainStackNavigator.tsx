import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTabs from "./MainTabs";
import Notification from "../screens/Dashboard/Notification";
import DetailScreen from "./../screens/Dashboard/DetailScreen";
import NewsDetailScreen from "../screens/Dashboard/NewsDetailScreen";
import ProfileStackNavigator from "./ProfileStackNavigator";
import SearchScreen from "../screens/Dashboard/SearchScreen";
import ChartScreen from "../screens/Dashboard/ChartScreen";


const Stack = createNativeStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      {/* Tabs - No header */}
      <Stack.Screen
        name="Tabs"
        component={MainTabs}
        options={{ headerShown: false }}
        
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
        options={{
          title: " News Detail",
          headerStyle: { backgroundColor: "#000000ff" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "Detail",
          headerStyle: { backgroundColor: "#000000ff" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
           animation: "slide_from_right", // global slide from right
        }}
      />
      {/* Profile Screen - Show header with back */}
      <Stack.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          title: "Profile",
          headerStyle: { backgroundColor: "#000000ff" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
           animation: "slide_from_right", // global slide from right
        }}
      />

      {/* Notification Screen - Show header with back */}
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "Notifications",
          headerStyle: { backgroundColor: "#000000ff" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
           animation: "slide_from_right", // global slide from right
        }}
      />
        <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          headerStyle: { backgroundColor: "#000000ff" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "600" },
        }}
      />
            <Stack.Screen
        name="Chart"
        component={ChartScreen}
      options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
