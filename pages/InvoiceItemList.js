// InvoiceItemList.js
import React from 'react';

const InvoiceItemList = ({ items }) => {
  return (
    <div>
      <h2>Invoice Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.itemName} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceItemList;
