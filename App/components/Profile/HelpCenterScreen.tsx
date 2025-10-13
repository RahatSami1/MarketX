import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HelpCenterScreen() {
  const openEmail = () => {
    Linking.openURL("mailto:care@baroncapitals.com");
  };

  const openWebsite = () => {
    Linking.openURL("https://baroncapitals.com/contact-us/");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Help Center</Text>

        <View style={styles.card}>
          <Text style={styles.text}>
            Welcome to the Support Center. Here you can find help articles, 
            frequently asked questions, and ways to contact our support team.
          </Text>

          <Text style={styles.subTitle}>FAQs</Text>
          <Text style={styles.text}>
            Check out our FAQs on the website for quick answers to common questions.
          </Text>

          <TouchableOpacity style={styles.button} onPress={openWebsite}>
            <Ionicons name="link-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>Visit Support Website</Text>
          </TouchableOpacity>

          <Text style={styles.subTitle}>Contact Us</Text>
          <Text style={styles.text}>
            For further assistance, you can email our support team directly.
          </Text>

          <TouchableOpacity style={styles.button} onPress={openEmail}>
            <Ionicons name="mail-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>Email Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  subTitle: {
    color: "#ff3b30",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff3b30",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});
