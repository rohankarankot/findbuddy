import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomView = ({ children }: any) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default CustomView;
