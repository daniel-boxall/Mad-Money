import React, { useState, useEffect } from "react";
import axios from 'axios';

function CompanyOverview({ selectedCompany }) {
  const [overview, setOverview] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://www.alphavantage.co/query', {
        params: {
          function: 'OVERVIEW',
          symbol: selectedCompany,
          apikey: 'JPTB584R5KKH8FOW'
        }
      });
      // print api call result
      console.log(response.data);
      setOverview(response.data);
    }
    fetchData();
  }, [selectedCompany]);

  if (!overview) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Company Overview Component</h1>
      {selectedCompany && <h2>You selected {selectedCompany}</h2>}
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