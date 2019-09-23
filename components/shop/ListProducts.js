import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import Product from './Product';

const ListProducts = () => {
  const listProducts = useSelector(state => state.listProducts);
  return (
    <FlatList
      data={listProducts}
      renderItem={({item}) => <Product {...item} />}
    />
  );
};

export default ListProducts;
