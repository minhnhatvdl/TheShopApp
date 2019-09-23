import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {color} from '../constants/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListProductsScreen from '../screens/shop/ListProductsScreen';
import ProductScreen from '../screens/shop/ProductScreen';
import CartScreen from '../screens/shop/CartScreen';

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

const ShopTabsNavigator = createBottomTabNavigator(
  {
    ListProductsTab: ShopNavigator,
    CartTab: CartScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = 'ios-list-box';
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
  },
);

export default createAppContainer(ShopTabsNavigator);
