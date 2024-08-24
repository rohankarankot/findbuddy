import React from "react";
import { TextInput as RNTextInput, TextInputProps } from "react-native";
import { styled } from "nativewind";
import { useTheme } from "@react-navigation/native";

const StyledTextInput = styled(RNTextInput);

interface CustomTextInputProps extends TextInputProps {
  className?: string;
  placeholder?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  className = "",
  style,
  placeholder,
  ...props
}) => {
  const theme = useTheme();

  return (
    <StyledTextInput
      placeholder={placeholder}
      selectionColor={theme.colors.text}
      placeholderTextColor={theme.colors.text}
      className={`border-b border-b-gray-300 pl-1 pb-1 mt-2 w-[250] mr-2`}
      {...props}
      style={{ color: theme.colors.text }}
    />
  );
};

export default CustomTextInput;
