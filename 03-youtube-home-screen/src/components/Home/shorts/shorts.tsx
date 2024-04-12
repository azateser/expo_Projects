import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import ShortsMoreIcon from "../../../assets/icons/Shorts/More";

const ShortsBox = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/4.jpg")}
      />
      <View>
        <Text style={styles.title}>SwordyMcSwordface fighting evil! </Text>
        <Text style={styles.views}>1.9M views</Text>
      </View>
      <View style={styles.more}>
        <ShortsMoreIcon />
      </View>
    </TouchableOpacity>
  );
};

export default ShortsBox;

const styles = StyleSheet.create({
  container: {
    height: 278,
    backgroundColor: "#fff",
    position: "relative",
  },

  image: {
    width: 166,
    height: 278,
    borderRadius: 8,
    objectFit: "cover",
  },
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 14,
    color: "#FFFFFF",
    bottom: 34,
    left: 8,
    position: "absolute",
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  views: {
    fontFamily: "Roboto_700Bold",
    fontSize: 14,
    color: "#FFFFFF",
    bottom: 13,
    left: 8,
    position: "absolute",
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  more: {
    width: 10,
    height: 20,
    position: "absolute",
    right: 8,
    top: 8,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
    shadowOpacity: 0.5,
  },
});
