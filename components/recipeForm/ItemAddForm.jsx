import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

function ItemAddForm({ onSubmit }) {
  const [item, setItem] = useState({ name: "", count: "", unit: "g" });

  const onInputTextChange = (text, name) => {
    setItem((old) => {
      return { ...old, [name]: text };
    });
  };

  const resetForm = () => {
    setItem({ name: "", count: "", unit: "" });
  };

  const onSubmitButtonClick = () => {
    if (!item.name || !item.count) return;
    onSubmit(item);
    resetForm();
  };

  return (
    <View>
      <Text>Ajouter un ingredient: </Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onInputTextChange(text, "name")}
          placeholder="Nom"
          value={item.name}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onInputTextChange(text, "count")}
          placeholder="Quantité"
          value={item.count}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onInputTextChange(text, "unit")}
          placeholder="Unité"
          value={item.unit}
        />
        <Button title="Ajouter un ingredient" onPress={onSubmitButtonClick}  />
      </View>
    </View>
  );
}

ItemAddForm.propTypes = {
  onSubmit: PropTypes.func,
};

ItemAddForm.defaultProps = {
  onSubmit: () => {},
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 10,
    marginHorizontal: 5,
    padding: 10,
  },
});

export default ItemAddForm;
