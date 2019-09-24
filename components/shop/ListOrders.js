import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Order from './Order';

const ListOrders = () => {
  const listOrders = useSelector(state => state.listOrders);
  console.log(listOrders);
  return (
    <FlatList data={listOrders} renderItem={({item}) => <Order {...item} />} />
  );
};

export default ListOrders;
