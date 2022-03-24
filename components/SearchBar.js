import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const SearchBar = ({ handleChange }) => {
  const [input, setInput] = useState("");
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome size={25} name="search" />
      <TextInput
        value={input}
        onEndEditing={() => {
          if (input) handleChange(input);
          setInput("");
        }}
        onChangeText={(text) => {
          setInput(text);
        }}
        style={styles.input}
        placeholder="Restaurants, food"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
    flexDirection: "row",
  },
  elevation: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "87%",
  },
});
export default SearchBar;
