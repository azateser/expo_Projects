import React from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header/index";
import VideoBox from "../components/Home/video";
import ShortsArea from "../components/Home/shorts";

const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header />
        <View
          style={{
            flex: 1,
            width: "100%",
            gap: 18,
          }}
        >
          <TouchableOpacity activeOpacity={0.9}>
            <VideoBox />
          </TouchableOpacity>
          <ShortsArea />
          <TouchableOpacity activeOpacity={0.9}>
            <VideoBox />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <VideoBox />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9}>
            <VideoBox />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
