import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {color} from '../../constants/color';
import ProductShortDetail from './ProductShortDetail';
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
  const [showDetail, setShowDetail] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <Text style={styles.total}>${+cart.totalAmount.toFixed(2)}</Text>
        <Text style={styles.date}>{getReadableDate(date)}</Text>
      </View>
      <Button
        title={showDetail ? 'Hide details' : 'Show details'}
        color={color.primaryColor}
        onPress={() => setShowDetail(state => !state)}
      />
      {showDetail &&
        Object.values(cart.items).map(e => (
          <ProductShortDetail key={e.product.id} {...e} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 2,
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
    color: color.primaryColor,
  },
  date: {
    fontSize: 16,
    color: color.thirdColor,
  },
});

export default Order;
