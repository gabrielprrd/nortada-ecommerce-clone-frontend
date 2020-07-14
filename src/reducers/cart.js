import actionsTypes from '../constants/cart';

const INITIAL_STATE = {
  products: [],
};

const cartReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_PRODUCT:
      return { ...state, products: [state.products] };
    case actionsTypes.REMOVE_PRODUCT:
      // needs to create a way to remove the item
      // maybe the best way is on the cart component change the state and just put it here
      return { ...state, products: [state.products] };
    case actionsTypes.CLEAR_CART:
      return { products: INITIAL_STATE.products };
    default:
      return state;
  }
};

export default cartReducers;
