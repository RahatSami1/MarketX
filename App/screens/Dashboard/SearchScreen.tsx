import React, { useState, useMemo } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import IndexList from "../../components/Market/IndexList";
import useMarketDataStore from "../../store/marketDataStore";
import { useDebounce } from "use-debounce";

export default function SearchScreen() {
  const { data } = useMarketDataStore();
  const [query, setQuery] = useState("");

  // Debounce the search input for better performance
  const [debouncedQuery] = useDebounce(query, 300);

  // Combine all market data
  const combinedData = useMemo(() => {
    if (!data) return [];

    const indices = [
      ...data.indian_indexes.map((i) => ({ ...i, assetType: "index" })),
      ...data.global_indexes.map((i) => ({ ...i, assetType: "index" })),
    ];

    const stocks = [
      ...data.indian_stocks.map((i) => ({ ...i, assetType: "stock" })),
      ...data.us_stocks.map((i) => ({ ...i, assetType: "stock" })),
    ];

    const mutualFunds = data.mutual_funds.map((i) => ({
      ...i,
      assetType: "mutual_fund",
    }));

    return [...indices, ...stocks, ...mutualFunds];
  }, [data]);

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    const q = debouncedQuery.toLowerCase();

    return combinedData
      .filter((item) => item.name.toLowerCase().includes(q))
      .map((item) => ({
        id: item.id.toString(),
        leftTitle: item.name,
        rightValue:
          item.assetType === "mutual_fund"
            ? item.nav
            : item.last_price || item.currency || "",
        rightChange:
          item.price_difference
            ? `${item.price_difference > 0 ? "+" : ""}${item.price_difference} (${item.price_difference_percentage.toFixed(
                2
              )}%)`
            : "",
        assetType: item.assetType,
      }));
  }, [debouncedQuery, combinedData]);

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search indices, stocks, mutual funds..."
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          autoFocus
          placeholderTextColor="#888"
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery("")}>
            <Feather name="x" size={20} color="#888" />
          </TouchableOpacity>
        )}
      </View>

      {/* Search Results */}
      {query.trim() === "" ? (
        <Text style={styles.infoText}>
          Type something to search indices, stocks or mutual funds
        </Text>
      ) : filteredData.length === 0 ? (
        <Text style={styles.noData}>No results found</Text>
      ) : (
    <FlatList
  data={filteredData}
  keyExtractor={(item, index) => `${item.assetType}-${item.id}-${index}`} // unique key
  renderItem={({ item }) => <IndexList item={item} />}
  contentContainerStyle={{
    paddingBottom: Platform.OS === "ios" ? 140 : 120,
  }}
/>

      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
    paddingTop: Platform.OS === "ios" ? 44 : 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 12,
    fontSize: 16,
  },
  noData: { textAlign: "center", color: "#888", marginTop: 20 },
  infoText: { textAlign: "center", color: "#888", marginTop: 20 },
});
