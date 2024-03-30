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

const { width, height } = Dimensions.get("window");

const ForgetPasswordScreen = ({ navigation }) => {
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

        <View style={styles.form}>
          <Text style={styles.formText}>Enter your registered email </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.formInput}
              placeholder="Mymail@example.com"
              onChangeText={handleEmailChange}
              keyboardType="email-address"
            />
          </View>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.6 : 1,
                backgroundColor: activeButton ? "#51B5FB" : "#D0D0D0",
              },
              styles.formButton,
            ]}
            disabled={!activeButton}
            onPress={() => navigation.navigate("CheckMail")}
          >
            <Text style={styles.formButtonText}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;

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
    backgroundColor: "#EEE",
  },
  absoluteBoxRight: {
    position: "absolute",
    top: width / 2,
    right: -120,
    transform: [{ rotate: "55deg" }],
    height: 140,
    width: 140,
    borderRadius: 20,
    backgroundColor: "#EEE",
  },
  form: {
    width: width,
    paddingHorizontal: 26,
    marginTop: 50,
  },

  formText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Poppins_500Medium",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },

  formInput: {
    width: "100%",
    backgroundColor: "#FBFBFB",
    borderColor: "#D0D0D0",
    height: 50,
    borderWidth: 1.3,
    borderRadius: 10,
    padding: 10,
  },

  formIcon: {
    position: "absolute",
    right: 16,
  },

  formButton: {
    width: "100%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    height: 56,
  },

  formButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
});
