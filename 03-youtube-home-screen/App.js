import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home";
import SubscriptionsScreen from "./src/screens/Subscriptions";
import ShortsScreen from "./src/screens/Shorts";
import HomeIcon from "./src/assets/icons/TabBar/Home";
import HomeActiveIcon from "./src/assets/icons/TabBar/HomeActive";
import ShortsIcon from "./src/assets/icons/TabBar/Shorts";
import ShortsActiveIcon from "./src/assets/icons/TabBar/ShortsActive";
import AddIcon from "./src/assets/icons/TabBar/Add";
import SubscriptionsIcon from "./src/assets/icons/TabBar/Subscriptions";
import SubscriptionsActiveIcon from "./src/assets/icons/TabBar/SubscriptionsActive";
import LibraryIcon from "./src/assets/icons/TabBar/Library";
import LibraryActiveIcon from "./src/assets/icons/TabBar/LibraryActive";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  const [darkMode, setDarkMode] = useState(false);

  const tabBarLabelStyle = {
    fontFamily: "Roboto_500Medium",
    fontSize: 10,
    fontWeight: 500,
    color: darkMode ? "#fff" : "#0F0F0F",
  };
  const tabBarOptions = {
    tabBarLabelStyle,
    tabBarInactiveTintColor: darkMode ? "#fff" : "#0F0F0F",
    tabBarActiveTintColor: darkMode ? "#fff" : "#0F0F0F",
    tabBarStyle: {
      backgroundColor: darkMode ? "#0F0F0F" : "#fff",
      borderTopWidth: 0,
    },
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              ...tabBarOptions,
              tabBarLabel: "Home",
              tabBarIcon: ({ color, focused }) =>
                focused ? (
                  <HomeActiveIcon fill={color} />
                ) : (
                  <HomeIcon fill={color} dark={darkMode} />
                ),
            }}
          />
          <Tab.Screen
            name="Shorts"
            component={ShortsScreen}
            listeners={{
              tabPress: (e) => {
                setDarkMode(true);
              },
              blur: (e) => {
                setDarkMode(false);
              }
            }}
            
            options={{
              ...tabBarOptions,
              tabBarLabel: "Shorts",
              tabBarIcon: ({ color, focused }) =>
                focused ? (
                  <ShortsActiveIcon fill={color} dark={darkMode} />
                ) : (
                  <ShortsIcon fill={color} dark={darkMode} />
                ),
            }}
          />
          <Tab.Screen
            name="Add"
            component={HomeScreen}
            options={{
              tabBarLabel: "",
              tabBarLabelStyle: {
                display: "none",
              },
              tabBarIcon: ({ color }) => <AddIcon fill={color} dark={darkMode} />,
              tabBarIconStyle: {
                marginTop: 5,
              },
            }}
          />
          <Tab.Screen
            name="Subscriptions"
            component={SubscriptionsScreen}
            options={{
              ...tabBarOptions,
              tabBarLabel: "Subscriptions",
              tabBarIcon: ({ color, focused }) =>
                focused ? (
                  <SubscriptionsActiveIcon fill={color} />
                ) : (
                  <SubscriptionsIcon fill={color} dark={darkMode} />
                ),
            }}
          />
          <Tab.Screen
            name="Library"
            component={HomeScreen}
            options={{
              ...tabBarOptions,
              tabBarLabel: "Library",
              tabBarIcon: ({ color, focused }) =>
                focused ? (
                  <LibraryActiveIcon fill={color} />
                ) : (
                  <LibraryIcon fill={color} dark={darkMode} />
                ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
