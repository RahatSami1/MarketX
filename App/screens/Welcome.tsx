import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function WelcomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Top curved section with logo */}
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/marketX.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.welcomeText}>Welcome!</Text>

        <LinearGradient
          colors={["#FFB6C1", "#98FB98"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.signUpButton}
        >
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.replace("Signup")}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={["#000000ff", "#000000ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.signInButton}
        >
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.replace("Login")}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* OR Separator */}
        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>Or continue with</Text>
          <View style={styles.orLine} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../assets/google-icon.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../assets/apple-icon.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../assets/facebook-icon.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
    alignItems: "center",
  },
  topSection: {
    flex: 0,
    width: 400,
    height: 300,
    backgroundColor: "#D9D9D9",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 223,
    height: 153,
  },
  bottomSection: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: "700",
    color: "#EFEFEF",
    marginBottom: 50,
    textAlign: "center",
  },
  touchable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
     width: 314,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  signUpButtonText: {
    color: "#333333",
    fontSize: 18,
    fontWeight: "600",
  },
  signInButton: {
   width: 314,
    height: 50,
    borderRadius: 15,
    backgroundColor: "transparent",
  borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    
    
  },
  signInButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 30,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#666666",
  },
  orText: {
    color: "#B6B6B6",
    fontSize: 14,
    marginHorizontal: 15,
    fontWeight: "400",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 180,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
});
