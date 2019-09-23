import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {color} from '../../constants/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductDetail = ({id, name, imageUrl, description, price}) => {
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <View style={styles.details}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons
          style={styles.icon}
          name="ios-cart"
          size={48}
          color={color.primaryColor}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
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
  icon: {
    textAlign: 'center',
  },
});

export default ProductDetail;
