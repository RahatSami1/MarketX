import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";


const { width } = Dimensions.get("window");

export default function LoadingScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Logging you in...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginTop: 20,
  },
});
