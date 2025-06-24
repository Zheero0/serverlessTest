import React from "react";

const PriceCard = ({ price }) => {
  return (
    <div key={price.id} className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{price.name}</h2>
      <p>{price.description}</p>
      <p>£{(price.price / 100).toFixed(2)}</p>
    </div>
  );
};

export default PriceCard;
