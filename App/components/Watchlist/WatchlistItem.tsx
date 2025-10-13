import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  item: any;
  type: "stock" | "mutual_fund" | "index";
  onRemove: (type: "stock" | "mutual_fund" | "index", id: number) => void;
}

type NavigationProp = StackNavigationProp<RootStackParamList, "Detail">;

export default function WatchlistItem({ item, type, onRemove }: Props) {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate("Detail", { item, assetType: type });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handlePress} activeOpacity={0.8}>
      <View style={styles.itemContent}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemSymbol}>
            {type === "mutual_fund" ? "Mutual Fund" : item.symbol}
          </Text>
        </View>
        <View style={styles.itemRight}>
          {type !== "index" && (
            <Text style={styles.itemPrice}>
              ${type === "stock" ? item.last_price : item.nav}
            </Text>
          )}
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => onRemove(type, item.id)}
          >
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#333",
    padding: 16,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemInfo: { flex: 1, marginRight: 12 },
  itemName: { color: "#FFF", fontSize: 16, fontWeight: "600", marginBottom: 2 },
  itemSymbol: { color: "#888", fontSize: 14 },
  itemRight: { alignItems: "flex-end" },
  itemPrice: {
    color: "#30D158",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  removeButton: {
    backgroundColor: "#FF453A",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  removeButtonText: { color: "#FFF", fontSize: 12, fontWeight: "600" },
});
