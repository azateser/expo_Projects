import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text
      style={{
        marginBottom: 20,
        fontSize: 20,
      }}
      >Welcome to Home Screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#282534",
          paddingHorizontal: 28,
          paddingVertical: 20,
          borderRadius: 12,
        }}
        onPress={() => navigation.replace("OnboardingScreen")}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          Go To OnboardingScreen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
