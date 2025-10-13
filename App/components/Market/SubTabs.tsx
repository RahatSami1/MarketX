import React from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SubTabs({ subTabs, subTab, setSubTab }) {
  return (
    <FlatList
      data={subTabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(t) => `sub-${t}`}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => setSubTab(item)}
          style={item === subTab ? styles.active : styles.inactive}
        >
          <Text style={item === subTab ? styles.activeText : styles.inactiveText}>{item}</Text>
        </TouchableOpacity>
      )}
      style={{ marginTop: 10, marginBottom: 12 }}
      extraData={subTab}
    />
  );
}

const styles = StyleSheet.create({
  inactive: { backgroundColor: "#1f1f1f", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6, marginRight: 8 },
  active: { backgroundColor: "#fff", borderRadius: 8, paddingHorizontal: 12, paddingVertical: 6, marginRight: 8 },
  inactiveText: { color: "#aaa" },
  activeText: { color: "#000", fontWeight: "700" },
});
