import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function DisclaimerScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Disclaimer</Text>
      <Text style={styles.text}>
        The information provided by this app is for general informational
        purposes only. While we strive to keep the information accurate and
        up to date, we make no representations or warranties of any kind,
        express or implied, about the completeness, accuracy, reliability, or
        availability with respect to the app or the information, products,
        services, or related graphics contained in the app for any purpose.
      </Text>
      <Text style={styles.text}>
        Any reliance you place on such information is strictly at your own
        risk. We are not responsible for any losses or damages, including
        direct, indirect, incidental, or consequential losses, that may
        occur from using this app.
      </Text>
      <Text style={styles.text}>
        The app may contain links to other resources. We are not responsible
        for the content or accuracy of external websites.
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
