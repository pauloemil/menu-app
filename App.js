import "react-native-gesture-handler";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const navigator = createStackNavigator(
  {
    Home: Home,
    Restaurant: RestaurantDetails,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "BusinessSearch",
    },
  }
);

export default createAppContainer(navigator);
