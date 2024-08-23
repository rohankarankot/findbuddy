import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useClerk, useOAuth, useSignIn, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
    <View>
      <TouchableOpacity onPress={() => onSelectAuth()}>
        <Ionicons name="logo-google" size={24} />
        <Text>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
