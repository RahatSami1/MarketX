import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function MarketCard({ item }) {
  const isNeg = item.change.trim().startsWith("-");

  // Generate random market-like numbers
  const high = (Math.random() * 1000 + 100).toFixed(2);
  const low = (Math.random() * 900 + 50).toFixed(2);
  const volume = Math.floor(Math.random() * 1000000) + 10000;
  const marketCap = (Math.random() * 500).toFixed(2) + "B";

  // Helper to randomly assign green/red
  const randomColor = () => (Math.random() > 0.5 ? styles.positive : styles.negative);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.title}</Text>
      {/* <Text style={styles.value}>{item.value}</Text> */}
      <Text style={[styles.change, isNeg ? styles.negative : styles.positive]}>
        {item.change}
      </Text>

      {/* Extra random data */}
      <View style={styles.row}>
        <Text style={[styles.extra, randomColor()]}>H: {high}</Text>
        <Text style={[styles.extra, randomColor()]}>L: {low}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.extra, randomColor()]}>Vol: {volume}</Text>
        <Text style={[styles.extra, randomColor()]}>MC: {marketCap}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: Math.round(width * 0.44),
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
    padding: 12,
    marginRight: 12,
  },
  name: { color: "#ddd", fontWeight: "700" },
  value: { color: "#fff", marginTop: 6, fontWeight: "600" },
  change: { marginTop: 6, fontSize: 12 },
  positive: { color: "#0f0" },
  negative: { color: "#ff4d4d" },
  extra: { marginTop: 6, fontSize: 11, fontWeight: "500" },
  row: { flexDirection: "row", justifyContent: "space-between" },
});
