import React, { useState, useEffect } from "react";
import axios from 'axios';

function CompanyOverview() {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://www.alphavantage.co/query', {
        params: {
          function: 'OVERVIEW',
          symbol: 'AAPL',
          apikey: 'JPTB584R5KKH8FOW'
        }
      });
      // print api call result
      console.log(response.data);
      setOverview(response.data);
    }
    fetchData();
  }, []);

  if (!overview) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Alphavantage - Company Overview</h1>
      <h2>{overview['Symbol']}</h2>
      <p>Name: {overview['Name']}</p>
      <p>Desc: {overview['Description']}</p>
      <p>Exchange: {overview['Exchange']}</p>
      <p>Sector: {overview['Sector']}</p>
      <p>Market Capitalization: {overview['MarketCapitalization']}</p>
    </div>
  );
}

export default CompanyOverview;