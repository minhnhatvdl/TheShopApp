import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {color} from '../../constants/color';

const HeaderLeftMenu = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Ionicons
        style={styles.icon}
        name="ios-menu"
        color={color.secondColor}
        size={32}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 20,
  },
});

export default HeaderLeftMenu;
