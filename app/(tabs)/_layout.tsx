import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { protectedRoutes } from "@/components/navigation/routes";

export const LogoutButton = () => {
  const { signOut } = useAuth();

  return (
    <Pressable onPress={() => signOut()} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} />
    </Pressable>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      {protectedRoutes?.map((route) => (
        <Tabs.Screen
          key={route.name}
          name={route.name}
          options={{
            tabBarIcon: ({ color, size }) => (
              <TabBarIcon name={route.icon as any} color={color} />
            ),
            tabBarLabel: ({ focused }) =>
              focused ? null : <Text>{route.title}</Text>,
            headerShown: !!route.action,
            headerRight: () => <LogoutButton />,
          }}
          redirect={!isSignedIn}
        />
      ))}
    </Tabs>
  );
};

export default TabsPage;
