import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.subtitle}>
        Welcome to marketX! Our goal is to provide you with the most
        intuitive and comprehensive stock market experience on mobile. Stay
        updated with real-time market data, manage your watchlist, and get
        insights all in one place.
      </Text>

      <Text style={styles.sectionTitle}>Features:</Text>
      <View style={styles.listItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.listText}>Real-time stock market data</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.listText}>Customizable watchlist</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.listText}>Themes & language options</Text>
      </View>
      <View style={styles.listItem}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.listText}>Feedback and support center</Text>
      </View>

      <Text style={styles.sectionTitle}>Our Mission:</Text>
      <Text style={styles.subtitle}>
        We aim to make stock trading accessible and engaging for everyone,
        whether you are a beginner or an experienced investor. We focus on
        simplicity, speed, and providing useful insights to help you make
        informed decisions.
      </Text>

      <Text style={styles.footer}>© 2025 marketX. All rights reserved.</Text>
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
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 15,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  bullet: {
    color: "#ff3b30",
    fontSize: 18,
    marginRight: 8,
  },
  listText: {
    color: "#ccc",
    fontSize: 16,
    flex: 1,
  },
  footer: {
    color: "#777",
    fontSize: 14,
    textAlign: "center",
    marginTop: 30,
  },
});
