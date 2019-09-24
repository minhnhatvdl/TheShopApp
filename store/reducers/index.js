import {combineReducers} from 'redux';
import {listProductsReducer} from './listProductsReducer';
import {cartReducer} from './cartReducer';
import {listOrdersReducer} from './listOrdersReducer';

export const reducers = combineReducers({
  listProducts: listProductsReducer,
  cart: cartReducer,
  listOrders: listOrdersReducer,
});
