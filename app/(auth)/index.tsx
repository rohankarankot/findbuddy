import { useClerk, useOAuth, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import LottieView from "lottie-react-native";

// https://github.com/clerkinc/clerk-expo-starter/blob/main/components/OAuth.tsx

import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { View } from "@/components/Themed";
import { useRef } from "react";

WebBrowser.maybeCompleteAuthSession();

const Page = () => {
  useWarmUpBrowser();

  const googleOAuth = useOAuth({ strategy: "oauth_google" });
  const animation = useRef<LottieView>(null);

  const onSelectAuth = async () => {
    try {
      const oAuthFlow = await googleOAuth.startOAuthFlow({
        redirectUrl: Linking.createURL("/(tabs)"),
      });

      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
      } else {
        console.log("error occured");
      }
    } catch (error) {
      console.log("error", JSON.stringify(error));
    }
  };
  const { user } = useUser();
  const { signOut } = useClerk();
  return (
    <View className="flex-1 justify-center items-center ">
      <LottieView
        autoPlay
        ref={animation}
        style={styles.lottie}
        source={require("../../assets/lottie/welcome.json")}
      />

      <Text className="ml-2 text-white mb-4">
        Hellow {user?.firstName ?? "Default"}!!
      </Text>
      <TouchableOpacity
        className="bg-white flex-row items-center p-4 rounded-full "
        onPress={() => onSelectAuth()}
      >
        <Ionicons name="logo-google" size={24} />
        <Text className="ml-2">Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  lottie: {
    width: 500,
    height: 300,
    objectFit: "contain",
  },
});
