import React, { useState, useEffect} from "react";
import axios from 'axios';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchResults = async (query) => {
    // check if cached query results
    const cachedResults = JSON.parse(localStorage.getItem(`search_${query}`));
    // if cahced use cahced data, if no call api and cache query result
    if(cachedResults) {
      setResults(cachedResults);
    } else {
      try {
        const response = await axios.get('https://www.alphavantage.co/query', {
            params: {
              function: 'SYMBOL_SEARCH',
              keywords: query,
              apikey: 'JPTB584R5KKH8FOW'
            }
          });
        const data = response.data;
        console.log(data);
        // store cached query
        localStorage.setItem(`search_${query}`, JSON.stringify(data.bestMatches));
        setResults(data.bestMatches);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if(query.length > 1) {
      fetchResults(query);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [query])

  const handleChange = (event) => {
    const query = event.target.value;
    setQuery(query);
  }

  const handleSelect = (symbol) => {
    setQuery(symbol);
    // hide dropdown
    setShowDropdown(false);
  }

  return (
    <div>
      <h1>Alphavantage - TickerSearch</h1>
      <h2>Be aware of api call limit！</h2>
      <input type="text" value={query} onChange={handleChange} />
      {showDropdown && results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result['1. symbol']} onClick={() => handleSelect(result['1. symbol'])}>
              {result['2. name']} ({result['1. symbol']})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;