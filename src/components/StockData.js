import React, { useState, useEffect } from "react";
import axios from 'axios';
// import LightweightChart from "./LightweightChart";
import StockChart from "./StockChart";

function StockData({ selectedValue }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://www.alphavantage.co/query', {
        params: {
          function: 'TIME_SERIES_MONTHLY',
          symbol: selectedValue,
          apikey: 'JPTB584R5KKH8FOW'
        }
      });
      // change state of data
      setData(response.data);
    }
    fetchData();
  }, [selectedValue]);
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