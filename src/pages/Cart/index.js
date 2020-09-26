import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import actions from '../../actions/cart';
import selectors from '../../selectors/cart';

// import ProductContainer from '../../components/ProductContainer/index';

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(selectors.getCart);

  const removeBeerFromCart = (product) => {
    dispatch(actions.removeProduct(product));
  };

  return (
    <>
      {products.length <= 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        products.map((product) => {
          const { title, img } = product;
          return (
            <div key={uuidv4()}>
              <p>{img}</p>

              <div>
                <h2>{title}</h2>
              </div>

              <div>
                <input type="number" min="1" defaultValue="1" />
              </div>
              <button type="button" onClick={() => removeBeerFromCart(product)}>
                Excluir
              </button>
            </div>
          );
        })
      )}
    </>
  );
}
