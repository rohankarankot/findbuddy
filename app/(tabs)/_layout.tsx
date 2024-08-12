import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useNavigation } from "expo-router";
import { Alert, Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useUser } from "@clerk/clerk-expo";
import { NavigationProp } from "@react-navigation/native";
import { Text } from "@/components/Themed";
import { Ionicons } from "@expo/vector-icons";

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
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          title: "Explore at you Location",
          tabBarIcon: ({ color }) => <TabBarIcon name="road" color={color} />,
          headerRight: () => {
            return (
              <Pressable
                className="flex flex-row gap-1"
                onPress={() => {
                  Alert.alert("Todo");
                }}
              >
                <Text style={{ color: "#fff" }}>Solapur</Text>
                <Ionicons
                  style={{ color: "#fff" }}
                  name="location-sharp"
                  size={20}
                />
              </Pressable>
            );
          },
        }}
      />
      <Tabs.Screen
        name="createEvent"
        options={{
          title: "Create Event",
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
