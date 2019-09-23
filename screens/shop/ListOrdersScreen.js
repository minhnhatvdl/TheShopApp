import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ListOrdersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>List Orders Screen</Text>
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

export default ListOrdersScreen;
