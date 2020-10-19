import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import PRODUCTS_LIST from '../../store/productsList';
import ProductContainer from '../../components/ProductContainer/index';

export default function Home() {
  return (
    <>
      <div>
        <h1>Bebe Nortada em tua casa</h1>
      </div>

      {PRODUCTS_LIST.map((product) => {
        const { title, img, quantityOptions } = product;
        return (
          <ProductContainer
            key={uuidv4()}
            title={title}
            quantityOptions={quantityOptions}
            img={img}
          />
        );
      })}
    </>
  );
}
