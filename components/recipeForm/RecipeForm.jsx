import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import ItemAddForm from "./ItemAddForm";

function RecipeForm({ onSubmit, onCancel }) {
  const [recipe, setRecipe] = useState({ title: "", items: [] });

  const onInputTextChange = (text, name) => {
    setRecipe((old) => {
      return { ...old, [name]: text };
    });
  };

  const resetForm = () => {
    setRecipe({ title: "", items: [] });
  };

  const onSubmitButtonClick = () => {
    if (!recipe.title) return;
    onSubmit(recipe);
    resetForm();
  };

  const onSubmitAddItem = (item) => {
    recipe.items.push(item);
    setRecipe((old) => {
      return { ...old, items: recipe.items };
    });
  };

  const handleOnDeleteItem = (e, itemIndex) => {
    const filteredItems = recipe.items.filter(
      (item, index) => index !== itemIndex
    );
    console.log(filteredItems);
    setRecipe((old) => {
      return { ...old, items: filteredItems };
    });
  };

  return (
    <View style={styles.container}>
      <Button title="retour" onPress={onCancel} />
      <Text>Créer une recette : </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onInputTextChange(text, "title")}
        placeholder="Nom de la recette"
        value={recipe.title}
        clearButtonMode="always"
      />
      <ItemAddForm onSubmit={onSubmitAddItem} />
      {recipe.items.map((item, index) => (
        <View style={styles.row} key={index}>
          <Text>
            {item.name} {item.count} {item.unit}
          </Text>
          <Button
            title="supprimer"
            onPress={(e) => handleOnDeleteItem(e, index)}
          />
        </View>
      ))}
      <Button title="Ajouter la recette" onPress={onSubmitButtonClick} />
    </View>
  );
}

RecipeForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

RecipeForm.defaultProps = {
  onSubmit: () => {},
  onCancel: () => {},
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    marginTop: 40,
    padding: 10,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RecipeForm;
