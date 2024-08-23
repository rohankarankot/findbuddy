import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomView = ({ children }: any) => {
  return (
    <SafeAreaView className="flex-1 bg-slate-300 justify-center items-center">
      {children}
    </SafeAreaView>
  );
};

export default CustomView;
