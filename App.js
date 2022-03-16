import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { storeRecipe } from "./services/recipeStore.service";

export default function App() {
  storeRecipe({ name: "name test", items: ["item 1", "item 2"] });

  return (
    <View style={styles.container}>
      <Text>Hello there !</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
