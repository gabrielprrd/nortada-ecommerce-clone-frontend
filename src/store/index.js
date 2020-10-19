import { createStore } from 'redux';
import reducers from '../reducers';
import {
  saveStateToLocalStorage,
  loadStateFromLocalStorage,
} from './localStorage';

const persistedState = loadStateFromLocalStorage();

const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
  console.log('Cart State: ', store.getState().cartReducers);
});

export default store;
