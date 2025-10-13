import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function Preference() {
  // Example preference options
  const preferences = [
    { icon: "notifications-outline", label: "Notification Settings" },
    { icon: "wifi-outline", label: "Data Usage" },
    { icon: "brush-outline", label: "App Theme" },
    { icon: "language-outline", label: "Language" },
    { icon: "shield-checkmark-outline", label: "Security" },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Preferences</Text>
      <View style={styles.section}>
        {preferences.map((pref, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => {}}>
            <Ionicons name={pref.icon} size={22} color="#fff" />
            <Text style={styles.itemText}>{pref.label}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={22} color="#bbb" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomColor: "#333",
    borderBottomWidth: 1,
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
  },
});
