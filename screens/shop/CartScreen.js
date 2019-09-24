import React from 'react';
import Cart from '../../components/shop/Cart';

const CartScreen = ({navigation}) => {
  return <Cart navigation={navigation} />;
};

CartScreen.navigationOptions = {
  headerTitle: 'Cart',
};

export default CartScreen;
