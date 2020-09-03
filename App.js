import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Counter from "./src/screens/Counter";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Counter:Counter
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Random Counter App"
    }
  }
);

export default createAppContainer(navigator);
