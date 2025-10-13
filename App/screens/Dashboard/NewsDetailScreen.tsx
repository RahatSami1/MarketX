import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Share,
  SafeAreaView,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App"; // adjust path
import { StackNavigationProp } from "@react-navigation/stack";

type NewsDetailRouteProp = RouteProp<RootStackParamList, "NewsDetail">;
type NavProp = StackNavigationProp<RootStackParamList, "NewsDetail">;

interface Props {
  route: NewsDetailRouteProp;
}

const NewsDetailScreen: React.FC<Props> = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation<NavProp>();

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${item.headline}\n\nRead more: ${item.url}`,
      });
    } catch (err) {
      console.error("Error sharing news:", err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Image Header */}
        <View style={styles.imageWrapper}>
          {item.image ? (
            <Image source={{ uri: item.image }} style={styles.image} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={{ fontSize: 40 }}>📰</Text>
            </View>
          )}
        </View>

        {/* Text Content */}
        <View style={styles.textContent}>
          <View style={styles.metaRow}>
            <Text style={styles.category}>
              {item.category?.toUpperCase() || "GENERAL"}
            </Text>
            <Text style={styles.date}>
              {new Date(item.datetime * 1000).toLocaleDateString()}
            </Text>
          </View>

          <Text style={styles.title}>{item.headline}</Text>
          <Text style={styles.source}>By {item.source}</Text>
          <Text style={styles.summary}>
            {item.summary || "No description available."}
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => Linking.openURL(item.url)}
        >
          <Text style={styles.primaryButtonText}>Read Full Article</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={handleShare}>
          <Text style={styles.secondaryButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  content: { flex: 1 },
  imageWrapper: { width: "100%", height: 220 },
  image: { width: "100%", height: "100%" },
  placeholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2D2D2D",
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: { padding: 20 },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  category: {
    backgroundColor: "#0A84FF",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: "600",
  },
  date: { color: "#888", fontSize: 12 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
    lineHeight: 28,
  },
  source: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0A84FF",
    marginBottom: 16,
  },
  summary: { fontSize: 16, color: "#B0B0B0", marginBottom: 24, lineHeight: 22 },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
     paddingHorizontal: 20,
    paddingBottom:50,
    borderTopColor: "#333",
    backgroundColor: "#000",
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#0A84FF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },
  primaryButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  secondaryButton: {
    width: 100,
    borderColor: "#0A84FF",
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryButtonText: { color: "#0A84FF", fontSize: 16, fontWeight: "600" },
});

export default NewsDetailScreen;
