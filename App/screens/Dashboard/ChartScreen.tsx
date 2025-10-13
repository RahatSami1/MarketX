import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { WebView } from "react-native-webview";
import * as ScreenOrientation from "expo-screen-orientation";

export default function ChartScreen() {
  const [isLandscape, setIsLandscape] = useState(true);

  const toggleOrientation = async () => {
    if (isLandscape) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    } else {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    setIsLandscape(!isLandscape);
  };

  useEffect(() => {
    // Initially lock to landscape
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () => {
      // Reset to portrait when leaving
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{
          html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                html, body { margin:0; padding:0; background:#000; height:100%; width:100%; }
                #tradingview_chart { height:100%; width:100%; }
              </style>
            </head>
            <body>
              <div id="tradingview_chart"></div>
              <script src="https://s3.tradingview.com/tv.js"></script>
              <script>
                new TradingView.widget({
                  container_id: "tradingview_chart",
                  autosize: true,
                  symbol: "NASDAQ:AAPL",
                  interval: "D",
                  theme: "dark",
                  style: "1",
                  locale: "en",
                  hide_side_toolbar: false,
                  allow_symbol_change: true
                });
              </script>
            </body>
          </html>
        `,
        }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
      />

      {/* Toggle Orientation Button */}
      <TouchableOpacity style={styles.button} onPress={toggleOrientation}>
        <Text style={styles.buttonText}>
          {isLandscape ? "Switch to Portrait" : "Switch to Landscape"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  webview: { flex: 1 },
  button: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#1e1e1e",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff33",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
