import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function TermsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Terms & Conditions</Text>

        <View style={styles.card}>
          <Text style={styles.text}>
            Welcome to our app. By using this app, you agree to the following
            terms and conditions. Please read them carefully before proceeding.
          </Text>

          <Text style={styles.subTitle}>1. User Responsibilities</Text>
          <Text style={styles.text}>
            Users must ensure that all information provided is accurate and
            that they use the app in compliance with all applicable laws and
            regulations.
          </Text>

          <Text style={styles.subTitle}>2. Prohibited Activities</Text>
          <Text style={styles.text}>
            Users must not use the app for any illegal purposes, or to transmit
            any harmful or offensive content.
          </Text>

          <Text style={styles.subTitle}>3. Intellectual Property</Text>
          <Text style={styles.text}>
            All content, logos, and trademarks are owned by the app creators
            and may not be used without permission.
          </Text>

          <Text style={styles.subTitle}>4. Limitation of Liability</Text>
          <Text style={styles.text}>
            We are not responsible for any damages resulting from the use of
            this app. Use it at your own risk.
          </Text>

          <Text style={styles.subTitle}>5. Updates</Text>
          <Text style={styles.text}>
            Terms and conditions may be updated from time to time. Continued
            use of the app constitutes acceptance of any changes.
          </Text>
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
});
