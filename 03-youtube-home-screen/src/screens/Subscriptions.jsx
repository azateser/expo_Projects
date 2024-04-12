import React from 'react'
import { RefreshControl, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header'
import VideoBox from '../components/Home/video'
import ShortsArea from '../components/Home/shorts'

const SubscriptionsScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView>
       <Header subscriptions />
       <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
       >
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
       <TouchableOpacity activeOpacity={0.9}>
        <VideoBox />
       </TouchableOpacity>
       </View>
       </ScrollView>
    </SafeAreaView>
  )
}

export default SubscriptionsScreen