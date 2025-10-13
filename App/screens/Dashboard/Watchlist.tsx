import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
   Platform,
} from "react-native";
import { useWatchlistStore } from "../../store/watchlistStore";
import Header from "../../components/Common/Header";
import WatchlistTabs from "../../components/Watchlist/WatchlistTabs";
import WatchlistSection from "../../components/Watchlist/WatchlistSection";
import EmptyState from "../../components/Watchlist/EmptyState";

type TabType = "all" | "stocks" | "mutual_funds" | "indexes";

export default function WatchlistScreen() {
  const { watchlist, loading, error, fetchWatchlist, removeAsset } =
    useWatchlistStore();
  const [activeTab, setActiveTab] = useState<TabType>("all");

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const handleRemove = (
    type: "stock" | "mutual_fund" | "index",
    id: number
  ) => {
    removeAsset(type, id);
  };

  const getTotalCount = () =>
    watchlist.stocks.length +
    watchlist.mutual_funds.length +
    watchlist.indexes.length;

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0A84FF" />
        <Text style={styles.loadingText}>Loading watchlist...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Something went wrong</Text>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchWatchlist}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "all":
        return (
          <>
            <WatchlistSection
              title="Stocks"
              data={watchlist.stocks}
              type="stock"
              onRemove={handleRemove}
            />
            <WatchlistSection
              title="Mutual Funds"
              data={watchlist.mutual_funds}
              type="mutual_fund"
              onRemove={handleRemove}
            />
            <WatchlistSection
              title="Indexes"
              data={watchlist.indexes}
              type="index"
              onRemove={handleRemove}
            />
            {getTotalCount() === 0 && (
              <EmptyState
                title="Your Watchlist is Empty"
                subtitle="Add stocks, mutual funds, or indexes to get started"
              />
            )}
          </>
        );
      case "stocks":
        return (
          <WatchlistSection
            title="Stocks"
            data={watchlist.stocks}
            type="stock"
            onRemove={handleRemove}
            emptyTitle="No Stocks"
            emptySubtitle="No stocks in watchlist"
          />
        );
      case "mutual_funds":
        return (
          <WatchlistSection
            title="Mutual Funds"
            data={watchlist.mutual_funds}
            type="mutual_fund"
            onRemove={handleRemove}
            emptyTitle="No Mutual Funds"
            emptySubtitle="No mutual funds in watchlist"
          />
        );
      case "indexes":
        return (
          <WatchlistSection
            title="Indexes"
            data={watchlist.indexes}
            type="index"
            onRemove={handleRemove}
            emptyTitle="No Indexes"
            emptySubtitle="No indexes in watchlist"
          />
        );
    }
  };

  return (
    <View style={styles.container}>
        <Header title="Watchlist" />
     
      <WatchlistTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        watchlist={watchlist}
      />
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {renderTabContent()}
      </ScrollView>
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
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  loadingText: { color: "#888", marginTop: 10, fontSize: 16 },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    padding: 20,
  },
  errorTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  error: {
    color: "#FF453A",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: "#0A84FF",
    paddingVertical: 12,
    borderRadius: 12,
  },
  retryButtonText: { color: "#FFF", fontSize: 16, fontWeight: "600" },
  header: { padding: 20, paddingBottom: 16, paddingTop: 60 },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 4,
  },
  headerSubtitle: { fontSize: 16, color: "#888" },
  content: { flex: 1 },
  contentContainer: {  paddingBottom: 20 ,},
});
