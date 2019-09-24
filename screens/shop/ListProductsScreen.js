import React from 'react';
import ListProducts from '../../components/shop/ListProducts';
import HeaderRightCart from '../../components/shop/HeaderRightCart';
import HeaderLeftMenu from '../../components/shop/HeaderLeftMenu';

const ListProductsScreen = ({navigation}) => {
  return <ListProducts navigation={navigation} />;
};

ListProductsScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'All products',
    headerRight: <HeaderRightCart navigation={navigation} />,
    headerLeft: <HeaderLeftMenu navigation={navigation} />,
  };
};

export default ListProductsScreen;
