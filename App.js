import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import RecipeForm from "./components/recipeForm/RecipeForm";
import {
  storeRecipe,
  getRecipes,
  deleteAllRecipe,
} from "./services/recipeStore.service";

export default function App() {
  const [refresh, setRefresh] = useState(false);
  const handleOnSubmitRecipeForm = async (recipe) => {
    try {
      await storeRecipe(recipe);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnDeleteAllRecipe = async () => {
    try {
      await deleteAllRecipe();
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecipes().then((res) => console.log(res));
  }, [refresh]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RecipeForm onSubmit={handleOnSubmitRecipeForm} />

      <Button title="delete all recipes" onPress={handleOnDeleteAllRecipe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
    borderBottomWidth: 2,
    width: "100%",
  },
});
