// screens/HomeScreen.tsx
import React, { useCallback, useMemo, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";

import Header from "./../../components/Header";
import SearchBar from "../../components/SearchBar";
import ListHeader from "./../../components/ListHeader";
import DataRow from "./../../components/DataRow";

import {
  MarketItem,
  IndexItem,
  initialMarketData,
  initialIndicesData,
  initialIndianStocks,
  initialUSStocks,
  initialMutualFunds,
  mainTabs,
  subTabs,
  uid,
} from "./../../data/dummyData";

type DisplayItem = {
  id: string;
  leftTitle: string;
  leftSubtitle?: string;
  rightValue: string;
  rightChange: string;
};

export default function HomeScreen() {

  const [mainTab, setMainTab] = useState<string>("Indices");
  const [subTab, setSubTab] = useState<string>("Indian Indices");

  // Loading flags per list
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Dummy initial data (JSON)
  const [marketData, setMarketData] = useState<MarketItem[]>(() => initialMarketData);

  const [indicesData, setIndicesData] = useState<Record<string, IndexItem[]>>(
    () => initialIndicesData
  );

  const [indianStocks, setIndianStocks] = useState<IndexItem[]>(() => initialIndianStocks);

  const [usStocks, setUSStocks] = useState<IndexItem[]>(() => initialUSStocks);

  const [mutualFunds, setMutualFunds] = useState<IndexItem[]>(() => initialMutualFunds);

  // Fix: Reset subTab when mainTab changes to prevent invalid combinations
  useEffect(() => {
    if (mainTab === "Indices") {
      // Ensure subTab is valid for Indices
      if (!subTabs.includes(subTab)) {
        setSubTab("Indian Indices");
      }
    }
  }, [mainTab, subTab]);

  // Transform datasets to a consistent display structure for FlatList
  const displayData = useMemo<DisplayItem[]>(() => {
    if (mainTab === "Indices") {
      const arr = indicesData[subTab] ?? [];
      return arr.map((i) => ({
        id: i.id,
        leftTitle: i.name,
        leftSubtitle: i.time,
        rightValue: i.value,
        rightChange: i.change,
      }));
    } else if (mainTab === "Indian Stocks") {
      return indianStocks.map((i) => ({
        id: i.id,
        leftTitle: i.name,
        rightValue: i.value,
        rightChange: i.change,
      }));
    } else if (mainTab === "US Stocks") {
      return usStocks.map((i) => ({
        id: i.id,
        leftTitle: i.name,
        rightValue: i.value,
        rightChange: i.change,
      }));
    } else {
      // Mutual Funds
      return mutualFunds.map((i) => ({
        id: i.id,
        leftTitle: i.name,
        rightValue: i.value,
        rightChange: i.change,
      }));
    }
  }, [mainTab, subTab, indicesData, indianStocks, usStocks, mutualFunds]);

  // Generate more dummy items (for pagination)
  const generateMore = (count = 8): DisplayItem[] => {
    const newItems: DisplayItem[] = [];
    for (let i = 0; i < count; i++) {
      newItems.push({
        id: uid("more"),
        leftTitle: `${
          mainTab === "Indices" ? subTab.split(" ")[0] : mainTab
        } Item ${Math.floor(Math.random() * 1000)}`,
        leftSubtitle: mainTab === "Indices" ? "Aug 07, 16:10" : undefined,
        rightValue: `${Math.floor(Math.random() * 100000).toLocaleString()}`,
        rightChange: `${Math.random() > 0.5 ? "+" : "-"}${(
          Math.random() * 200
        ).toFixed(2)} (${(Math.random() * 3).toFixed(2)}%)`,
      });
    }
    return newItems;
  };

  // Append more items safely to the proper dataset
  const loadMore = useCallback(() => {
    if (loading) return;
    setLoading(true);
    // simulate network/pagination delay
    setTimeout(() => {
      if (mainTab === "Indices") {
        const more = generateMore(6).map((d) => ({
          id: uid("ii"),
          name: d.leftTitle,
          value: d.rightValue,
          change: d.rightChange,
          time: d.leftSubtitle,
        }));
        setIndicesData((prev) => ({
          ...prev,
          [subTab]: [...(prev[subTab] ?? []), ...more],
        }));
      } else if (mainTab === "Indian Stocks") {
        const more = generateMore(6).map((d) => ({
          id: uid("s"),
          name: d.leftTitle,
          value: d.rightValue,
          change: d.rightChange,
        }));
        setIndianStocks((prev) => [...prev, ...more]);
      } else if (mainTab === "US Stocks") {
        const more = generateMore(6).map((d) => ({
          id: uid("u"),
          name: d.leftTitle,
          value: d.rightValue,
          change: d.rightChange,
        }));
        setUSStocks((prev) => [...prev, ...more]);
      } else {
        const more = generateMore(6).map((d) => ({
          id: uid("mf"),
          name: d.leftTitle,
          value: d.rightValue,
          change: d.rightChange,
        }));
        setMutualFunds((prev) => [...prev, ...more]);
      }
      setLoading(false);
    }, 800);
  }, [mainTab, subTab, loading]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      // simple refresh behavior: truncate lists to initial small set
      setIndicesData((prev) => {
        // keep first two of each
        const newObj: Record<string, IndexItem[]> = {};
        Object.keys(prev).forEach((k) => {
          newObj[k] = prev[k].slice(0, 3);
        });
        return newObj;
      });
      setIndianStocks((prev) => prev.slice(0, 3));
      setUSStocks((prev) => prev.slice(0, 2));
      setMutualFunds((prev) => prev.slice(0, 1));
      setRefreshing(false);
    }, 800);
  }, []);

  // Fix: Handle main tab change with proper state reset
  const handleMainTabChange = useCallback((newTab: string) => {
    setMainTab(newTab);
    // Reset subTab to default when switching to Indices
    if (newTab === "Indices") {
      setSubTab("Indian Indices");
    }
    // Cancel any ongoing loading to prevent state conflicts
    setLoading(false);
  }, []);

  // Fix: Handle sub tab change with loading state check
  const handleSubTabChange = useCallback(
    (newSubTab: string) => {
      // Only change if not currently loading to prevent styling breaks
      if (!loading) {
        setSubTab(newSubTab);
      }
    },
    [loading]
  );

  // Render a single row
  const renderRow = useCallback(({ item }: { item: DisplayItem }) => (
    <DataRow item={item} />
  ), []);

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />

      {/* Main content list (virtualized) with header components */}
      <FlatList
        data={displayData}
        keyExtractor={(i) => i.id}
        renderItem={renderRow}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <ListHeader
            marketData={marketData}
            mainTabs={mainTabs}
            mainTab={mainTab}
            subTabs={subTabs}
            subTab={subTab}
            onMainTabChange={handleMainTabChange}
            onSubTabChange={handleSubTabChange}
          />
        }
        ListEmptyComponent={
          <View style={{ padding: 30 }}>
            <Text style={styles.noData}>No data available</Text>
          </View>
        }
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListFooterComponent={
          loading ? (
            <View style={{ padding: 12 }}>
              <ActivityIndicator size="small" color="#999" />
            </View>
          ) : (
            <View style={{ height: 24 }} />
          )
        }
        contentContainerStyle={{
          paddingBottom: Platform.OS === "ios" ? 140 : 120,
        }}
        // Fix: Add key to force re-render when tab changes
        key={`${mainTab}-${subTab}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: Platform.OS === "ios" ? 44 : 20,
    paddingHorizontal: 16,
  },
  noData: { textAlign: "center", color: "#8e8e8e" },
});