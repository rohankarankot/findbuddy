import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useClerk, useOAuth, useSignIn, useUser } from "@clerk/clerk-expo";
import React from "react";
import { View, Text } from "react-native";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleLogin from "@/components/googleLogin";

const Login = () => {
  useWarmUpBrowser();
  // Initialize the navigation hook
  useSignIn();
  const { user } = useUser();
  console.log("user: @@@>", user);
  const { signOut } = useClerk();
  const googleOAuth = useOAuth({ strategy: "oauth_google" });

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
    <SafeAreaView className="flex-1 bg-slate-200 justify-center items-center ">
      <View className="flex-[0.5]">
        <Text className="text-6xl">Nice Catchy Title for the app</Text>
      </View>
      <GoogleLogin onSelectAuth={onSelectAuth} />
    </SafeAreaView>
  );
};

export default Login;
