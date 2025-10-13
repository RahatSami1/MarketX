import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAuthStore } from "../../store/auth";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const logout = useAuthStore((s) => s.logout);
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>

      <View style={styles.section}>
        <ProfileItem
          icon="person-circle-outline"
          label="User Info"
          onPress={() => navigation.navigate("UserInfo")}
        />
  
        <ProfileItem
          icon="notifications"
          label="Notifications"
          onPress={() => navigation.navigate("Notifications")}
        />
        <ProfileItem
          icon="color-palette"
          label="Theme & Language"
          onPress={() => navigation.navigate("ThemesAndLanguage")}
        />
        <ProfileItem
          icon="trending-up"
          label="Preferences"
          onPress={() => navigation.navigate("Preferences")}
        />
        <ProfileItem
          icon="document-text"
          label="Privacy Policy"
          onPress={() => navigation.navigate("PrivacyPolicy")}
        />
        <ProfileItem
          icon="shield-checkmark"
          label="Terms & Conditions"
          onPress={() => navigation.navigate("Terms")}
        />
        <ProfileItem
          icon="alert-circle"
          label="Disclaimer"
          onPress={() => navigation.navigate("Disclaimer")}
        />
        <ProfileItem
          icon="help-circle"
          label="Help Center"
          onPress={() => navigation.navigate("HelpCenter")}
        />
        <ProfileItem
          icon="chatbox"
          label="Feedback"
          onPress={() => navigation.navigate("Feedback")}
        />
        <ProfileItem
          icon="information-circle"
          label="About App"
          onPress={() => navigation.navigate("About")}
        />
        <ProfileItem
          icon="code-slash"
          label="Version 1.0.0"
          onPress={() => navigation.navigate("Version")}
        />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ProfileItem({
  icon,
  label,
  onPress,
}: {
  icon: any;
  label: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={0.7}>
      <Ionicons name={icon} size={24} color="#fff" style={{ width: 28 }} />
      <Text style={styles.itemText}>{label}</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#bbb" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
  },

  section: {
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 12,
    backgroundColor: "#1e1e1e",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderBottomColor: "#2e2e2e",
    borderBottomWidth: 1,
    borderRadius: 8,
    backgroundColor: "#1a1a1a",
    marginVertical: 4,
    elevation: 2, // adds subtle shadow on Android
    shadowColor: "#000", // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  itemText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 12,
    flex: 1,
  },
  logoutBtn: {
    backgroundColor: "#ff3b30",
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 25,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  logoutText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
