import React, { useState, useEffect } from "react";
import axios from 'axios';
// import LightweightChart from "./LightweightChart";
import StockChart from "./StockChart";

function StockData({ selectedCompany }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      // check and get cached data
      const cachedData = localStorage.getItem(`stockData_${selectedCompany}`);
      if (cachedData) {
        // if there is cachedData, set the overview state to the cached data
        setData(JSON.parse(cachedData));
        return;
      } else {
        const response = await axios.get('https://www.alphavantage.co/query', {
          params: {
            function: 'TIME_SERIES_MONTHLY',
            symbol: selectedCompany,
            apikey: process.env.REACT_APP_STOCK_API_KEY2
          }
        });
        // store the fetched data in localStorage
        localStorage.setItem(`stockData_${selectedCompany}`, JSON.stringify(response.data));
        // change state of data
        setData(response.data);
      }
    };
    fetchStockData();
  }, [selectedCompany]);
  // dummy loading state
  if (!data) {
    return <div>Loading...</div>;
  }
  // meta data of the stock data
  // TODO: pass the meta data as chart legend
  const metaData = data['Meta Data'];
  const symbol = metaData['2. Symbol'];
  const lastRefreshed = metaData['3. Last Refreshed'];
  const timeZone = metaData['4. Time Zone'];

  // monthly time series of the stock data
  // TODO: pass the data to lightweight chart
  const monthlyTimeSeries = data['Monthly Time Series'];
  // console.log(monthlyTimeSeries);

  // example json output here: https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo
  return (
    <div>
      <h1>StockData component</h1>
      <p>Symbol: {symbol}</p>
      <p>Last Refreshed: {lastRefreshed}</p>
      <p>Time Zone: {timeZone}</p>
      <p>{lastRefreshed}</p>
      {/* <LightweightChart seriesData={monthlyTimeSeries} /> */}
      <StockChart seriesData={monthlyTimeSeries} />
    </div>
  );
}

export default StockData;