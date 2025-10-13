import React, { useCallback, useMemo, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  Platform,
} from "react-native";
import useMarketDataStore from "../../store/marketDataStore";
import Header from "../../components/Common/Header";
import SearchBar from "../../components/Common/SearchBar";
import Tabs from "../../components/Market/Tabs";
import SubTabs from "../../components/Market/SubTabs";
import IndexList from "../../components/Market/IndexList";

export default function MarketScreen() {
  const mainTabs = ["Indices", "Indian Stocks", "US Stocks", "Mutual Funds"];
  const subTabs = ["Indian Indices", "Global Indices"];

  const [mainTab, setMainTab] = useState("Indices");
  const [subTab, setSubTab] = useState("Indian Indices");

  const { data, loading, error, fetchMarketData, loadFromStorage } =
    useMarketDataStore();

  useEffect(() => {
    loadFromStorage().then(() => fetchMarketData());
  }, []);

  useEffect(() => {
    if (mainTab === "Indices" && !subTabs.includes(subTab)) {
      setSubTab("Indian Indices");
    }
  }, [mainTab, subTab]);

  const displayData = useMemo(() => {
    if (!data) return [];
    if (mainTab === "Indices") {
      if (subTab === "Indian Indices") {
        return data.indian_indexes.map((i) => ({
          id: i.id.toString(),
          leftTitle: i.name,
          rightValue: i.currency,
          rightChange: "",
           assetType: "index",
        }));
      }
      if (subTab === "Global Indices") {
        return data.global_indexes.map((i) => ({
          id: i.id.toString(),
          leftTitle: i.name,
          rightValue: i.currency,
          rightChange: "",
            assetType: "index",
        }));
      }
      return [];
    }
    if (mainTab === "Indian Stocks") {
      return data.indian_stocks.map((i) => ({
        id: i.id.toString(),
        leftTitle: i.name,
        rightValue: i.last_price,
        rightChange: `${i.price_difference > 0 ? "+" : ""}${
          i.price_difference
        } (${i.price_difference_percentage.toFixed(2)}%)`,
           assetType: "stock",
      }));
    }
    if (mainTab === "US Stocks") {
      return data.us_stocks.map((i) => ({
        id: i.id.toString(),
        leftTitle: i.name,
        rightValue: i.last_price,
        rightChange: `${i.price_difference > 0 ? "+" : ""}${
          i.price_difference
        } (${i.price_difference_percentage.toFixed(2)}%)`,
           assetType: "stock",
      }));
    }
    if (mainTab === "Mutual Funds") {
      return data.mutual_funds.map((i) => ({
        id: i.id.toString(),
        leftTitle: i.name,
        rightValue: i.nav,
        rightChange: "",
         assetType: "mutual_fund",
      }));
    }
    return [];
  }, [mainTab, subTab, data]);

  const marketData = useMemo(() => {
    if (!data) return [];
    return [
      ...data.indian_indexes.map((i) => ({
        id: `indian-${i.id}`,
        title: i.name,
        value: i.symbol,
        change: "",
      })),
      ...data.global_indexes.map((i) => ({
        id: `global-${i.id}`,
        title: i.name,
        value: i.symbol,
        change: "",
      })),
    ];
  }, [data]);

  if (loading && !data) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  if (error && !data) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
     <Header title="Market" />
      <SearchBar />

      <FlatList
        data={displayData}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <IndexList item={item} />}
        ListHeaderComponent={
          <View>
            <Tabs
              mainTabs={mainTabs}
              mainTab={mainTab}
              setMainTab={setMainTab}
            />
            {mainTab === "Indices" && (
              <SubTabs
                subTabs={subTabs}
                subTab={subTab}
                setSubTab={setSubTab}
              />
            )}
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.noData}>No data available</Text>
        }
        refreshing={false}
        onRefresh={fetchMarketData}
        ListFooterComponent={<View style={{ height: 24 }} />}
        contentContainerStyle={{
          paddingBottom: Platform.OS === "ios" ? 140 : 120,
        }}
        key={`${mainTab}-${subTab}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
    paddingTop: Platform.OS === "ios" ? 44 : 20,
    paddingHorizontal: 16,
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  noData: { textAlign: "center", color: "#8e8e8e", padding: 30 },
});
