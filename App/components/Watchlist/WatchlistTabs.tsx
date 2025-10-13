import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

type TabType = "all" | "stocks" | "mutual_funds" | "indexes";

interface Props {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  watchlist: any;
}

const tabs = [
  { id: "all", label: "All" },
  { id: "stocks", label: "Stocks" },
  { id: "mutual_funds", label: "Mutual Funds" },
  { id: "indexes", label: "Indexes" },
];

export default function WatchlistTabs({ activeTab, setActiveTab, watchlist }: Props) {
  const getTotalCount = () =>
    watchlist.stocks.length + watchlist.mutual_funds.length + watchlist.indexes.length;

  return (
    <View style={styles.tabContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabContent}>
        {tabs.map((tab) => {
          const count =
            tab.id === "all"
              ? getTotalCount()
              : tab.id === "stocks"
              ? watchlist.stocks.length
              : tab.id === "mutual_funds"
              ? watchlist.mutual_funds.length
              : watchlist.indexes.length;

          return (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tab, activeTab === tab.id && styles.activeTab]}
              onPress={() => setActiveTab(tab.id as TabType)}
            >
              <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>{tab.label}</Text>
              {count > 0 && (
                <View style={[styles.tabBadge, activeTab === tab.id && styles.activeTabBadge]}>
                  <Text style={[styles.tabBadgeText, activeTab === tab.id && styles.activeTabBadgeText]}>{count}</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: { height: 60, marginBottom: 8 },
  tabContent: {  paddingVertical: 8, alignItems: "center" },
  tab: { flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#1E1E1E", paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, marginRight: 12, borderWidth: 1, borderColor: "#333" },
  activeTab: { backgroundColor: "#0A84FF", borderColor: "#0A84FF" },
  tabText: { color: "#888", fontSize: 14, fontWeight: "500", marginRight: 6 },
  activeTabText: { color: "#FFF", fontWeight: "600" },
  tabBadge: { backgroundColor: "#333", paddingHorizontal: 6, paddingVertical: 2, borderRadius: 10, minWidth: 18, alignItems: "center" },
  activeTabBadge: { backgroundColor: "rgba(255,255,255,0.2)" },
  tabBadgeText: { color: "#FFF", fontSize: 12, fontWeight: "600" },
  activeTabBadgeText: { color: "#FFF" },
});
