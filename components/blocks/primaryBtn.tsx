import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styled } from "nativewind";

const PrimaryButton = ({
  children,
  onPress,
  className,
  ...rest
}: {
  children: any;
  onPress?: () => void;
  className?: string;
}) => {
  const StyledTouchableOpacity = styled(TouchableOpacity);

  return (
    <StyledTouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={"bg-orange-700 p-4 rounded-3xl w-1/5" + className}
      {...rest}
    >
      <Text className="text-white text-center ">{children}</Text>
    </StyledTouchableOpacity>
  );
};

export default PrimaryButton;
