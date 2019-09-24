import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {color} from '../../constants/color';
import {removeFromCart} from '../../store/actions/cart';

const ProductInCart = ({quantity, product}) => {
  const dispatch = useDispatch();
  const handleRemoveProduct = useCallback(() => {
    dispatch(removeFromCart(product.id));
  }, [dispatch, product.id]);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: product.imageUrl}} />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <View style={styles.listButtons}>
        <Text style={styles.quantity}>Quantity: {quantity}</Text>
        <Button
          title="Remove"
          color={color.primaryColor}
          onPress={handleRemoveProduct}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    backgroundColor: color.secondColor,
    height: 300,
    margin: 10,
  },
  imageContainer: {
    width: '100%',
    height: '65%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
  },
  name: {
    fontSize: 20,
    color: color.primaryColor,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: color.thirdColor,
  },
  listButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '15%',
  },
  quantity: {
    fontSize: 18,
    color: color.primaryColor,
    fontWeight: 'bold',
  },
});
export default ProductInCart;
