import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

import CategoryItem from "./CategoryItem";
import list from "../CategoriesList";

const Category = ({ name, handlePress }) => {
  return (
    <View>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            active={name === item.name}
            index={index}
            handlePress={() => handlePress(item.name)}
          />
        )}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default Category;
