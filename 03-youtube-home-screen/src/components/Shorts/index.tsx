import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, View, StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const ShortsCotent = () => {
  const [likeCount, setLikeCount] = React.useState(45);
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.container}>
      <View style={styles.topIconsWrapper}>
        <Feather name="search" size={24} color="white" />
        <Feather name="more-vertical" size={24} color="white" />
      </View>
      <View style={styles.descriptionWrapper}>
        <View style={styles.channelWrapper}>
          <Image
            style={styles.avatar}
            source={require("../../assets/avatar.png")}
          />
          <Text style={styles.channelName}>@channel_name</Text>
        </View>
        <Text style={styles.conentTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Ionicons name="musical-notes-outline" size={18} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 12,
              fontFamily: "Roboto_400Regular",
            }}
          >
            Original Sound
          </Text>
        </View>
      </View>
      <View style={styles.contentIconsWrapper}>
        <TouchableOpacity 
        onPress={handleLike}

        style={styles.iconWrapper}>
          <MaterialCommunityIcons name="thumb-up" size={28} color={isLiked ? "#2D9DDC" : "white"} />
          <Text style={styles.iconText}>{likeCount}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialCommunityIcons name="thumb-down" size={28} color="white" />
          <Text style={styles.iconText}>Disslike</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialCommunityIcons name="comment-text" size={28} color="white" />
          <Text style={styles.iconText}>42</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialCommunityIcons name="share" size={28} color="white" />
          <Text style={styles.iconText}>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialCommunityIcons name="cached" size={28} color="white" />
          <Text style={styles.iconText}>Remix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconWrapper}>
          <Image
            style={{ width: 42, height: 42, borderRadius: 8 }}
            source={require("../../assets/avatar.png")}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/images/4.jpg")}
      />
    </View>
  );
};

export default ShortsCotent;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: width,
    height: height,
  },
  image: {
    width: width,
    height: height,
    objectFit: "cover",
  },
  topIconsWrapper: {
    position: "absolute",
    right: 0,
    top: height * 0.06,
    flexDirection: "row",
    gap: 36,
    padding: 10,
    zIndex: 1,
  },
  contentIconsWrapper: {
    position: "absolute",
    right: 2,
    bottom: height * 0.11,
    gap: 20,
    padding: 10,
    zIndex: 1,
    color: "white",
  },
  iconWrapper: {
    alignItems: "center",
    gap: 5,
  },
  iconText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Roboto_700Bold",
  },
  descriptionWrapper: {
    position: "absolute",
    bottom: height * 0.12,
    left: 18,
    zIndex: 1,
  },
  channelWrapper: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 50,
  },
  channelName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto_500Medium",
  },
  conentTitle: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    marginTop: 10,
    width: "90%",
  },
});
