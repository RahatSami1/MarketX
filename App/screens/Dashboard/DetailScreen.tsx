import React, { useMemo,useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { WebView } from "react-native-webview";
import { useWatchlistStore } from "../../store/watchlistStore";
import { useNavigation } from "@react-navigation/native"; 
type DetailRouteProp = RouteProp<RootStackParamList, "Detail">;

export default function DetailScreen({ route }: { route: DetailRouteProp }) {
  const { item, assetType } = route.params; // assetType: "stock" | "mutual_fund" | "index"
  const addAsset = useWatchlistStore((state) => state.addAsset);
  const watchlist = useWatchlistStore((state) => state.watchlist);
  const isNegative = item.rightChange?.trim().startsWith("-");
const navigation = useNavigation();
  // Check if already in watchlist
  const isInWatchlist = useMemo(() => {
    if (assetType === "stock") return watchlist.stocks.some((s) => s.id === item.id);
    if (assetType === "mutual_fund") return watchlist.mutual_funds.some((m) => m.id === item.id);
    if (assetType === "index") return watchlist.indexes.some((i) => i.id === item.id);
    return false;

  }, [watchlist, item.id, assetType]);
const [added, setAdded] = useState(isInWatchlist);
const handleAddToWatchlist = async () => {
  try {
    if (!assetType || !item.id) {
     
      return;
    }
    if (isInWatchlist) {
      return;
    }
    await addAsset(assetType, item.id);
     setAdded(true);
  } catch (err: any) {
    console.error(err);
  }
};
const tradingViewHTML = `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin:0;padding:0;background-color:#000;">
    <div class="tradingview-widget-container">
      <div id="tradingview_chart"></div>
    </div>
    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
    <script type="text/javascript">
      new TradingView.widget({
        container_id: "tradingview_chart",
        width: 400,
        height: 390,
        symbol: "NASDAQ:AAPL",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#000000",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true
      });
    </script>
  </body>
</html>
`;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Stock Header */}
      <View style={styles.header}>
        <View
          style={[
            styles.logoCircle,
            { borderWidth: 2, borderColor: isNegative ? "#ff4d4d" : "#0f0" },
          ]}
        >
          <Text style={styles.logoInitial}>
            {(item.leftTitle || item.name || "").slice(0, 2).toUpperCase()}
          </Text>
        </View>
        <View>
          <Text style={styles.stockTitle}>{item.leftTitle || item.name}</Text>
          <Text style={styles.stockPrice}>
            {item.rightValue || item.nav || "$27.50"}{" "}
            {item.rightChange && (
              <Text
                style={[
                  styles.stockChange,
                  isNegative ? styles.negative : styles.positive,
                ]}
              >
                {item.rightChange}
              </Text>
            )}
          </Text>
        </View>
      </View>

      {/* TradingView Chart */}
      <View style={styles.chartBox}>
        <WebView
          originWhitelist={["*"]}
          source={{ html: tradingViewHTML }}
          style={{ flex: 1 }}
          javaScriptEnabled
          domStorageEnabled
          scalesPageToFit
        />
      </View>
 <TouchableOpacity
        style={styles.fullScreenBtn}
        onPress={() => navigation.navigate("Chart")} // just navigate, no params
      >
        <Text style={styles.fullScreenText}>Full Screen</Text>
      </TouchableOpacity>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        {["NSE", "1D", "1W", "1M", "1Y", "5Y", "ALL"].map((tab, i) => (
          <TouchableOpacity key={i} style={styles.tab}>
            <Text style={i === 0 ? styles.activeTab : styles.inactiveTab}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.rangeRow}>
          <Text style={styles.rangeText}>Today's Low{"\n"}$18.50</Text>
          <View style={styles.rangeBarContainer}>
            <View style={styles.rangeBarGreen} />
            <View style={styles.marker} />
          </View>
          <Text style={styles.rangeText}>Today's High{"\n"}$27.50</Text>
        </View>

        <View style={styles.rangeRow}>
          <Text style={styles.rangeText}>52 week's Low{"\n"}$27.50</Text>
          <View style={styles.rangeBarContainer}>
            <View style={styles.rangeBarRed} />
            <View style={[styles.marker, { backgroundColor: "#ff4d4d" }]} />
          </View>
          <Text style={styles.rangeText}>Today's High{"\n"}$65.50</Text>
        </View>
      </View>

      {/* Add to Watch List Button */}
     <TouchableOpacity
        style={[
          styles.watchlistBtn,
          added && { backgroundColor: "#888" }, // change color when added
        ]}
        onPress={handleAddToWatchlist}
      >
        <Text style={styles.watchlistText}>
          {added ? "Added to Watchlist" : "Add to Watch List"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  header: { flexDirection: "row", alignItems: "center", margin: 16 },
  logoCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1f1f1f",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoInitial: { color: "#fff", fontWeight: "800", fontSize: 20 },
  stockTitle: { fontSize: 20, fontWeight: "700", color: "#fff" },
  stockPrice: { fontSize: 18, fontWeight: "600", color: "#fff" },
  stockChange: { fontSize: 14, fontWeight: "600" },
  positive: { color: "#0f0" },
  negative: { color: "#ff4d4d" },
  chartBox: {
    height: 300,
    width: 320,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#111",
  },
   fullScreenBtn: {
    backgroundColor: "#1f1f1f",
    marginHorizontal: 16,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0f0",
  },
  fullScreenText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f0",
  },
  tabsRow: { flexDirection: "row", justifyContent: "space-around", marginVertical: 10 },
  tab: { paddingVertical: 6 },
  activeTab: { color: "#0f0", fontWeight: "700" },
  inactiveTab: { color: "#999" },
  section: { marginHorizontal: 16, marginTop: 10 },
  sectionTitle: { color: "#fff", fontSize: 16, fontWeight: "700", marginBottom: 12 },
  rangeRow: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  rangeText: { color: "#fff", fontSize: 14, width: 70 },
  rangeBarContainer: { flex: 1, height: 6, backgroundColor: "#333", borderRadius: 4, marginHorizontal: 8, justifyContent: "center" },
  rangeBarGreen: { height: 6, backgroundColor: "#0f0", borderRadius: 4, width: "70%" },
  rangeBarRed: { height: 6, backgroundColor: "#ff4d4d", borderRadius: 4, width: "60%" },
  marker: { position: "absolute", right: "30%", width: 10, height: 10, borderRadius: 5, backgroundColor: "#0f0" },
  watchlistBtn: { backgroundColor: "#0f0", margin: 16, paddingVertical: 14, borderRadius: 8, alignItems: "center" },
  watchlistText: { fontSize: 16, fontWeight: "700", color: "#000" },
});
