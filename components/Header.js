import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.simpleText}>Grab your</Text>
      <Text style={styles.mainText}>delicious meal!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 25,
  },
  simpleText: {
    fontSize: 30,
  },
  mainText: {
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default Header;
