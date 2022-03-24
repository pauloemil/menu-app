import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect } from "react";

import useRestaurants from "../hooks/useRestaurants";

import RestaurantItem from "./RestaurantItem";

const Restaurants = ({ category }) => {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(category);
  }, [category]);

  return loading ? (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  ) : error ? (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Error happened! try again please</Text>
    </View>
  ) : data !== null && data.length === 0 ? (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>
        Not found! Try searching about something else
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.highlighted}>Top Restaurants</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <RestaurantItem
            name={item.name}
            location={item.location.formatted_address}
            imageUrl={
              item.categories[0].icon.prefix +
              "64" +
              item.categories[0].icon.suffix
            }
            id={item.fsq_id}
          />
        )}
        keyExtractor={(item) => item.fsq_id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  loadingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  highlighted: {
    fontWeight: "bold",
    fontSize: 22,
  },
  list: {
    padding: 5,
    marginBottom: 20,
  },
});
export default Restaurants;
