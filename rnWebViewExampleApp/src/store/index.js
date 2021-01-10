import { createStore } from 'redux';
import cartItemReducer from '../reducers/carItem';

const store = createStore(cartItemReducer);

export default store;