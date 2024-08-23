import React from "react";
import { Stack } from "expo-router";

const PublicLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "Login",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default PublicLayout;
