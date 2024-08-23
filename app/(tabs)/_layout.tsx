import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable, Text } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { protectedRoutes } from "@/components/navigation/routes";
import { useTheme } from "@react-navigation/native";

const TabsPage = () => {
  const { isSignedIn } = useAuth();
  const theme = useTheme();
  const { signOut } = useAuth();

  const LogoutButton = () => {
    return (
      <Pressable onPress={() => onLogoutPress()} style={{ marginRight: 10 }}>
        <Ionicons name="log-out-outline" size={24} color={theme.colors.text} />
      </Pressable>
    );
  };

  const onLogoutPress = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to Logout",
      [
        {
          text: "Cancel", // Text for the cancel button

          style: "cancel", // Style for the cancel button (iOS only)
        },
        {
          text: "OK", // Text for the confirmation button
          onPress: () => signOut(),
        },
      ],
      { cancelable: false } // Dismiss the alert by tapping outside (false to disable this)
    );
  };
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {protectedRoutes?.map((route) => (
        <Tabs.Screen
          initialParams={{ onLogoutPress }}
          key={route.name}
          name={route.name}
          options={{
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name={route.icon as any} color={color} />
            ),
            tabBarLabel: ({ focused, color }) =>
              !focused ? null : (
                <Text style={{ color }} className="text-xs">
                  {route.title}
                </Text>
              ),
            headerShown: !!route.action,
            headerRight: () => <LogoutButton />,
            headerTitleStyle: { fontSize: 30 },
          }}
          redirect={!isSignedIn}
        />
      ))}
    </Tabs>
  );
};

export default TabsPage;
