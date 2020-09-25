export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('@nortada-ecommerce/cart');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('@nortada-ecommerce/cart', serializedState);
  } catch (err) {
    console.log(err);
  }
};
