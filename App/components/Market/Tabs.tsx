import React from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";

export default function Tabs({ mainTabs, mainTab, setMainTab }) {
  return (
    <FlatList
      data={mainTabs}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(t) => `main-${t}`}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => setMainTab(item)} style={styles.tab}>
          <Text style={[styles.text, mainTab === item && styles.activeText]}>
            {item}
          </Text>
          {mainTab === item && <View style={styles.underline} />}
        </TouchableOpacity>
      )}
      style={{ marginTop: 12 }}
      contentContainerStyle={{ paddingBottom: 4 }}
      extraData={mainTab}
    />
  );
}

const styles = StyleSheet.create({
  tab: { marginRight: 22, alignItems: "center" },
  text: { color: "#888", fontSize: 14 },
  activeText: { color: "#fff", fontWeight: "700" },
  underline: {
    height: 2,
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 6,
  },
});
