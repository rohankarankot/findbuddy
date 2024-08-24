import { DarkTheme, DefaultTheme } from "@react-navigation/native";

export const Light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FFA500", // color for primary elements
    background: "#FFFFFF", // White background
    card: "#FFEBCD", // Light for cards
    text: "#333333", // Dark text for readability
    border: "#FFA500", // borders
    notification: "#FF4500", // A more intense for notifications
  },
};

export const Dark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "#FFA500", // color for primary elements
    background: "#1A1A1A", // Dark background
    card: "#3a3434", // Darker for cards
    text: "#FFFFFF", // White text for readability
    border: "#111111", // borders
    notification: "#FF6347", // A more intense-red for notifications
  },
};
