import AsyncStorage from "@react-native-async-storage/async-storage";

const types = { RECIPES: "recipes" };

const storeRecipe = async (recipe) => {
  if (!recipe.name || !recipe.items > 0) {
    throw err;
  }
  try {
    const recipes = await getRecipes();
    if (!recipes) {
      await AsyncStorage.setItem(types.RECIPES, JSON.stringify([recipe]));
    } else {
      recipes.push(recipe);
      await AsyncStorage.setItem(types.RECIPES, JSON.stringify(recipes));
    }
  } catch (err) {
    throw err;
  }
};

const getRecipes = async () => {
  try {
    const recipes = await AsyncStorage.getItem(types.RECIPES);
    return JSON.parse(recipes);
  } catch (err) {
    throw err;
  }
};

const deleteRecipe = async (recipeId) => {
  try {
    const recipes = await getRecipes();
    const filteredRecipes = recipes.filter((recipe) => recipe.id !== recipeId);
    await AsyncStorage.setItem(types.RECIPES, filteredRecipes);
  } catch (err) {
    throw err;
  }
};

export { storeRecipe, getRecipes, deleteRecipe };
