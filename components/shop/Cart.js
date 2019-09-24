import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ScrollView,
  Button,
} from 'react-native';
import ProductInCart from './ProductInCart';
import {color} from '../../constants/color';
import {addAnOrder} from '../../store/actions/listOrders';
import {resetCart} from '../../store/actions/cart';

const Cart = ({navigation}) => {
  const cart = useSelector(state => state.cart);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const products = useSelector(state => {
    const {items} = state.cart;
    return Object.values(items).sort((a, b) => a.product.name > b.product.name);
  });
  const isNavigated = navigation.getParam('isNavigated');
  // dispatch
  const dispatch = useDispatch();
  // handle an order
  const handleAddOrder = () => {
    // add an order
    dispatch(addAnOrder(cart));
    // reset a cart
    dispatch(resetCart());
  };
  return (
    <ScrollView style={isNavigated ? '' : styles.container}>
      <View style={styles.blockTop}>
        <View style={styles.blockTotal}>
          <Text style={styles.total}>Total </Text>
          <Text style={styles.totalAmount}>${+totalAmount.toFixed(2)}</Text>
        </View>
        <Button
          title="Order now"
          color={color.primaryColor}
          disabled={products.length === 0}
          onPress={handleAddOrder}
        />
      </View>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductInCart {...item} />}
        keyExtractor={item => item.product.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
  },
  blockTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: color.primaryColor,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    backgroundColor: color.secondColor,
    padding: 5,
    margin: 10,
  },
  blockTotal: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.primaryColor,
  },
  totalAmount: {
    fontSize: 20,
    fontStyle: 'italic',
    color: color.thirdColor,
  },
});

export default Cart;
