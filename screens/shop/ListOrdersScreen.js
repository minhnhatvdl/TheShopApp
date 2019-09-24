import React from 'react';
import HeaderRightCart from '../../components/shop/HeaderRightCart';
import HeaderLeftMenu from '../../components/shop/HeaderLeftMenu';
import ListOrders from '../../components/shop/ListOrders';

const ListOrdersScreen = () => {
  return <ListOrders />;
};

ListOrdersScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Orders',
    headerRight: <HeaderRightCart navigation={navigation} />,
    headerLeft: <HeaderLeftMenu navigation={navigation} />,
  };
};

export default ListOrdersScreen;
