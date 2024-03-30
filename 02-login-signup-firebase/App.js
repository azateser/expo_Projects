import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import LetsGoScreen from "./screens/LetsGo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import HomeScreen from "./screens/Home";
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import ForgetPasswordScreen from "./screens/ForgetPassword";
import CheckMailScreen from './screens/CheckMail';
import LogoWorkly from "./assets/logo-workly";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


const Stack = createNativeStackNavigator();

const ProviderLayout = createNativeStackNavigator();

function ProviderLayoutScreen() {
  return (
    <ProviderLayout.Navigator>
      <ProviderLayout.Screen name="Home" component={HomeScreen} />
    </ProviderLayout.Navigator>
  );
}


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LetsGo"
      >
        {
          user ? (
            <Stack.Screen name="Home" component={ProviderLayoutScreen} />
          ) : (
            <Stack.Screen name="LetsGo" component={LetsGoScreen} />
          )
        }
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} 
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Register",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            color: "#000",
            fontFamily: "Poppins_700Bold",
          },
          headerShadowVisible: false,
          headerTintColor: "#000",
          headerLeft: () => (
            <Pressable style={{ marginRight: 20 }} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-sharp" size={24} color="black" />
            </Pressable>
          ),
          headerTitle: () => (
              <LogoWorkly style={{ width: 120, height: 50 }} />
          )
        })}
        />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Forget Password",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            color: "#000",
            fontFamily: "Poppins_700Bold",
          },
          headerShadowVisible: false,
          headerTintColor: "#000",
          headerLeft: () => (
            <Pressable style={{ marginRight: 20 }} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-sharp" size={24} color="black" />
            </Pressable>
          ),
        })}
        />
        <Stack.Screen name="CheckMail" component={CheckMailScreen}
         options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Success!",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            color: "#000",
            fontFamily: "Poppins_700Bold",
          },
          headerShadowVisible: false,
          headerTintColor: "#000",
          headerLeft: () => (
            <Pressable style={{ marginRight: 20 }} onPress={() => navigation.navigate("Login")}>
              <Ionicons name="chevron-back-sharp" size={24} color="black" />
            </Pressable>
          ),
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

export default App;