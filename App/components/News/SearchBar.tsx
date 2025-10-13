import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Search news..."
      placeholderTextColor="#888"
      value={value}
      onChangeText={onChange}
    />
    <Text style={styles.icon}>🔍</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { marginHorizontal:14, marginBottom: 16, position: "relative" },
  input: {
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingRight: 50,
    paddingVertical: 12,
    fontSize: 16,
    color: "#FFF",
    borderWidth: 1,
    borderColor: "#333",
  },
  icon: { position: "absolute", right: 16, top: 12, fontSize: 18 },
});

export default SearchBar;
