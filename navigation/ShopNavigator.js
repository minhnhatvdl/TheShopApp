import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {color} from '../constants/color';
import ListProductsScreen from '../screens/shop/ListProductsScreen';
import ProductScreen from '../screens/shop/ProductScreen';

const ShopNavigator = createStackNavigator(
  {
    ListProducts: {
      screen: ListProductsScreen,
      navigationOptions: {
        headerTitle: 'All products',
      },
    },
    Product: {
      screen: ProductScreen,
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
