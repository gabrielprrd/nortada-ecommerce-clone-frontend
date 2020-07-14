import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import selectors from '../selectors/cart';

export default function localStorageUpdater() {
  const cart = useSelector(selectors.getCart);

  useEffect(() => {
    const saveToLocalStorage = () => {
      if (typeof Storage !== 'undefined') {
        localStorage.setItem('@nortada-ecommerce/cart', JSON.stringify(cart));
      }
    };
    saveToLocalStorage();
  }, [cart]);

  return <div />;
}
