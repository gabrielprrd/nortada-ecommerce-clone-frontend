import React, { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';

import actions from '../../actions/cart';

export default function ProductContainer({ title, quantityOptions, img }) {
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState(quantityOptions[0].price);
  const [pack, setPack] = useState(quantityOptions[0].quantity);
  const [quantityPurchased, setQuantityPurchased] = useState(1);

  const options = quantityOptions.map((option) => ({
    value: option.price.toFixed(2),
    label: option.quantity,
  }));

  const addProductToCart = () => {
    const calculatedPrice = selectValue * quantityPurchased;
    const purchasedProduct = {
      img,
      title,
      price: selectValue,
      quantity: quantityPurchased,
      pack,
      calculatedPrice,
    };
    dispatch(actions.addProduct(purchasedProduct));
  };

  const handleSelect = (selectedItem) => {
    setSelectValue(selectedItem.value);
    setPack(selectedItem.label);
  };

  const handleNumber = (e) => {
    setQuantityPurchased(e.target.value);
  };

  return (
    <div>
      <p>{img}</p>

      <div>
        <h2>{title}</h2>
        <p>{selectValue}€</p>
      </div>

      <div>
        <Select
          options={options}
          defaultValue={{ label: options[0].label, value: options[0].value }}
          onChange={handleSelect}
        />
        <input
          type="number"
          min="1"
          defaultValue="1"
          onChange={(e) => handleNumber(e)}
        />
      </div>

      <button type="button" onClick={addProductToCart}>
        Adicionar
      </button>
    </div>
  );
}
