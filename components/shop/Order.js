import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {color} from '../../constants/color';
// get a readable date
const getReadableDate = date => {
  return date.toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

const Order = ({id, cart, date}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <Text style={styles.total}>${cart.totalAmount}</Text>
        <Text style={styles.date}>{getReadableDate(date)}</Text>
      </View>
      <Button title="Show details" color={color.primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: color.primaryColor,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    backgroundColor: color.secondColor,
    padding: 10,
    margin: 10,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: 16,
    fontStyle: 'italic',
    color: color.thirdColor,
  },
  date: {
    fontSize: 16,
    color: color.thirdColor,
  },
});

export default Order;
