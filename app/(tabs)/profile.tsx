import PrimaryButton from "@/components/blocks/primaryBtn";
import CustomText from "@/components/blocks/CustomText";
import { useClerk } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useTheme } from "@react-navigation/native";
import { Image, ScrollView, Text, View } from "react-native";

export default function TabTwoScreen() {
  const { user } = useClerk();
  const theme = useTheme();
  const route = useRoute<any>();
  const logout = route?.params?.onLogoutPress;
  return (
    <ScrollView className="flex-1">
      <View className="items-center">
        <Image
          source={{ uri: user?.imageUrl }}
          className="h-[150] w-[150] rounded-full m-4"
        />
        <CustomText className={"text-3xl text-center"}>{`Hello ${
          user?.firstName?.toUpperCase() as string
        } 🎉`}</CustomText>

        <CustomText className="text-lg px-8 pt-4 text-center">
          I won't store your data as authentication is handled by Google
        </CustomText>
        <View className="bg-slate-500 w-[300] h-[300] items-center justify-center mt-8">
          <CustomText className="text-lg">Not Decied what to add</CustomText>
        </View>
        <PrimaryButton onPress={() => logout()} className="mt-4">
          <View className="flex-row items-center justify-center">
            <Text className="mr-2 text-xl"> Logout</Text>
            <Ionicons
              name="log-out-outline"
              size={24}
              color={theme.colors.text}
            />
          </View>
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}
