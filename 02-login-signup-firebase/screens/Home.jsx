import React from "react";
import { Pressable, Text, View } from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Welcome to Workly
      </Text>
      <Pressable
        style={{
          width: 100,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          textAlign: "center",
          backgroundColor: "#51B5FB",
          marginTop: 20,
        }}
        onPress={() => {
          FIREBASE_AUTH.signOut();
          navigation.navigate("Login");
        }}
      >
        <Text style={{ color: "#242830", fontWeight: "bold" }}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
