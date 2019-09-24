import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {color} from '../../constants/color';

const ProductShortDetail = ({quantity, product}) => {
  return (
    <View style={styles.details}>
      <Text style={styles.quantity}>{quantity}</Text>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantity: {
    color: color.primaryColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: color.thirdColor,
    fontSize: 16,
  },
  name: {
    color: color.primaryColor,
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default ProductShortDetail;
