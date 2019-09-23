import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import Product from './Product';

const ListProducts = ({navigation}) => {
  const listProducts = useSelector(state => state.listProducts);
  return (
    <FlatList
      data={listProducts}
      renderItem={({item}) => <Product {...item} navigation={navigation} />}
    />
  );
};

export default ListProducts;
