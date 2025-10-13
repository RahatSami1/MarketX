import React, { useRef, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MarketCard from "./MarketCard";

const { width } = Dimensions.get("window");

export default function MarketSection({ marketData }) {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!marketData || marketData.length === 0) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % marketData.length;
      setCurrentIndex(nextIndex);

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 1500); // scroll every 1 second

    return () => clearInterval(interval);
  }, [currentIndex, marketData]);

  return (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>MARKET</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Market")}>
          <Text style={styles.more}>More</Text>
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <FlatList
        ref={flatListRef}
        horizontal
        data={marketData}
        renderItem={({ item }) => <MarketCard item={item} />}
        keyExtractor={(i) => i.id}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 8, maxHeight: 110 }}
        contentContainerStyle={{ paddingRight: 16 }}
        getItemLayout={(data, index) => ({
          length: Math.round(width * 0.44) + 12, // card width + marginRight
          offset: (Math.round(width * 0.44) + 12) * index,
          index,
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 12 },
  title: { color: "#fff", fontWeight: "700" },
  more: { color: "#6aa8ff", fontSize: 13 },
});
