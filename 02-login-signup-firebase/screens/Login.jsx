import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import LogoWorkly from "../assets/logo-workly";
import LoginSVGImage from "../assets/Login";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import GoogleLogoSVG from "../assets/GoogleLogo";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const { width, height } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeButton, setActiveButton] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const auth = FIREBASE_AUTH;

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      if (response) {
        navigation.navigate("Home");
      } else {
        Alert.alert("Login failed", "Email or password is incorrect");
      }
    } catch (error) {
      console.log("Login failed", error);
      Alert.alert("Login failed", "Email or password is incorrect");
    }
  };

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  useEffect(() => {
    setIsEmailValid(validateEmail(email));

    if (email && password) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [email, password]);

  const handleLogin = () => {
    if (activeButton) {
      login();
    }
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <LogoWorkly style={styles.logo} />
        <View style={styles.absoluteBoxLeft} />
        <View style={styles.absoluteBoxRight} />
        <LoginSVGImage style={styles.svgImage} />

        <View style={styles.form}>
          <Text style={styles.formText}>Log in by email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.formInput,
                {
                  borderColor: email
                    ? isEmailValid
                      ? "#3FD88D"
                      : "#FF0000"
                    : "#D0D0D0",
                },
              ]}
              placeholder="Email"
              onChangeText={handleEmailChange}
              keyboardType="email-address"
            />
            {email ? (
              isEmailValid ? (
                <AntDesign
                  style={[styles.formIcon, { color: "#3FD88D" }]}
                  name="checkcircle"
                  size={20}
                />
              ) : (
                <AntDesign
                  style={[styles.formIcon, { color: "#FF0000" }]}
                  name="closecircle"
                  size={20}
                />
              )
            ) : null}
            {email ? (
              isEmailValid ? null : (
                <Text
                  style={{
                    color: "#FF6868",
                    position: "absolute",
                    bottom: -20,
                    left: 10,
                    fontSize: 12,
                  }}
                >
                  Please enter the right email address
                </Text>
              )
            ) : null}
          </View>
        </View>

        <View style={[styles.form, { marginTop: 30 }]}>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.formInput, { borderColor: "#D0D0D0" }]}
              placeholder="Password"
              onChangeText={handlePasswordChange}
              secureTextEntry={!showPassword}
            />
            <Pressable onPress={handleShowPassword}>
              {showPassword ? (
                <Feather
                  style={[styles.formIcon, { top: -8 }]}
                  name="eye"
                  size={20}
                  color="#D0D0D0"
                />
              ) : (
                <Feather
                  style={[styles.formIcon, { top: -8 }]}
                  name="eye-off"
                  size={20}
                  color="#D0D0D0"
                />
              )}
            </Pressable>
          </View>
          <Pressable
            disabled={!activeButton}
            onPress={handleLogin}
            style={({ pressed }) => [
              styles.loginButton,
              {
                backgroundColor: activeButton ? "#51B5FB" : "#B4B4B4",
                opacity: pressed ? 0.6 : 1,
              },
            ]}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>

          <View
            style={{
              width: "100%",
              height: 2,
              backgroundColor: "#F0F0F0",
              marginTop: 26,
              marginBottom: 26,
            }}
          />

          <Pressable style={styles.googleButton}>
            <GoogleLogoSVG style={{ width: 20, height: 20 }} />
            <Text style={styles.googleButtonText}>Login with Google</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                marginTop: 20,
                textAlign: "center",
                fontSize: 12,
                fontFamily: "Poppins_400Regular",
              }}
            >
              Don't have an account?{" "}
              <Text
                style={{ color: "#1767F8", fontFamily: "Poppins_400Regular" }}
              >
                Sign up
              </Text>
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("ForgetPassword")}>
            <Text
              style={{
                color: "#1767F8",
                marginTop: 10,
                textAlign: "center",
                fontSize: 12,
                fontFamily: "Poppins_400Regular",
              }}
            >
              Forgot password?
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
  logo: {
    width: 120,
    height: 50,
    marginTop: 20,
  },
  svgImage: {
    width: width,
  },

  form: {
    width: width,
    paddingHorizontal: 32,
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
    height: 50,
    borderWidth: 1.3,
    borderRadius: 10,
    padding: 10,
  },

  formIcon: {
    position: "absolute",
    right: 16,
  },

  loginButton: {
    width: "100%",
    backgroundColor: "#51B5FB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    height: 56,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },

  googleButton: {
    width: "100%",
    backgroundColor: "#2D3748",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 14,
    flexDirection: "row",
    height: 52,
  },

  googleButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 15,
  },
});
