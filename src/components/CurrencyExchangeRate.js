import React, { useState, useEffect } from "react";
import axios from 'axios';

function CurrencyExchangeRate({ fromCurrency, toCurrency }) {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const response = await axios.get('https://www.alphavantage.co/query', {
        params: {
          function: 'CURRENCY_EXCHANGE_RATE',
          from_currency: fromCurrency,
          to_currency: toCurrency,
          apikey: process.env.REACT_APP_API_KEY
        }
      });
      // print api call return result
      console.log(response);
      setExchangeRate(response.data['Realtime Currency Exchange Rate']);
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  if(!exchangeRate) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Alphavantage - FX</h1>
      <h2>Converting from {exchangeRate['1. From_Currency Code']} to {exchangeRate['3. To_Currency Code']}</h2>
      <p>Exchange rate: {exchangeRate['5. Exchange Rate']}</p>
      <p>Last refresh: {exchangeRate['6. Last Refreshed']}</p>
    </div>
  )
}

export default CurrencyExchangeRate;