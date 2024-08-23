import {
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import CustomText from "@/components/blocks/CustomText";
import { Marquee } from "@animatereactnative/marquee";
import CustomView from "@/components/blocks/CustomView";

const data = Array.from({ length: 10 }, (_, index) => ({
  key: index.toString(),
}));

const Home = () => {
  const renderItem = ({ item }: { item: { key: string } }) => (
    <View className="h-[120] w-[200] bg-purple-600 rounded-lg mx-2" />
  );

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} // Adjust as needed
    >
      <CustomView>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar />
          <View className="flex-[0.3]">
            <Marquee spacing={200} speed={1}>
              <CustomText className="text-xl mb-3">
                Choose your preferred rides posted by fellow cabmates
              </CustomText>
            </Marquee>
            <View className="bg-red-300 h-[150] p-3">
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View className="flex-[0.7] pt-5">
            <CustomText className="text-xl">Check below</CustomText>
            <TextInput
              className="border border-gray-300 p-2 mt-2 rounded"
              placeholder="Type here..."
            />
          </View>
        </ScrollView>
      </CustomView>
    </KeyboardAvoidingView>
  );
};

export default Home;
