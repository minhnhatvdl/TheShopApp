import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {color} from '../constants/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListProductsScreen from '../screens/shop/ListProductsScreen';
import ProductScreen from '../screens/shop/ProductScreen';
import CartScreen from '../screens/shop/CartScreen';
import ListOrdersScreen from '../screens/shop/ListOrdersScreen';
// setting default navigation options
const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: color.primaryColor,
  },
  headerTintColor: color.secondColor,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
// shop navigator
const ShopNavigator = createStackNavigator(
  {
    ListProducts: {
      screen: ListProductsScreen,
    },
    Product: {
      screen: ProductScreen,
    },
    Cart: {
      screen: CartScreen,
    },
  },
  {
    defaultNavigationOptions,
  },
);
// shop tabs navigator
const ShopTabsNavigator = createBottomTabNavigator(
  {
    ListProductsTab: ShopNavigator,
    CartTab: CartScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = 'ios-list';
        if (routeName === 'CartTab') {
          iconName = 'ios-cart';
        }
        return <Ionicons name={iconName} size={32} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: color.primaryColor,
      inactiveTintColor: color.thirdColor,
    },
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Ionicons name="ios-list" size={32} color={tintColor} />
      ),
    },
  },
);
// order navigator
const OrderNavigator = createStackNavigator(
  {
    ListOrders: ListOrdersScreen,
  },
  {
    defaultNavigationOptions,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Ionicons name="ios-done-all" size={32} color={tintColor} />
      ),
    },
  },
);
// drawer navigator
const DrawerNavigator = createDrawerNavigator(
  {
    'All Products': ShopTabsNavigator,
    Orders: OrderNavigator,
  },
  {
    contentOptions: {
      activeTintColor: color.primaryColor,
      inactiveTintColor: color.thirdColor,
    },
  },
);

export default createAppContainer(DrawerNavigator);
