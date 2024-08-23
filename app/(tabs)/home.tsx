import { View, Text } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import CustomView from "@/components/CustomView";

const Home = () => {
  const { user } = useUser();

  return (
    <CustomView>
      <Text>Welcome, {user?.emailAddresses[0].emailAddress} 🎉</Text>
    </CustomView>
  );
};

export default Home;
