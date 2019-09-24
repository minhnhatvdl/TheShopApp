import {ADD_AN_ORDER} from '../actions/constants';
import OrderItem from '../../models/OrderItem';

const initState = []; // array of OrderItem

export const listOrdersReducer = (listOrders = initState, action) => {
  switch (action.type) {
    case ADD_AN_ORDER:
      return [
        ...listOrders,
        new OrderItem(new Date().toString(), action.payload.cart, new Date()),
      ];
    default:
      return listOrders;
  }
};
