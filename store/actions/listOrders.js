import {ADD_AN_ORDER} from './constants';

// add an order
export const addAnOrder = cart => {
  return {
    type: ADD_AN_ORDER,
    payload: {
      cart,
    },
  };
};
