import React, { useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import YoutubeLogoSVG from "../../assets/Logo";
import CastIcon from "../../assets/icons/Header/Cast";
import NotificationIcon from "../../assets/icons/Header/Notification";
import SearchIcon from "../../assets/icons/Header/Search";
import ExploreIcon from "../../assets/icons/Header/Explore";
import { LinearGradient } from "expo-linear-gradient";

const Header = ({ subscriptions }: any) => {
  const menuItems = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "New to you",
      special: true,
    },
    {
      id: 3,
      name: "UX Design",
    },
    {
      id: 4,
      name: "Gaming",
    },
    {
      id: 5,
      name: "Figma",
    },
    {
      id: 6,
      name: "Code",
    },
    {
      id: 7,
      name: "React",
    },
  ];

  const subscriptionsMenuItem = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Today",
    },
    {
      id: 3,
      name: "Videos",
    },
    {
      id: 4,
      name: "Shorts",
    },
    {
      id: 5,
      name: "Live",
    },
    {
      id: 6,
      name: "Posts",
    },
  ];

  const subscribeItems = [
    {
      id: 1,
      name: "Channel Name",
      avatar: require("../../assets/avatar.png"),
      haveVideo: true,
    },
    {
      id: 2,
      name: "Channel Name",
      avatar: require("../../assets/avatar.png"),
      haveVideo: false,
    },
    {
      id: 3,
      name: "Channel Name",
      avatar: require("../../assets/avatar.png"),
      haveVideo: true,
    },
    {
      id: 4,
      name: "Channel Name",
      avatar: require("../../assets/avatar.png"),
      haveVideo: false,
    },
    {
      id: 5,
      name: "Channel Name",
      avatar: require("../../assets/avatar.png"),
      haveVideo: true,
    },
  ];

  const [selectedMenuItem, setSelectedMenuItem] = useState(1);

  return (
    <>
      <View style={styles.container}>
        <YoutubeLogoSVG style={styles.logo} />
        <View style={styles.icons}>
          <CastIcon />
          <NotificationIcon />
          <SearchIcon />
          <Image
            source={require("../../assets/avatar.png")}
            style={{ width: 24, height: 24, borderRadius: 50 }}
          />
        </View>
      </View>
      {subscriptions && (
        <View style={styles.subscriotionsWrapper}>
          <View style={styles.subscriotionItems}>
            {subscribeItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.subscriotionItem}>
                <View>
                  <Image
                    style={styles.subscriotionItemAvatar}
                    source={item.avatar}
                  />
                  {item.haveVideo && (
                    <View style={styles.subscriotionHaveVideo}></View>
                  )}
                </View>
                <Text style={styles.subscriotionItemText}>
                  {item.name.substr(0, 7)}...
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity>
            <Text style={styles.subscriotionAll}>All</Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", gap: 8 }}
        style={styles.menuWrapper}
        scrollEnabled={subscriptions ? false : true}
      >
        {!subscriptions && (
          <TouchableHighlight style={styles.menuItem}>
            <ExploreIcon />
          </TouchableHighlight>
        )}
        {(subscriptions ? subscriptionsMenuItem : menuItems).map((item) => (
          <LinearGradient
            colors={
              item?.special
                ? ["#38686E", "#741B7A", "#E18185"]
                : item.id === selectedMenuItem
                ? ["#0F0F0F", "#0F0F0F"]
                : ["#F2F2F2", "#F2F2F2"]
            }
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            key={item.id}
            style={
              item?.special
                ? {
                    borderRadius: 8,
                    padding: 1.5,
                  }
                : {
                    borderRadius: 8,
                    padding: 1.5,
                  }
            }
          >
            <TouchableHighlight
              key={item.id}
              underlayColor={
                item.id === selectedMenuItem ? "#0F0F0F" : "#dfdfdf"
              }
              style={[
                styles.menuItem,
                item.id === selectedMenuItem && {
                  backgroundColor: "#0F0F0F",
                },
                subscriptions && {paddingHorizontal: 11},
                item?.special &&
                  item.id === selectedMenuItem && {
                    backgroundColor: "#fef9ff",
                    padding: 0,
                  },
              ]}
              onPress={() => setSelectedMenuItem(item.id)}
            >
              <Text
                style={[
                  styles.menuText,
                  item.id === selectedMenuItem && { color: "#FFF" },
                  item?.special &&
                    item.id === selectedMenuItem && { color: "#0F0F0F" },
                ]}
              >
                {item.name}
              </Text>
            </TouchableHighlight>
          </LinearGradient>
        ))}
      </ScrollView>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 43,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 27,
  },
  icons: {
    flexDirection: "row",
    gap: 18,
  },
  menuWrapper: {
    maxHeight: 50,
    paddingHorizontal: 16,
    height: 50,
  },
  menuItem: {
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    paddingHorizontal: 12.5,
    paddingVertical: 6.5,
    color: "#0F0F0F",
  },
  menuText: {
    fontFamily: "Roboto_400Regular",
  },
  subscriotionsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  subscriotionItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  subscriotionItem: {},
  subscriotionItemText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 12,
    marginTop: 5,
  },
  subscriotionItemAvatar: {
    width: 56,
    height: 56,
    borderRadius: 50,
    position: "relative",
  },
  subscriotionHaveVideo: {
    position: "absolute",
    width: 14,
    height: 14,
    borderRadius: 50,
    backgroundColor: "#3FA3F8",
    right: 0,
    borderWidth: 2,
    borderColor: "#fff",
    bottom: 2,
  },
  subscriotionAll: {
    color: "#3FA3F8",
    padding: 5,
    borderRadius: 4,
    fontFamily: "Roboto_500Medium",
  },
});
