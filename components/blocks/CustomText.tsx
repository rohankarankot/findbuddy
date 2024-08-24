import { Text, useColorScheme } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { styled } from "nativewind";

// Define the styled component outside of the component function
const StyledText = styled(Text);

interface CustomTextProps {
  children: React.ReactNode;
  className?: string; // className is optional and can be used with NativeWind
}

const CustomText: React.FC<CustomTextProps> = ({ children, ...rest }) => {
  const colorTheme = useColorScheme();

  return (
    <StyledText
      className={`text-${
        colorTheme == "dark" ? "white" : "black"
      } font-[SpaceMono]`}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default CustomText;
