import { Image, Pressable, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function TabTwoScreen() {
  const { user } = useUser();
  const { signOut: logout } = useClerk();
  return (
    <View lightColor="#fff" darkColor="rgba(255,255,255,0.1)">
      <Image
        style={{
          height: 150,
          width: 150,
          borderRadius: 80,
          alignSelf: "center",
          marginTop: 30,
        }}
        source={{ uri: user?.imageUrl }}
      ></Image>
      <View className="flex-row bg-slate-950 gap-4 justify-center">
        <Text className="text-4xl text-white">{user?.firstName}</Text>
        <Text className="text-4xl text-white">{user?.lastName}</Text>
      </View>

      <Pressable
        onPress={() => {
          logout().then(() => router.replace("/(auth)"));
        }}
      >
        <Text className="text-white text-2xl">Logout</Text>
        <Ionicons name="log-out-outline" color={"#fff"} size={24} />
      </Pressable>
    </View>
  );
}
