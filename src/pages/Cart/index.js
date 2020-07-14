import React from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../actions/cart';

export default function Cart() {
  const dispatch = useDispatch();

  const removeBeerFromCart = (product) => {
    dispatch(actions.removeProduct(product));
  };

  return (
    <div>
      <button type="button" onClick={removeBeerFromCart}>
        Excluir
      </button>
    </div>
  );
}
