import React from 'react';
import {useSelector} from 'react-redux';
import ProductDetail from '../../components/shop/ProductDetail';

const ProductScreen = ({navigation}) => {
  const productId = navigation.getParam('productId');
  const listProducts = useSelector(state => state.listProducts);
  const product = listProducts.find(e => e.id === productId);
  return <ProductDetail {...product} />;
};
// add a name of product in header
ProductScreen.navigationOptions = ({navigation}) => {
  const productName = navigation.getParam('productName');
  return {
    headerTitle: productName,
  };
};

export default ProductScreen;
