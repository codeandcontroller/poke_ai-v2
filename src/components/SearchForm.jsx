import React, { useState } from 'react';
import { searchPokemonCard } from '../services/tcgPlayerAPI';
import { getInvestmentAdvice } from '../services/openaiAPI';

function SearchForm({ onSearch, isLoading }) {
  const [formData, setFormData] = useState({
    pokemonName: '',
    cardNumber: '',
    setName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate at least one field is filled
    if (!formData.pokemonName && !formData.cardNumber && !formData.setName) {
      alert('Please fill in at least one search field');
      return;
    }

    try {
      // Call the search function
      await onSearch(formData);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const handleClear = () => {
    setFormData({
      pokemonName: '',
      cardNumber: '',
      setName: ''
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Search Pokemon Cards
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pokemon Name */}
        <div>
          <label htmlFor="pokemonName" className="block text-sm font-medium text-gray-700 mb-2">
            Pokemon Name
          </label>
          <input
            type="text"
            id="pokemonName"
            name="pokemonName"
            value={formData.pokemonName}
            onChange={handleInputChange}
            placeholder="e.g., Charizard, Pikachu"
            className="input-field"
            disabled={isLoading}
          />
        </div>

        {/* Card Number */}
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="e.g., 025, 150"
            className="input-field"
            disabled={isLoading}
          />
        </div>

        {/* Set Name */}
        <div>
          <label htmlFor="setName" className="block text-sm font-medium text-gray-700 mb-2">
            Set Name
          </label>
          <input
            type="text"
            id="setName"
            name="setName"
            value={formData.setName}
            onChange={handleInputChange}
            placeholder="e.g., Base Set, Brilliant Stars"
            className="input-field"
            disabled={isLoading}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Searching...' : 'Search Card'}
          </button>
          
          <button
            type="button"
            onClick={handleClear}
            disabled={isLoading}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
          >
            Clear
          </button>
        </div>
      </form>

      <div className="mt-4 text-sm text-gray-500 text-center">
        Fill in any combination of fields to search for Pokemon cards
      </div>
    </div>
  );
}

export default SearchForm;