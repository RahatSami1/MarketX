import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WatchlistItem from "./WatchlistItem";
import EmptyState from "./EmptyState";

interface Props {
  title: string;
  data: any[];
  type: "stock" | "mutual_fund" | "index";
  onRemove: (type: "stock" | "mutual_fund" | "index", id: number) => void;
  emptyTitle?: string;
  emptySubtitle?: string;
}

export default function WatchlistSection({ title, data, type, onRemove, emptyTitle, emptySubtitle }: Props) {
  if (!data || data.length === 0) {
    if (emptyTitle) {
      return <EmptyState title={emptyTitle} subtitle={emptySubtitle || ""} />;
    }
    return null;
  }

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{data.length}</Text>
        </View>
      </View>
      {data.map((item) => (
        <WatchlistItem key={item.id} item={item} type={type} onRemove={onRemove} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 24 },
  sectionHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#FFF" },
  badge: { backgroundColor: "#333", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, minWidth: 24, alignItems: "center" },
  badgeText: { color: "#FFF", fontSize: 12, fontWeight: "600" },
});
