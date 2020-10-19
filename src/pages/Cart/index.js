import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import actions from '../../actions/cart';
import selectors from '../../selectors/cart';

export default function Cart() {
  const [subTotal, setSubTotal] = useState(0);
  const [newSelectValue, setNewSelectValue] = useState();
  const dispatch = useDispatch();
  const products = useSelector(selectors.getCart);
  const removeBeerFromCart = (product) => {
    dispatch(actions.removeProduct(product));
  };

  const handleChange = (e) => {
    setNewSelectValue(e.target.value);
  };

  // Calculates the sum of all products on the cart everytime it changes
  useEffect(() => {
    const pricesArray = products.map((product) => product.calculatedPrice);
    const reduced = pricesArray.reduce(
      (prevValue, currentValue) => prevValue + currentValue,
      0
    );
    const newSubTotal = reduced.toFixed(2);
    function calculatedSubTotal() {
      setSubTotal(newSubTotal);
    }
    calculatedSubTotal();
  }, [products, subTotal]);

  return (
    <>
      {products.length <= 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          {products.map((product) => {
            const { title, img, price, quantity, pack } = product;
            return (
              <div key={uuidv4()}>
                <p>{img}</p>
                <div>
                  <h2>
                    {title} - {pack}
                  </h2>
                </div>
                <div>
                  <p>Preço unitário: €{price}</p>
                </div>
                <div>
                  <input
                    type="number"
                    min="1"
                    defaultValue={quantity}
                    onChange={(e) => handleChange()}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeBeerFromCart(product)}
                >
                  Excluir
                </button>
              </div>
            );
          })}
        </div>
      )}
      <p>Subtotal: €{subTotal}</p>
      <p>Envio: Portes(Portes Grátis)</p>
    </>
  );
}
