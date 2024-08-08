import Button from "@/components/Button";
import { Text, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-4xl">Welcome</Text>
      <Button
        variant="primary"
        href={"/(tabs)"}
        text={"Continue with Google"}
        icon={<FontAwesome name="google" color={"white"} size={25} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
