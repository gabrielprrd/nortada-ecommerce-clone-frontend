import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/cart">
        Cart
      </NavLink>
    </header>
  );
}
