import React from 'react'
import PriceCard from './PriceCard';

const PricePlan = ({prices}) => {

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">Browse Washes</h1>
      <div className="grid gap-6">
        {prices.length > 0 ? (
          prices.map((price) => (
            <PriceCard price={prices} key={price.id}/>
          ))
        ) : (
          <p>No prices found.</p>
        )}
      </div>
    </div>
  );
}

export default PricePlan