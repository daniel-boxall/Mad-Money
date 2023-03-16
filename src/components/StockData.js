import React, { useState, useEffect } from "react";
import axios from 'axios';

function StockData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://www.alphavantage.co/query', {
        params: {
          function: 'TIME_SERIES_MONTHLY',
          symbol: 'AAPL',
          apikey: 'JPTB584R5KKH8FOW'
        }
      });
      // print api call result
      console.log(response.data);
      setData(response.data);
    }
    fetchData();
  }, []);

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
  console.log(monthlyTimeSeries);

  return (
    <div>
      <h1>StockData component</h1>
      <p>Symbol: {symbol}</p>
      <p>Last Refreshed: {lastRefreshed}</p>
      <p>Time Zone: {timeZone}</p>
      <p>{lastRefreshed}</p>
    </div>
  );
}

export default StockData;