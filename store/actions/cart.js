import {ADD_TO_CART, REMOVE_FROM_CART, RESET_CART} from './constants';
// add product to cart
export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
    },
  };
};
// remove product from cart
export const removeFromCart = productId => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId,
    },
  };
};
// reset cart
export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
