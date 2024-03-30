import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Feather } from "@expo/vector-icons";
import GoogleLogoSVG from "../assets/GoogleLogo";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const { width, height } = Dimensions.get("window");

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const auth = FIREBASE_AUTH;

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigation.navigate("Home");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Email already exists");
      } else {
        console.error(error);
        Alert.alert("Something went wrong");
      }
    }
  };

  const handleFullNameChange = (fullName) => {
    setFullName(fullName);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleConfirmPasswordChange = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    if (
      fullName &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword &&
      isChecked
    ) {
      setActiveButton(true);
    } else {
      setActiveButton(false);
    }
  }, [fullName, email, password, confirmPassword, isChecked]);

  const handleRegister = () => {
    if (activeButton) {
      if (password === confirmPassword) {
        register();
      } else {
        alert("Password and Confirm Password must be same");
      }
    }
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.form}>
          <View>
            <Text style={styles.formText}>Create an Account</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.formInput, { borderColor: "#D0D0D0" }]}
                placeholder="Full Name"
                onChangeText={handleFullNameChange}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.formInput, { borderColor: "#D0D0D0" }]}
                placeholder="Email Address"
                onChangeText={handleEmailChange}
              />
            </View>

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

            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.formInput, { borderColor: "#D0D0D0" }]}
                placeholder="Confirm Password"
                onChangeText={handleConfirmPasswordChange}
                secureTextEntry={!showConfirmPassword}
              />
              <Pressable onPress={handleShowConfirmPassword}>
                {showConfirmPassword ? (
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
              onPress={handleRegister}
              style={({ pressed }) => [
                styles.registerButton,
                {
                  backgroundColor: activeButton ? "#51B5FB" : "#B4B4B4",
                  opacity: pressed ? 0.6 : 1,
                },
              ]}
            >
              <Text style={styles.registerButtonText}>Get Start</Text>
            </Pressable>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 8,
                marginTop: 22,
              }}
            >
              <Checkbox
                style={{
                  backgroundColor: "#1C375A29",
                  borderColor: "#1C375A29",
                }}
                value={isChecked}
                onValueChange={setChecked}
              />
              <Text style={{ color: "#1B2B41B8" }}>
                I have read and agree to the{" "}
                <Text
                  style={{ color: "#1676F3", textDecorationLine: "underline" }}
                >
                  Terms of Service
                </Text>
              </Text>
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Pressable style={styles.googleButton}>
              <GoogleLogoSVG style={{ width: 20, height: 20 }} />
              <Text style={styles.googleButtonText}>Login with Google</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  marginTop: 20,
                  textAlign: "center",
                  fontSize: 12,
                  fontFamily: "Poppins_400Regular",
                }}
              >
                Already have account?{" "}
                <Text
                  style={{ color: "#1767F8", fontFamily: "Poppins_400Regular" }}
                >
                  Login
                </Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
  form: {
    width: width,
    paddingHorizontal: 32,
    marginTop: 56,
    justifyContent: "space-between",
    flex: 1,
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
    marginBottom: 30,
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

  registerButton: {
    width: "100%",
    backgroundColor: "#51B5FB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    height: 56,
  },

  registerButtonText: {
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
