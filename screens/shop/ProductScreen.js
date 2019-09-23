import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';
import ProductDetail from '../../components/shop/ProductDetail';

const ProductScreen = ({navigation}) => {
  const productId = navigation.getParam('productId');
  const listProducts = useSelector(state => state.listProducts);
  const product = listProducts.find(e => e.id === productId);
  return (
    <View style={styles.screen}>
      <Text>Product Screen</Text>
      <ProductDetail {...product} />
    </View>
  );
};
// add a name of product in header
ProductScreen.navigationOptions = ({navigation}) => {
  const productName = navigation.getParam('productName');
  return {
    headerTitle: productName,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductScreen;
