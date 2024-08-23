import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

function GoogleLogin({ onSelectAuth }: any) {
  return (
    <TouchableOpacity
      onPress={() => onSelectAuth()}
      className="flex flex-row p-4 align-baseline bg-orange-600 rounded-full"
    >
      <Ionicons name="logo-google" color={"#fff"} size={24} />
      <Text className="text-xl text-white pl-2">Continue with Google</Text>
    </TouchableOpacity>
  );
}

export default GoogleLogin;
