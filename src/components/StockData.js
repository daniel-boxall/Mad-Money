import React, { useState, useEffect} from "react";
import axios from 'axios';

function StockData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://www.alphavantage.co/query', {
        params: {
          function: 'TIME_SERIES_INTRADAY',
          symbol: 'MSFT',
          interval: '5min',
          apikey: 'JPTB584R5KKH8FOW'
        }
      });
      setData(response.data);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const latestTimestamp = Object.keys(data['Time Series (5min)'])[0];
  const latestData = data['Time Series (5min)'][latestTimestamp];

  return (
    <div>
      <h2>{data['Meta Data']['2. Symbol']}</h2>
      <p>OpenL {latestData['1. open']}</p>
      <p>High: {latestData['2. high']}</p>
      <p>Low: {latestData['3. low']}</p>
      <p>Close: {latestData['4. close']}</p>
      <p>Volume: {latestData['5. volume']}</p>
    </div>
  );
}

export default StockData;