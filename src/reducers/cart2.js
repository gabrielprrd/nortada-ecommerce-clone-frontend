import actionsTypes from '../constants/cart';

const INITIAL_STATE = {
  products: [],
};

const cartReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_PRODUCT: {
      // If there are products already, copy them to a new object and adds the new one
      // If the added product already exists inside the array, just updates its quantity
      const checkingProducts = state.products.map((product) => {
        if (action.product.title === product.title) {
          const newQuantity = action.product.quantity + product.quantity;
          const productToBeUpdated = {
            ...action.product,
            quantity: newQuantity,
          };
          return {
            products: [...state.products, { product: productToBeUpdated }],
          };
        }
        return {
          products: [...state.products, action.product],
        };
      });
      // If there are no projects, adds the product of action
      if (state.products === undefined) {
        return { products: [action.product] };
      }
      return checkingProducts;
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

// export default cartReducers;
