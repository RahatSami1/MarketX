import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.text}>
        Your privacy is important to us. We respect your personal data and
        are committed to protecting it. This Privacy Policy explains how we
        collect, use, and safeguard your information when you use our app.
      </Text>
      <Text style={styles.text}>
        1. **Information Collection:** We may collect personal information
        such as your name, email, and usage data to improve the app experience.
      </Text>
      <Text style={styles.text}>
        2. **Information Use:** We use your data to personalize content,
        improve features, and provide better support.
      </Text>
      <Text style={styles.text}>
        3. **Data Sharing:** We do not share your personal information with
        third parties without your consent except as required by law.
      </Text>
      <Text style={styles.text}>
        4. **Security:** We implement industry-standard security measures
        to protect your data.
      </Text>
      <Text style={styles.text}>
        5. **Updates:** This policy may be updated from time to time. We
        encourage you to review it periodically.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
  },
  content: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
  },
});
