import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {color} from '../../constants/color';

const HeaderRightCart = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart', {isNavigated: true})}>
      <Ionicons
        style={styles.icon}
        name="ios-cart"
        size={32}
        color={color.secondColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 20,
  },
});

export default HeaderRightCart;
