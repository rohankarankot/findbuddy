import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, useNavigation } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useUser } from "@clerk/clerk-expo";
import { NavigationProp } from "@react-navigation/native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { user } = useUser();
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    if (!user) {
      navigation.reset({
        index: 0,
        routes: [{ name: "(auth)" }], // Replace "(tabs)" with the main app screen's name
      });
    }
  }, [user]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <TabBarIcon name="road" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="plus-square" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
