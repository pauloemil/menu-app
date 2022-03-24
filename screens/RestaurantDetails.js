import { useEffect } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

import useRestaurantPhotos from "../hooks/useRestaurantPhotos";

const RestaurantDetails = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [{ data, loading, error }, getPhotos] = useRestaurantPhotos();

  useEffect(() => {
    getPhotos(id);
  }, []);
  if (loading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  else if (error)
    return (
      <View>
        <Text>Error happened try gain please!</Text>
      </View>
    );
  else if (data !== null && data.length === 0)
    return (
      <View>
        <Text>No photos available for this pleace!</Text>
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={data.data}
          renderItem={({ item }) => (
            <Image
              style={styles.image}
              source={{
                uri: item.prefix + item.width + "x" + item.height + item.suffix,
              }}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  list: {
    width: "100%",
  },
});
export default RestaurantDetails;
