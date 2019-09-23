import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ListProductsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>List Products Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListProductsScreen;
