import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import PRODUCTS_LIST from '../../store/productsList';
import ProductContainer from '../../components/ProductContainer/index';
import actions from '../../actions/cart';

export default function Home() {
  const [beerList] = useState(PRODUCTS_LIST);
  const dispatch = useDispatch();

  const addBeerToCart = useCallback(
    (product) => {
      dispatch(actions.addProduct(product));
    },
    [dispatch]
  );

  return (
    <>
      <div>
        <h1>Bebe nortada em tua casa</h1>
      </div>

      {beerList.map((product) => {
        const { title, img, quantityOptions } = product;
        return (
          <ProductContainer
            key={title}
            title={title}
            quantityOptions={quantityOptions}
            img={img}
            addBeerToCart={() => addBeerToCart(product)}
          />
        );
      })}
    </>
  );
}
