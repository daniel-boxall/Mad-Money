import React from "react";
import { createContext } from "react";
import { useState } from "react";

// createContext is a react method that creates a new object that can pass data down a component tree without the need to pass props manually
export const CurrencyContext = createContext();

// Sets the default state of the input form 
const CurrencyProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("🇬🇧 GBP - United Kingdom");
  const [toCurrency, setToCurrency] = useState("🇺🇸 USD - United States");
  const [firstAmount, setFirstAmount] = useState("");

  // What gets shared through CurrencyContext
  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount
  };

  // Creates a provider component that provides access to the value object to all children
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
