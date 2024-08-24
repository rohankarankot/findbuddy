import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import ModalComponent from "../modal";
import CustomText from "../blocks/CustomText";
import PrimaryButton from "../blocks/primaryBtn";
import CustomTextInput from "../blocks/CustomTextInput";
import { HEIGHT } from "@/helpers/Dimentions";

const suggestionsData = [
  "Solapur",
  "Gacchibowli",
  "Pune",
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  // Add more suggestions here if needed
];

const LocationSearchModal = ({ modalVisible, setModalVisible }: any) => {
  const theme = useTheme();

  const [searchText, setSearchText] = useState("");

  const filteredSuggestions = suggestionsData.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderSuggestion = ({ item }: { item: string }) => (
    <TouchableOpacity className="p-2">
      <CustomText className="text-lg">{item}</CustomText>
    </TouchableOpacity>
  );

  return (
    <ModalComponent isVisible={modalVisible}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <View
          className={` bg-[${theme.colors.card}] items-center pt-10`}
          style={{
            backgroundColor: theme.colors.card,
            height: searchText.length > 0 ? HEIGHT / 2 : HEIGHT / 3.5,
          }}
        >
          <Ionicons
            name="close"
            size={25}
            className="m-4 bg-slate-100"
            color={theme.colors.text}
            style={{ position: "absolute", top: 10, right: 10 }}
            onPress={() => {
              setModalVisible(false);
            }}
          />
          <CustomText className="text-2xl">Location</CustomText>
          <View className="flex-row items-center my-2">
            <CustomTextInput
              placeholder="Search for location..."
              value={searchText}
              onChangeText={setSearchText}
              className="flex-1"
            />
            <Ionicons name="locate-sharp" size={30} color={theme.colors.text} />
          </View>
          {searchText.length > 0 && (
            <View className="w-full px-5 flex-1">
              <FlatList
                data={filteredSuggestions.slice(0, 7)} // Limit suggestions to 5
                renderItem={renderSuggestion}
                keyExtractor={(item) => item}
                className={`max-h-[200]`}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: theme.colors.border,
                  overflow: "scroll",
                  height: HEIGHT / 3,
                }}
              />
            </View>
          )}
          <PrimaryButton
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            className="absolute bottom-10 w-1/3"
          >
            Update
          </PrimaryButton>
        </View>
      </KeyboardAvoidingView>
    </ModalComponent>
  );
};

export default LocationSearchModal;
