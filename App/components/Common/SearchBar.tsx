import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons"; // Magnifying glass icon

export default function SearchBar() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Search")}
      activeOpacity={0.8}
    >
      <Feather name="search" size={20} color="#888" style={styles.icon} />
      <Text style={styles.placeholder}>
        Search indices, stocks, mutual funds...
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // for Android shadow
  },
  icon: { marginRight: 10 },
  placeholder: {
    color: "#888",
    fontSize: 16,
    fontWeight: "500",
  },
});
