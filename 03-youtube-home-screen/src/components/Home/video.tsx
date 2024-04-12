import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import MoreIcon from "../../assets/icons/Video/More";

const VideoBox = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/images/1.jpg")}
        />
        <View style={styles.timeWrapper}>
          <Text style={styles.time}>21:44</Text>
        </View>
      </View>
      <View style={styles.detail}>
        <View style={styles.channel}>
          <Image
            style={styles.avatar}
            source={require("../../assets/images/1.jpg")}
          />

          <View style={styles.texts}>
            <Text style={styles.title}>
              Breaking! NASA discovers alien life on Mars{" "}
            </Text>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.description}>NASA</Text>
              <Text style={styles.description}>·</Text>
              <Text style={styles.description}>99.2M views</Text>
              <Text style={styles.description}>·</Text>
              <Text style={styles.description}>Now</Text>
            </View>
          </View>
        </View>
        <View style={{ top: 0, right: 10 }}>
          <MoreIcon />
        </View>
      </View>
    </View>
  );
};

export default VideoBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 220,
    objectFit: "cover",
  },
  timeWrapper: {
    position: "absolute",
    bottom: 10,
    right: 6,
  },
  time: {
    color: "#fff",
    backgroundColor: "#000000a7",
    padding: 5,
    borderRadius: 5,
    fontFamily: "Roboto_400Regular",
    fontSize: 12,
  },
  detail: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  channel: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 25,
  },
  texts: {
    marginLeft: 10,
    justifyContent: "space-between",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    color: "#0F0F0F",
    fontSize: 16,
    maxWidth: 269,
    fontFamily: "Roboto_400Regular",
  },
  descriptionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    minHeight: 20,
  },
  description: {
    color: "#606060",
    fontSize: 12,
    fontFamily: "Roboto_400Regular",
  },
});
