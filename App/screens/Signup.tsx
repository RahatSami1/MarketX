import React, { useState } from "react";
import Toast from "react-native-toast-message";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator, // ✅ import spinner
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useAuthStore } from "../store/auth";

export default function SignUp() {
  const navigation = useNavigation<any>();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordColor, setPasswordColor] = useState("red");
  const [loading, setLoading] = useState(false); // ✅ new loading state

  const signup = useAuthStore((s) => s.signup);

  const checkPasswordStrength = (pass) => {
    if (pass.length < 8) {
      setPasswordStrength("Minimum 8 characters");
      setPasswordColor("red");
      return;
    }
    const hasLower = /[a-z]/.test(pass);
    const hasUpper = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecial = /[^A-Za-z0-9]/.test(pass);

    if (hasLower && hasUpper && hasNumber && hasSpecial) {
      setPasswordStrength("Strong password");
      setPasswordColor("green");
    } else if ((hasLower || hasUpper) && hasNumber) {
      setPasswordStrength("Medium strength");
      setPasswordColor("orange");
    } else {
      setPasswordStrength("Weak password");
      setPasswordColor("red");
    }
  };

  const handleSignup = async () => {
    setLoading(true); // ✅ start loading
    try {
      await signup(username, email, password);

      Toast.show({
        type: "success",
        text1: "Signup successful 🎉",
        position: "bottom",
      });

      navigation.navigate("Login");
    } catch (e) {
      Toast.show({
        type: "error",
        text1: "Signup failed 😞",
        text2: e?.message || "Something went wrong",
        position: "bottom",
      });
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top logo section */}
      <View style={styles.topSection}>
        <Image
          source={require("../assets/marketX.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.header}>Welcome Back!</Text>
      <Text style={styles.subHeader}>Start your Trading</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Username</Text>
        <View style={styles.containerBox}>
          <View style={styles.inputBox}>
            <Image
              source={require("../assets/user-icon.png")}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#999"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <Text style={styles.inputLabel}>Gmail</Text>
          <View style={styles.inputBox}>
            <Image
              source={require("../assets/user-icon.png")}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
                if (text.length > 0 && !gmailPattern.test(text)) {
                  setEmailError("Please enter a valid Gmail address");
                } else {
                  setEmailError("");
                }
              }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {emailError ? (
            <Text style={{ color: "red", marginTop: 4, fontSize: 12 }}>
              {emailError}
            </Text>
          ) : null}

          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputBox}>
            <Image
              source={require("../assets/lock-icon.png")}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                checkPasswordStrength(text);
              }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={
                  showPassword
                    ? require("../assets/lock-icon.png")
                    : require("../assets/eye-icon.png")
                }
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          {password.length > 0 && (
            <Text style={{ color: passwordColor, marginTop: 4, fontSize: 12 }}>
              {passwordStrength}
            </Text>
          )}

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign Up Button */}
      <LinearGradient
        colors={["#FFB6C1", "#98FB98"]}
        style={styles.signInButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <TouchableOpacity style={styles.touchable} onPress={handleSignup} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#333" /> // ✅ spinner
          ) : (
            <Text style={styles.signInText}>Sign Up</Text>
          )}
        </TouchableOpacity>
      </LinearGradient>

      {/* Already have account link */}
      <Text style={styles.createAccount}>
        Already have an account?{" "}
        <Text
          style={styles.createLink}
          onPress={() => navigation.replace("Login")}
        >
          Login Now
        </Text>
      </Text>

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
    height: 170,
    backgroundColor: "#D9D9D9",
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 179,
    height: 123,
  },
  header: {
    fontSize: 38,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  subHeader: {
    fontSize: 15,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 20,
  },

  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: "#fff",
    marginBottom: 6,
    marginTop: 10,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A2A",
    borderRadius: 12,
    paddingHorizontal: 12,
    width: 314,
    height: 55,
  },
  input: {
    flex: 1,
    color: "#fff",
    marginLeft: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
  forgotPassword: {
    color: "#AAA",
    fontSize: 12,
    alignSelf: "flex-end",
    marginTop: 8,
  },
  signInButton: {
    width: 314,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  touchable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 18,
  },
  createAccount: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  createLink: {
    color: "#00FF00",
    fontWeight: "bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginBottom: 20,
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
