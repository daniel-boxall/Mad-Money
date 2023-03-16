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
      // change state of overview
      setOverview(response.data);
    }
    fetchData();
  }, [selectedCompany]);
  // dummy loading state
  if (!overview) {
    return <div>Loading...</div>;
  }
  // example json output https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo
  // you can choose what to use
  
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