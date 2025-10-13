import React, { useEffect, useState, useCallback } from "react";
import { ScrollView, Text, View, ActivityIndicator, RefreshControl, Alert, Linking, StyleSheet ,Platform} from "react-native";
import axios from "axios";
import { FINNHUB_API_KEY, FINNHUB_BASE_URL } from "../../constants/api";
import Header from "../../components/Common/Header";

import SearchBar from "../../components/News/SearchBar";
import CategoryFilter from "../../components/News/CategoryFilter";
import NewsCard from "../../components/News/NewsCard";
import ErrorState from "../../components/News/ErrorState";
import EmptyState from "../../components/News/EmptyState";

export interface Category {
  id: string;
  label: string;
  color: string;
}

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

const categories: Category[] = [
  { id: "general", label: "General", color: "#0A84FF" },
  { id: "forex", label: "Forex", color: "#30D158" },
  { id: "crypto", label: "Crypto", color: "#FF9F0A" },
  { id: "merger", label: "M&A", color: "#BF5AF2" },
];

const NewsScreen: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [error, setError] = useState<string>("");

  const fetchNews = async (category: string = "general", isRefresh: boolean = false) => {
    try {
      if (!isRefresh) setLoading(true);
      setError("");
      const res = await axios.get(`https://finnhub.io/api/v1/news?category=${category}&token=d1hm6vhr01qsvr2b1or0d1hm6vhr01qsvr2b1org`);
      const data = res.data?.slice(0, 20) || [];
      setNews(data);
      setFilteredNews(data);
    } catch (err: any) {
      setError("Failed to fetch news. Please try again.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchNews(selectedCategory, true);
  }, [selectedCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) return setFilteredNews(news);
    setFilteredNews(news.filter((n) =>
      n.headline.toLowerCase().includes(query.toLowerCase()) ||
      n.source.toLowerCase().includes(query.toLowerCase()) ||
      n.summary.toLowerCase().includes(query.toLowerCase())
    ));
  };

  const openLink = (url: string) =>
    Linking.openURL(url).catch(() => Alert.alert("Error", "Could not open link"));

  const formatDate = (ts: number) => {
    const date = new Date(ts * 1000);
    const diff = (Date.now() - date.getTime()) / (1000 * 60);
    if (diff < 60) return `${Math.floor(diff)}m ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
    if (diff < 10080) return `${Math.floor(diff / 1440)}d ago`;
    return date.toLocaleDateString();
  };

  const truncateText = (txt: string, len: number) =>
    txt.length > len ? txt.slice(0, len) + "..." : txt;

  useEffect(() => { fetchNews(); }, []);

  if (loading && !refreshing) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0A84FF" />
        <Text style={{ color: "#888" }}>Loading news...</Text>
      </View>
    );
  }

  if (error && !news.length) {
    return <ErrorState message={error} onRetry={() => fetchNews(selectedCategory)} />;
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#000000ff",paddingTop: Platform.OS === "ios" ? 44 : 20,paddingHorizontal: 16, }}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
  <Header title="News" />
  <SearchBar value={searchQuery} onChange={handleSearch} />
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelect={(id) => { setSelectedCategory(id); fetchNews(id); }} />
      <Text style={{ color: "#888" }}>
        {filteredNews.length} article{filteredNews.length !== 1 ? "s" : ""} found
      </Text>

      {filteredNews.length > 0 ? (
        <View style={{ paddingVertical: 20 }}>
          {filteredNews.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              category={categories.find((c) => c.id === selectedCategory)!}
              openLink={openLink}
              truncateText={truncateText}
              formatDate={formatDate}
            />
          ))}
        </View>
      ) : (
        <EmptyState searchQuery={searchQuery} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000000ff" },
});

export default NewsScreen;
