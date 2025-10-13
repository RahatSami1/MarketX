import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Welcome");
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/marketX.png")} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // White background
  },
  logo: {
    width: 308,
    height: 211,
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333333",
    marginTop: 10,
  },
});
