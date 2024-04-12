import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from "react-native";
import ShortsIcon from "../../../assets/icons/Shorts/Shorts";
import ShortsBox from "./shorts";

const ShortsArea = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <ShortsIcon />
        <Text style={styles.title}>Shorts</Text>
      </View>

      <ScrollView
        horizontal
        style={styles.content}
        contentContainerStyle={{ alignItems: "center", gap: 10, paddingRight: 26}}
        showsHorizontalScrollIndicator={false}
      >
        <ShortsBox />
        <ShortsBox />
        <ShortsBox />
        <ShortsBox />
        <ShortsBox />
      </ScrollView>
    </View>
  );
};

export default ShortsArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
  },
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 18,
    color: "#0F0F0F",
  },
  content: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
});
