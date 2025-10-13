import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  message: string;
  onRetry: () => void;
}

const ErrorState: React.FC<Props> = ({ message, onRetry }) => (
  <View style={styles.container}>
    <Text style={styles.emoji}>📰</Text>
    <Text style={styles.text}>{message}</Text>
    <TouchableOpacity style={styles.button} onPress={onRetry}>
      <Text style={styles.buttonText}>Retry</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  emoji: { fontSize: 64, marginBottom: 16 },
  text: { color: "#FF453A", fontSize: 16, textAlign: "center", marginBottom: 20 },
  button: { backgroundColor: "#0A84FF", paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "600" },
});

export default ErrorState;
