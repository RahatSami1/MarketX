import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native";

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState("");

  const submitFeedback = () => {
    if (feedback.trim() === "") {
      Alert.alert("Error", "Please enter your feedback before submitting.");
      return;
    }
    Alert.alert("Thank you!", "Your feedback has been submitted.");
    setFeedback("");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Feedback</Text>
      <Text style={styles.subtitle}>
        We value your feedback. Please let us know your thoughts or suggestions
        to improve our app.
      </Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Type your feedback here..."
        placeholderTextColor="#777"
        value={feedback}
        onChangeText={setFeedback}
      />
      <TouchableOpacity style={styles.button} onPress={submitFeedback}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 22,
  },
  input: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff3b30",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
