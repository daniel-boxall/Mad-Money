import React, { useState, useEffect } from "react";
import axios from 'axios';

function TickerSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm.length > 2) {
        const response = await axios.get('https://www.alphavantage.co/query', {
          params: {
            function: 'SYMBOL_SEARCH',
            keywords: searchTerm,
            apikey: 'JPTB584R5KKH8FOW'
          }
        });
        // print api call result
        console.log(response);
        setSearchResults(response.data.bestMatches);
      } else {
        setSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <input type='text' value={searchTerm} onChange={handleSearchTermChange}></input>
      <ul>
        {searchResults.map((result) => (
          <li key={result['1. symbol']}>
            {result['1. symbol']} - {result['2. name']}
          </li>
        ))}
      </ul>
    </div>

  );
}

export default TickerSearch;