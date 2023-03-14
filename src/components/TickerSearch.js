import React, { useState, useEffect } from "react";
import axios from 'axios';

function TickerSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const cacheKey = 'tickerSearchCache';

  useEffect(() => {
    const fetchSearchResults = async () => {
      const cachedData = localStorage.getItem(cacheKey);
      if (searchTerm.length > 2) {

        if(cachedData) {
          setSearchResults(JSON.parse(cachedData));
        } else {
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
          localStorage.setItem(cacheKey, JSON.stringify(response.data.bestMatches))
        }
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