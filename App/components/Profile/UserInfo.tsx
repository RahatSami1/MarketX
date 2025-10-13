import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuthStore } from "../../store/auth";

export default function UserInfoScreen() {
  const username = useAuthStore((s) => s.username);
  const email = useAuthStore((s) => s.email);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="person-circle-outline" size={120} color="#ff3b30" />
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.email}>{email}</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#1e1e1e",
    width: "100%",
    borderRadius: 16,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  username: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 15,
  },
  email: {
    color: "#bbb",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#ff3b30",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  editText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
