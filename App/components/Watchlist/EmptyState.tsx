import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  subtitle: string;
}

export default function EmptyState({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", paddingVertical: 80, paddingHorizontal: 20 },
  title: { color: "#FFF", fontSize: 20, fontWeight: "bold", marginBottom: 8, textAlign: "center" },
  subtitle: { color: "#888", fontSize: 16, textAlign: "center", lineHeight: 22, maxWidth: 280 },
});
