import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Link } from "expo-router";
import { Text } from "../components/Themed";

interface ButtonProps extends TouchableOpacityProps {
  href: string;
  text: string;
  className?: string;
  variant?: "primary" | "secondary" | "link";
  icon?: any;
}

const variantStyles: { [key in NonNullable<ButtonProps["variant"]>]: string } =
  {
    primary: "p-3 bg-orange-600 rounded-3xl ",
    secondary: "p-3 bg-gray-600 text-white rounded-3xl",
    link: "p-3 bg-transparent text-blue-600 ",
  };

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  className = "",
  variant = "primary",
  icon,
  ...props
}) => {
  const btnVariant = variantStyles[variant];
  return (
    <Link href={href as string} asChild>
      <TouchableOpacity
        className={`flex-row justify-center items-center gap-2  ${btnVariant} ${className} pb-5`}
        {...props}
      >
        {icon}
        <Text className={variant === "link" ? "underline" : ""}>{text}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default Button;
