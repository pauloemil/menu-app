import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CategoryItem = (props) => {
  const { name, imageUrl, active, index, handlePress } = props;

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 1 ? { marginLeft: 10 } : { marginLeft: 10 },
          active ? { backgroundColor: "gold" } : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageFrame}>
          <Image style={styles.image} source={imageUrl} />
        </View>
        <Text style={styles.catName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 25,

    width: 80,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  elevation: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
  },
  imageFrame: {
    backgroundColor: "white",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: 35, height: 35, marginBottom: 10 },
  catName: {
    fontWeight: "bold",
  },
});
export default CategoryItem;
