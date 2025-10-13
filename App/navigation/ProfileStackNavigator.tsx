import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Dashboard/Profile";
import ThemesAndLanguageScreen from "../components/Profile/ThemesAndLanguageScreen";
import PrivacyPolicyScreen from "../components/Profile/PrivacyPolicyScreen";
import TermsScreen from "../components/Profile/TermsScreen";
import DisclaimerScreen from "../components/Profile/DisclaimerScreen";
import HelpCenterScreen from "../components/Profile/HelpCenterScreen";
import FeedbackScreen from "../components/Profile/FeedbackScreen";
import AboutScreen from "../components/Profile/AboutScreen";
import VersionScreen from "../components/Profile/VersionScreen";
import Notification from "../screens/Dashboard/Notification";
import Preference from "../components/Profile/Preference";
import UserInfoScreen from "../components/Profile/UserInfo";



const Stack = createNativeStackNavigator();

export default function ProfileStackNavigator() {
  return (
    <Stack.Navigator
          screenOptions={{
        headerShown: false, // <-- hides header for all screens
         animation: "slide_from_right", // global slide from right
      }}
    >
      <Stack.Screen
        name="ProfileHome"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
  name="UserInfo"
  component={UserInfoScreen}
/>

      <Stack.Screen name="Notifications" component={Notification} />
      <Stack.Screen
        name="ThemesAndLanguage"
        component={ThemesAndLanguageScreen}
    
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
       
      />
      <Stack.Screen
        name="Terms"
        component={TermsScreen}

      />
      <Stack.Screen
        name="Disclaimer"
        component={DisclaimerScreen}
     
      />
      <Stack.Screen
        name="HelpCenter"
        component={HelpCenterScreen}
       
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
 
      />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen
        name="Version"
        component={VersionScreen}
      
      />
        <Stack.Screen
        name="Preferences"
        component={Preference}
      />
    </Stack.Navigator>
  );
}
