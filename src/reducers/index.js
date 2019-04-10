import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import userCartReducer from './user_cart_reducer';

const rootReducer = combineReducers({
  user: userReducer,
  cart: userCartReducer
});

export default rootReducer;
