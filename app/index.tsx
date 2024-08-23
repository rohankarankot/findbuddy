import { ActivityIndicator, Text, View } from "react-native";

const StartPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />

      <Text>HeLLoo Init</Text>
    </View>
  );
};

export default StartPage;
