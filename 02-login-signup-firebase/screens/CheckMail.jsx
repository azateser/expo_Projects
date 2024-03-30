import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import LogoWorkly from "../assets/logo-workly";
import LoginSVGImage from "../assets/Login";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import GoogleLogoSVG from "../assets/GoogleLogo";
import CheckMailSVG from "../assets/CheckMail";

const { width, height } = Dimensions.get("window");

const CheckMailScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [activeButton, setActiveButton] = useState(false);

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  useEffect(() => {
    if (email) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [email]);

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.absoluteBoxLeft} />
        <View style={styles.absoluteBoxRight} />

        <CheckMailSVG style={styles.svgImage} />

        <Text style={styles.text}>
          Please check your email for create a new way password
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CheckMailScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  absoluteBoxLeft: {
    position: "absolute",
    top: width / 8,
    left: -50,
    transform: [{ rotate: "45deg" }],
    height: 70,
    width: 70,
    borderRadius: 20,
    backgroundColor: "#51B5FB",
  },
  absoluteBoxRight: {
    position: "absolute",
    top: width / 2,
    right: -120,
    transform: [{ rotate: "55deg" }],
    height: 140,
    width: 140,
    borderRadius: 20,
    backgroundColor: "#51B5FB",
  },

  svgImage: {
    width: width,
    marginTop: 50,
  },

  text: {
    fontSize: 16,
    marginTop: 26,
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
    maxWidth: 290,
  },
});
