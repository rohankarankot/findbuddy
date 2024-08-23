import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useClerk, useOAuth, useSignIn, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Linking from "expo-linking";
import { router, useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

const Login = () => {
  useWarmUpBrowser();
  // Initialize the navigation hook
  const { signIn, setActive, isLoaded } = useSignIn();
  const { user } = useUser();
  console.log("user: @@@>", user);
  const { signOut } = useClerk();
  const googleOAuth = useOAuth({ strategy: "oauth_google" });
  const navigation = useNavigation<NavigationProp<any>>();

  const onSelectAuth = async () => {
    try {
      const oAuthFlow = await googleOAuth.startOAuthFlow({
        redirectUrl: Linking.createURL("/home"),
      });

      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
          router.replace("/home");
        }

        // Reset the navigation stack to the main app screen
        router.replace("/home");
      } else {
        console.log("error occurred");
      }
    } catch (error) {
      console.log("error====>", JSON.stringify(error));
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelectAuth()}>
        <Ionicons name="logo-google" size={24} />
        <Text>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#6c47ff",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
});

export default Login;
