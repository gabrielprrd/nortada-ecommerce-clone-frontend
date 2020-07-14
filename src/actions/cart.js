import actionsTypes from '../constants/cart';

const actions = {
  addProduct: () => ({
    type: actionsTypes.ADD_PRODUCT,
  }),
  removeProduct: () => ({
    type: actionsTypes.REMOVE_PRODUCT,
  }),
  clearCart: () => ({ type: actionsTypes.CLEAR_CART }),
};

export default actions;
