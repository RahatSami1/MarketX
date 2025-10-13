import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App"; // adjust path

type DetailScreenProp = StackNavigationProp<RootStackParamList, "Detail">;

export default function IndexCard({ item }: { item: any }) {
  const navigation = useNavigation<DetailScreenProp>();

  const leftTitle = item.leftTitle || "Unknown";

  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      setDateTime(formatted);
    };

    updateDateTime(); 
    const interval = setInterval(updateDateTime, 60000); 

    return () => clearInterval(interval);
  }, []);

  const leftSubtitle = item.leftSubtitle || dateTime;

  const rightValue =
    item.rightValue ||
    (Math.random() * (5000 - 100) + 100).toFixed(2); 

  const rightChange =
    item.rightChange ||
    `${Math.random() > 0.5 ? "+" : "-"}${(Math.random() * (10 - 1) + 1).toFixed(
      2
    )}%`; 

  const isNegative = rightChange.trim().startsWith("-");

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          item: { ...item, leftTitle, leftSubtitle, rightValue, rightChange },
          assetType: item.assetType,
        })
      }
      activeOpacity={0.7}
    >
      <View style={styles.card}>
        {/* Logo Circle */}
        <View style={styles.logoCircle}>
          <Text style={styles.logoInitial}>
            {(leftTitle || "").slice(0, 2).toUpperCase()}
          </Text>
        </View>

        {/* Left Content */}
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{leftTitle}</Text>
          {leftSubtitle && <Text style={styles.subtitle}>{leftSubtitle}</Text>}
        </View>

        {/* Right Content */}
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.value}>{rightValue}</Text>
          <Text
            style={[
              styles.change,
              isNegative ? styles.negative : styles.positive,
            ]}
          >
            {isNegative ? "▼ " : "▲ "} {rightChange}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  logoCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#0b0b0b",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  logoInitial: { color: "#fff", fontWeight: "700" },
  name: { color: "#fff", fontWeight: "700" },
  subtitle: { color: "#888", fontSize: 12 },
  value: { color: "#fff", fontWeight: "700" },
  change: { fontSize: 12, marginTop: 6 },
  positive: { color: "#0f0" },
  negative: { color: "#ff4d4d" },
});
