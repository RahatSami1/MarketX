import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "../screens/Dashboard/Home";
import Market from "../screens/Dashboard/Market";
import News from "../screens/Dashboard/News";
import Watchlist from "../screens/Dashboard/Watchlist";

const Tab = createBottomTabNavigator();

// ✅ Wrapper so every tab respects safe area
function withSafeArea(Component) {
  return (props) => (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }} edges={["top", "left", "right"]}>
      <Component {...props} />
    </SafeAreaView>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#000000ff",
        },
        tabBarIcon: ({ color }) => {
          if (route.name === "Home") {
            return <Ionicons name="home" size={22} color={color} />;
          } else if (route.name === "Market") {
            return <FontAwesome5 name="chart-line" size={20} color={color} />;
          } else if (route.name === "News") {
            return (
              <MaterialCommunityIcons
                name="newspaper"
                size={22}
                color={color}
              />
            );
          } else if (route.name === "Watchlist") {
            return <Ionicons name="bookmark" size={22} color={color} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={withSafeArea(Home)} />
      <Tab.Screen name="Market" component={withSafeArea(Market)} />
      <Tab.Screen name="News" component={withSafeArea(News)} />
      <Tab.Screen name="Watchlist" component={withSafeArea(Watchlist)} />
    </Tab.Navigator>
  );
}
