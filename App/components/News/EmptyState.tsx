import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  searchQuery: string;
}

const EmptyState: React.FC<Props> = ({ searchQuery }) => (
  <View style={styles.container}>
    <Text style={styles.emoji}>🔍</Text>
    <Text style={styles.text}>
      {searchQuery ? "No news found matching your search" : "No news available at the moment"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 40, minHeight: 300 },
  emoji: { fontSize: 64, marginBottom: 16 },
  text: { color: "#888", fontSize: 16, textAlign: "center", lineHeight: 22 },
});

export default EmptyState;
