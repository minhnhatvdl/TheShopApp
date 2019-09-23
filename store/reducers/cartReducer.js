import {ADD_TO_CART} from '../actions/constants';
import CartItem from '../../models/CartItem';

const initState = {
  items: {}, // Objects of CartItem
  totalAmount: 0,
};

export const cartReducer = (cart = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const {items, totalAmount} = cart;
      const {product} = action.payload;
      const newQuantity = items[product.id]
        ? items[product.id].quantity + 1
        : 1;
      return {
        items: {
          ...items,
          [product.id]: new CartItem(newQuantity, product),
        },
        totalAmount: totalAmount + product.price,
      };
    default:
      return cart;
  }
};
