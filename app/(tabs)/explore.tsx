import { TouchableOpacity } from "react-native";

import { Text, View } from "@/components/Themed";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import useScreenDimensions from "@/hooks/useScreenDimensions";

export default function TabOneScreen() {
  const { width, height } = useScreenDimensions();

  return (
    <View darkColor="#000" lightColor="#fff">
      <View className={`h-[500px] border-orange-600 w-[${width}]`}>
        <Text className="text-white">Map should display here</Text>
      </View>
      <Text className="text-white">"Hello"</Text>
    </View>
  );
}
