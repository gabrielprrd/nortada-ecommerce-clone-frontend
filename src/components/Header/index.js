import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import selectors from '../../selectors/cart';

export default function Header() {
  const cartLength = useSelector(selectors.getCart).length;
  const [cartCounter, setCartCounter] = useState(cartLength);

  useEffect(() => {
    setCartCounter(cartLength);
  }, [cartLength]);

  return (
    <header>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/cart">
        <p>Cart</p>
        <p>{cartCounter}</p>
      </NavLink>
    </header>
  );
}
