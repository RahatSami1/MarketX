import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Category } from "../NewsScreen";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App"; // adjust path

type NewsDetailNavProp = StackNavigationProp<RootStackParamList, "NewsDetail">;

interface NewsItem {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

interface Props {
  item: NewsItem;
  category: Category;
  truncateText: (text: string, maxLength: number) => string;
  formatDate: (timestamp: number) => string;
}

const NewsCard: React.FC<Props> = ({ item, category, truncateText, formatDate }) => {
  const navigation = useNavigation<NewsDetailNavProp>();

  return (
    <TouchableOpacity
      key={item.id}
      onPress={() => navigation.navigate("NewsDetail", { item })}
      activeOpacity={0.85}
    >
      <View style={styles.card}>
        {/* News Image */}
        {item.image ? (
          <Image source={{ uri: item.image }} style={styles.image} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>📰</Text>
          </View>
        )}

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.topRow}>
            <Text style={styles.title} numberOfLines={2}>
              {truncateText(item.headline, 70)}
            </Text>

            <View style={styles.metaRow}>
              <View style={styles.categoryTag}>
                <Text style={styles.categoryTagText}>{category.label}</Text>
              </View>
              <Text style={styles.date}>{formatDate(item.datetime)}</Text>
            </View>
          </View>

          <Text style={styles.source}>{item.source}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#333",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  placeholderImage: {
    width: "100%",
    height: 160,
    backgroundColor: "#2D2D2D",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: { fontSize: 40 },
  content: {
    padding: 12,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    lineHeight: 20,
    marginRight: 8,
  },
  metaRow: {
    alignItems: "flex-end",
  },
  categoryTag: {
    backgroundColor: "#0A84FF",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 4,
  },
  categoryTagText: { color: "#FFF", fontSize: 10, fontWeight: "600" },
  date: { fontSize: 11, color: "#AAA" },
  source: {
    color: "#0A84FF",
    fontSize: 13,
    fontWeight: "500",
  },
});

export default NewsCard;
