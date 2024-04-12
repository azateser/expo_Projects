import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import ShortsCotent from "../components/Shorts";

const { width, height } = Dimensions.get("window");
const ShortsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* youtube style shorts view */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        disableIntervalMomentum={true}
        snapToInterval={height}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        bounces={false}
        style={{
          backgroundColor: "#000",
          width: "100%",
          position: "relative",
        }}
      >
        <ShortsCotent />
        <ShortsCotent />
        <ShortsCotent />
      </ScrollView>

      <View style={styles.videoStatusBar}></View>
      <View
        style={[
          styles.videoStatusBar,
          { backgroundColor: "#FA0100", width: "50%" },
        ]}
      ></View>
    </View>
  );
};

export default ShortsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  videoStatusBar: {
    position: "absolute",
    bottom: 0,
    height: 2,
    width: "100%",
    backgroundColor: "#4E4F4B",
  },
});
