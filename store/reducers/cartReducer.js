import {ADD_TO_CART, REMOVE_FROM_CART, RESET_CART} from '../actions/constants';
import CartItem from '../../models/CartItem';

const initState = {
  items: {}, // { productId => CartItem }
  totalAmount: 0,
};

export const cartReducer = (cart = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
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
    }
    case REMOVE_FROM_CART: {
      const {items, totalAmount} = cart;
      const {productId} = action.payload;
      const {quantity, product} = items[productId];
      if (quantity > 1) {
        return {
          items: {
            ...items,
            [productId]: new CartItem(quantity - 1, product),
          },
          totalAmount: totalAmount - product.price,
        };
      } else {
        return {
          items: Object.keys(items).reduce((object, key) => {
            if (key !== productId) object[key] = items[key];
            return object;
          }, {}),
          totalAmount: totalAmount - product.price,
        };
      }
    }
    case RESET_CART:
      return {...initState};
    default:
      return cart;
  }
};
