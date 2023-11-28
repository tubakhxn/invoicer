// TotalAmount.js
import React from 'react';

const TotalAmount = ({ items }) => {
  const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Total Amount</h2>
      <p>${totalAmount}</p>
    </div>
  );
};

export default TotalAmount;
