import React from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import LetsGoImage from "../assets/LetsGo.jsx";
import LogoWorkly from "../assets/logo-workly.jsx";

const { width, height } = Dimensions.get("window");

const LetsGoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container} w>
        <View>
          <LetsGoImage style={{ marginTop: 12 }} />
          <LogoWorkly style={styles.logo} />
          <Text style={styles.description}>
            Where efficiency and teamwork harmonize
          </Text>
        </View>
        <View>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Lets Go!</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#4FB5FF",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  description: {
    textAlign: "center",
    color: "#323232",
    fontSize: 18,
    maxWidth: width * 0.8,
    alignSelf: "center",
    marginTop: 32,
    letterSpacing: 0.6,
    fontFamily: "Poppins_600SemiBold",
  },
  logo: {
    marginTop: 32,
    alignSelf: "center",
    width: 176,
    height: 44,
  },
  button: {
    backgroundColor: "#282828",
    color: "white",
    width: width * 0.8,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 22,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins_700Bold",
  },
});

export default LetsGoScreen;
