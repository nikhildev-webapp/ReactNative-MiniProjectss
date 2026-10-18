import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        React Native Mini Projects
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "semibold", }}>
        Click The Link Below to Navigate to Projects
      </Text>
      <Link href="/Projects" style={styles.link}>
        Mini Projects
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    fontSize: 20,
    color: "blue",
    marginTop: 8,
  },
});
