// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { useTheme } from "@react-navigation/native";
import { type ComponentProps } from "react";

export function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
  const theme = useTheme();
  return (
    <Ionicons
      size={28}
      style={[{ marginBottom: -3, color: theme.colors.text }, style]}
      {...rest}
    />
  );
}
