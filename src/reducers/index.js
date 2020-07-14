import { combineReducers } from 'redux';
import cartReducers from './cart';

const reducers = combineReducers({
  cartReducers,
});

export default reducers;
