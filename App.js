import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import RecipeForm from "./components/recipeForm/RecipeForm";
import {
  storeRecipe,
  getRecipes,
  deleteAllRecipe,
  deleteRecipeById,
} from "./services/recipeStore.service";
import RecipeList from "./components/recipes/RecipeList";

export default function App() {
  const [refresh, setRefresh] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [isCreatingRecipe, setIsCreatingRecipe] = useState(false);

  const handleOnSubmitRecipeForm = async (recipe) => {
    try {
      await storeRecipe(recipe);
      setRefresh(!refresh);
      toggleCreatingRecipe();
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnDeleteRecipe = async (recipeId) => {
    try {
      await deleteRecipeById(recipeId);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCreatingRecipe = () => {
    setIsCreatingRecipe(!isCreatingRecipe);
  };

  useEffect(() => {
    getRecipes().then((res) => setRecipes(res));
  }, [refresh]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {isCreatingRecipe ? (
        <RecipeForm
          onSubmit={handleOnSubmitRecipeForm}
          onCancel={toggleCreatingRecipe}
        />
      ) : (
        <>
          <RecipeList recipes={recipes} onDelete={handleOnDeleteRecipe} />
          <Button title="Ajouter une recette" onPress={toggleCreatingRecipe} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "100%",
    padding: 10
  },
});
