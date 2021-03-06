import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {color} from '../../constants/color';
import {addToCart} from '../../store/actions/cart';
import ProductItem from '../../models/ProductItem';

const Product = ({
  id,
  ownerId,
  name,
  imageUrl,
  description,
  price,
  navigation,
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = useCallback(() => {
    dispatch(
      addToCart(
        new ProductItem(id, ownerId, name, imageUrl, description, price),
      ),
    );
  }, [dispatch, id, ownerId, name, imageUrl, description, price]);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Product', {productId: id, productName: name})
      }>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: imageUrl}} />
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <View style={styles.listButtons}>
          <Button
            title="View"
            color={color.primaryColor}
            onPress={() =>
              navigation.navigate('Product', {productId: id, productName: name})
            }
          />
          <Button
            title="Add"
            color={color.primaryColor}
            onPress={handleAddToCart}
          />
        </View>
      </View>
    </TouchableOpacity>
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
});

export default Product;
