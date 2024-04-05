import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

export const StockContext = createContext();

const StockProvider = ({ children }) => {

  const [stockData, setStockData] = useState([]);

  const fetchStocks = async () => {
    try {
      let res = await axios.get(
        "https://fitpage-backend-1faf.onrender.com/api/v1/stocks"
      );
      setStockData(res.data.result);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);
  

  return (
    <StockContext.Provider value={{ stockData, setStockData }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => {
    const  context = useContext(StockContext);
    return context;
}

export default StockProvider;
