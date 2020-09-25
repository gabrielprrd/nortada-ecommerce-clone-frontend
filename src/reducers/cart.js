import actionsTypes from '../constants/cart';

const INITIAL_STATE = {
  products: [],
};

const cartReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_PRODUCT: {
      if (state.products === undefined) {
        return { products: [action.product] };
      }
      return { ...state, products: [...state.products, action.product] };
    }
    case actionsTypes.REMOVE_PRODUCT: {
      const newState = state.products.filter(
        (item) => item !== action.removedProduct
      );
      return { products: newState };
    }
    case actionsTypes.CLEAR_CART:
      return { products: INITIAL_STATE.products };
    default:
      return state;
  }
};

export default cartReducers;
