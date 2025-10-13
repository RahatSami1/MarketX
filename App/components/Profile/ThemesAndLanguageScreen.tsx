import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ThemesAndLanguageScreen() {
  const [theme, setTheme] = useState("Dark");
  const [language, setLanguage] = useState("English");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Themes & Language</Text>

      {/* Theme Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Theme</Text>
        <TouchableOpacity
          style={[
            styles.optionButton,
            theme === "Light" && styles.selectedOption,
          ]}
          onPress={() => setTheme("Light")}
        >
          <Text style={styles.optionText}>Light</Text>
          {theme === "Light" && (
            <Ionicons name="checkmark" size={20} color="#fff" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            theme === "Dark" && styles.selectedOption,
          ]}
          onPress={() => setTheme("Dark")}
        >
          <Text style={styles.optionText}>Dark</Text>
          {theme === "Dark" && (
            <Ionicons name="checkmark" size={20} color="#fff" />
          )}
        </TouchableOpacity>
      </View>

      {/* Language Selection */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Language</Text>
        <TouchableOpacity
          style={[
            styles.optionButton,
            language === "English" && styles.selectedOption,
          ]}
          onPress={() => setLanguage("English")}
        >
          <Text style={styles.optionText}>English</Text>
          {language === "English" && (
            <Ionicons name="checkmark" size={20} color="#fff" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            language === "Spanish" && styles.selectedOption,
          ]}
          onPress={() => setLanguage("Spanish")}
        >
          <Text style={styles.optionText}>Spanish</Text>
          {language === "Spanish" && (
            <Ionicons name="checkmark" size={20} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#bbb",
    marginBottom: 15,
  },
  optionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1a1a1a",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  selectedOption: {
    borderColor: "#ff3b30",
    borderWidth: 2,
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
  },
});
