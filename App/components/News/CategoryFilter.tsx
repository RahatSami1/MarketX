import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Category } from "../NewsScreen";

interface Props {
  categories: Category[];
  selectedCategory: string;
  onSelect: (id: string) => void;
}

const CategoryFilter: React.FC<Props> = ({ categories, selectedCategory, onSelect }) => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    contentContainerStyle={styles.content}
  >
    {categories.map((cat) => (
      <TouchableOpacity
        key={cat.id}
        style={[
          styles.button,
          selectedCategory === cat.id && { backgroundColor: cat.color },
        ]}
        onPress={() => onSelect(cat.id)}
      >
        <Text
          style={[
            styles.text,
            selectedCategory === cat.id && styles.textActive,
          ]}
        >
          {cat.label}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  content: { paddingHorizontal: 20 },
  button: {
    backgroundColor: "#1E1E1E",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#333",
  },
  text: { color: "#888", fontSize: 14, fontWeight: "500" },
  textActive: { color: "#FFF", fontWeight: "600" },
});

export default CategoryFilter;
