import actionsTypes from '../constants/cart';

const INITIAL_STATE = {
  products: [],
};

const cartReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_PRODUCT: {
      // If state is empty, returns the product without spreading the state.
      if (state.products.length === 0) {
        return { ...state, products: [action.addedProduct] };
      }
      // search on the products object if the same product is already on cart.
      const updatedList = state.products.map((product) => {
        if (product.title === action.addedProduct.title) {
          // If it is, sums the quantity
          const updatedProductQuantity =
            Math.round(product.quantity) +
            Math.round(action.addedProduct.quantity);

          // then returns the updated item
          return {
            ...product,
            quantity: updatedProductQuantity,
          };
        }
        // else just returns the items normally
        return product;
      });

      return {
        ...state,
        products: [...updatedList, action.addedProduct],
      };
    }
    case actionsTypes.REMOVE_PRODUCT: {
      const newState = state.products.filter(
        (item) => item !== action.removedProduct
      );
      return { ...state, products: newState };
    }
    case actionsTypes.CLEAR_CART:
      return { ...state };
    default:
      return state;
  }
};

export default cartReducers;
