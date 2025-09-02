import React from 'react';

function CardDisplay({ cardData }) {
  if (!cardData) return null;

  const { name, number, set, imageUrl, prices, rarity } = cardData;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        {name}
      </h3>
      
      {/* Card Image */}
      <div className="flex justify-center mb-6">
        <div className="card-shadow rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={`${name} Pokemon Card`}
            className="w-64 h-auto object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/250x350/e2e8f0/64748b?text=Card+Image+Not+Available';
            }}
          />
        </div>
      </div>

      {/* Card Details */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-600">Card Number:</span>
          <span className="text-gray-800">{number}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-600">Set:</span>
          <span className="text-gray-800">{set}</span>
        </div>
        
        {rarity && (
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-600">Rarity:</span>
            <span className="text-gray-800">{rarity}</span>
          </div>
        )}
      </div>

      {/* Price Information */}
      {prices && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Market Prices</h4>
          <div className="space-y-2">
            {prices.market && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Market Price:</span>
                <span className="text-xl font-bold text-green-600">
                  ${prices.market.toFixed(2)}
                </span>
              </div>
            )}
            {prices.low && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Low Price:</span>
                <span className="text-lg text-gray-800">
                  ${prices.low.toFixed(2)}
                </span>
              </div>
            )}
            {prices.high && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">High Price:</span>
                <span className="text-lg text-gray-800">
                  ${prices.high.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDisplay;