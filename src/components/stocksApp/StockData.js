import React, { useState, useEffect } from "react";
import axios from 'axios';
import StockChart from "./StockChart";

export default function StockData({ selectedCompany }) {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      // check and get cached data
      const cachedData = localStorage.getItem(`stockData_${selectedCompany}`);
      if (cachedData) {
        // if there is cachedData, set the overview state to the cached data
        setStockData(JSON.parse(cachedData));
        return;
      } else {
        const response = await axios.get('https://www.alphavantage.co/query', {
          params: {
            function: 'TIME_SERIES_DAILY_ADJUSTED',
            symbol: selectedCompany,
            apikey: process.env.REACT_APP_STOCK_API_KEY2
          }
        });
        // store the fetched data in localStorage
        localStorage.setItem(`stockData_${selectedCompany}`, JSON.stringify(response.data));
        // change state of data
        setStockData(response.data);
      }
    };
    fetchStockData();
  }, [selectedCompany]);

  // dummy loading state
  if (!stockData) {
    return <div>Loading...</div>;
  }

  // metadata of the stock data
  // to be used as chart legend
  const metaData = stockData['Meta Data'];
  const symbol = metaData['2. Symbol'];
  const lastRefreshed = metaData['3. Last Refreshed'];
  const timeZone = metaData['5. Time Zone'];

  // monthly time series of the stock data for the chart
  const monthlyTimeSeries = stockData['Time Series (Daily)'];
  const Data = {
    maxWidth: '75vw',
  }
  // example json output here: https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo
  return (
    <div style= { Data }>
      <h1>StockData component</h1>
      <p>Symbol: {symbol}</p>
      <p>Last Refreshed: {lastRefreshed}</p>
      <p>Time Zone: {timeZone}</p>
      <p>{lastRefreshed}</p>
      <StockChart seriesData={monthlyTimeSeries} />
    </div>
  );
}