import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ListProductsScreen from '../screens/shop/ListProductsScreen';
import {color} from '../constants/color';

const ShopNavigator = createStackNavigator(
  {
    ListProducts: {
      screen: ListProductsScreen,
      navigationOptions: {
        headerTitle: 'All products',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: color.primaryColor,
      },
      headerTintColor: color.secondColor,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(ShopNavigator);
