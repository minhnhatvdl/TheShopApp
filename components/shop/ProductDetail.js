import React, {useCallback} from 'react';
import {StyleSheet, View, Text, ScrollView, Image, Button} from 'react-native';
import {color} from '../../constants/color';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/actions/cart';
import ProductItem from '../../models/ProductItem';

const ProductDetail = ({id, ownerId, name, imageUrl, description, price}) => {
  const dispatch = useDispatch();
  const handleAddToCart = useCallback(() => {
    dispatch(
      addToCart(
        new ProductItem(id, ownerId, name, imageUrl, description, price),
      ),
    );
  }, [dispatch, id, ownerId, name, imageUrl, description, price]);
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <View style={styles.details}>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Button
        style={styles.button}
        title="Add to cart"
        color={color.primaryColor}
        onPress={handleAddToCart}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  price: {
    color: color.thirdColor,
    fontSize: 20,
  },
  description: {
    color: color.primaryColor,
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default ProductDetail;
