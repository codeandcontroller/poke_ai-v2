import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import CardDisplay from './components/CardDisplay';
import InvestmentAdvice from './components/InvestmentAdvice';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [cardData, setCardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [investmentAdvice, setInvestmentAdvice] = useState(null);

  const handleSearch = async (searchParams) => {
    setIsLoading(true);
    setError(null);
    setCardData(null);
    setInvestmentAdvice(null);

    try {
      // Search logic will be implemented in SearchForm
      console.log('Searching for:', searchParams);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Poke AI
          </h1>
          <p className="text-lg text-gray-600">
            Pokemon Card Investment Analyzer
          </p>
        </header>

        {/* Search Form */}
        <div className="max-w-2xl mx-auto mb-8">
          <SearchForm 
            onSearch={handleSearch} 
            isLoading={isLoading}
          />
        </div>

        {/* Error Display */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <strong>Error:</strong> {error}
            </div>
          </div>
        )}

        {/* Loading Spinner */}
        {isLoading && (
          <div className="flex justify-center mb-8">
            <LoadingSpinner />
          </div>
        )}

        {/* Results */}
        {cardData && (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <CardDisplay cardData={cardData} />
              {investmentAdvice && (
                <InvestmentAdvice advice={investmentAdvice} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;