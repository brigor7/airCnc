import React, { useState } from 'react';

export default function New() {
  const [company, setCompany] = useState('');
  const [price, setPrice] = useState(0);

  function handleSubmit() {}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="company">Empresa *</label>
        <input
          id="company"
          placeholder="sua empresa incrivel"
          type="text"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <label htmlFor="price">Preço *</label>
        <input
          id="price"
          placeholder="seu valor por dia"
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </form>
    </>
  );
}
