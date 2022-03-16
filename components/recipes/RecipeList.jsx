import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

function RecipeList({ recipes, onDelete }) {
  return (
    <ScrollView style={styles.scrollContainer}>
      {recipes.map((recipe) => (
        <Pressable key={recipe.id} style={styles.recipeContainer}>
          <Text>{recipe.title}</Text>
          <Button title="supprimer" onPress={() => onDelete(recipe.id)} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onDelete: PropTypes.func,
};

RecipeList.defaultProps = {
  recipes: [],
  onDelete: () => {},
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 0.5,
    padding: 10,
    marginTop: 60,
  },
  recipeContainer: {
    backgroundColor: "hsl(80,80%,80%)",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 3,
  },
});

export default RecipeList;
