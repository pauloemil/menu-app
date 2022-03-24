import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";

import Category from "../components/Category";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Restaurants from "../components/Restaurants";

export default function Home() {
  const [category, setCategory] = useState("Burger");
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar handleChange={setCategory} />
      <Category name={category} handlePress={setCategory} />
      <Restaurants category={category} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(253,253,253)",
  },
});
