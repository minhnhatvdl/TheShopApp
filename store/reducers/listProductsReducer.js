import products from '../../data/products';

export const listProductsReducer = (listProducts = products, action) => {
  switch (action.type) {
    default:
      return listProducts;
  }
};
