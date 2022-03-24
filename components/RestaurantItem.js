import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import { withNavigation } from "react-navigation";
const RestaurantItem = ({ imageUrl, name, location, id, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", { id: id })}
    >
      <View style={[styles.container, styles.elevation]}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.innerContainer}>
          <Text numberOfLines={1} style={styles.restaurantName}>
            {name}
          </Text>
          <Text numberOfLines={2} style={styles.restaurantlLocation}>
            {location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "95%",
    height: 90,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "gold",
  },
  innerContainer: {
    marginLeft: 20,
    flex: 1,
  },
  restaurantName: {
    fontWeight: "bold",
    fontSize: 22,
  },
  restaurantlLocation: {
    fontSize: 15,
  },
  elevation: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
  },
});

export default withNavigation(RestaurantItem);
