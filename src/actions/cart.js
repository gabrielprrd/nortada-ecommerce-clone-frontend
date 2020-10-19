import actionsTypes from '../constants/cart';

const actions = {
  addProduct: (item) => ({
    type: actionsTypes.ADD_PRODUCT,
    addedProduct: item,
  }),
  removeProduct: (item) => ({
    type: actionsTypes.REMOVE_PRODUCT,
    removedProduct: item,
  }),
  clearCart: () => ({ type: actionsTypes.CLEAR_CART }),
};

export default actions;
