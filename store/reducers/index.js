import {combineReducers} from 'redux';
import {listProductsReducer} from './listProductsReducer';

export const reducers = combineReducers({
  listProducts: listProductsReducer,
});
