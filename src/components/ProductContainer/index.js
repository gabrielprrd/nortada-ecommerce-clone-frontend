import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProductContainer({
  title,
  quantityOptions,
  img,
  addBeerToCart,
}) {
  const [selectValue, setSelectValue] = useState(quantityOptions[0]);

  function handleSelect(e) {
    setSelectValue(e.target.value);
    console.log(selectValue);
  }

  return (
    <div>
      <p>{img}</p>
      <h2>{title}</h2>
      <select onChange={handleSelect}>
        {quantityOptions.map((item) => (
          <option value={item.price} key={Math.random() * 10}>
            {item.quantity}
          </option>
        ))}
      </select>
      <p>{}</p>
      <button type="button" onClick={addBeerToCart}>
        Adicionar
      </button>
    </div>
  );
}

ProductContainer.propTypes = {
  title: PropTypes.string.isRequired,
  quantityOptions: PropTypes.objectOf(PropTypes.object()).isRequired,
  img: PropTypes.string.isRequired,
  addBeerToCart: PropTypes.func.isRequired,
};
