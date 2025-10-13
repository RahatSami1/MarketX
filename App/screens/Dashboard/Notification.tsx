import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const dummyNotifications = [
  {
    id: "1",
    title: "Stock Alert: TSLA",
    description: "Tesla stock has increased by 5% today.",
    icon: "trending-up-outline",
  },
  {
    id: "2",
    title: "Watchlist Update",
    description: "AAPL has hit your target price.",
    icon: "notifications-outline",
  },
  {
    id: "3",
    title: "New Market News",
    description: "Check out the latest market trends.",
    icon: "newspaper-outline",
  },
];

const Notification = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Ionicons name={item.icon} size={26} color="#fff" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyNotifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
    padding: 16,
  },
  card: {
    backgroundColor: "#2a2a2a",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    color: "#ccc",
    fontSize: 14,
  },
});
