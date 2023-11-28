// InvoiceForm.js
import React, { useState } from 'react';

const InvoiceForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    if (itemName && quantity && price) {
      addItem({ itemName, quantity, price });
      setItemName('');
      setQuantity(1);
      setPrice('');
    }
  };

  return (
    <div>
      <label>Item Name: </label>
      <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <label>Quantity: </label>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <label>Price: </label>
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default InvoiceForm;
