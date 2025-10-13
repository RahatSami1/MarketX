import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function VersionScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="code-slash-outline" size={80} color="#fff" />
      </View>
      <Text style={styles.title}>App Version</Text>
      <Text style={styles.version}>1.0.0</Text>
      <Text style={styles.description}>
        You are using the latest version of the app. Stay updated to enjoy new features and improvements.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  iconContainer: {
    backgroundColor: "#1a1a1a",
    padding: 25,
    borderRadius: 50,
    marginBottom: 30,
    elevation: 4, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  version: {
    color: "#bbb",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 20,
  },
  description: {
    color: "#888",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
  },
});
