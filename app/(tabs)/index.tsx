import { TouchableOpacity } from "react-native";

import { Text, View } from "@/components/Themed";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function TabOneScreen() {
  const { user } = useUser();
  console.log("user: ", user);
  const { signOut } = useClerk();
  return (
    <View>
      <Text className="text-white">"Hello"{user?.fullName}</Text>
      <TouchableOpacity
        className="bg-white flex-row  items-center p-4 rounded-full mt-4 "
        onPress={() =>
          signOut().then(() => {
            router.replace("/(auth)");
          })
        }
      >
        <Text className="ml-2 text-black">Logout</Text>
        <Ionicons name="log-out" size={24} />
      </TouchableOpacity>
    </View>
  );
}
