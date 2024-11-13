// create context
// provide state to context
// wrap context to root component
// consume context using useContext api

import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLaoding] = useState(false);
  const [productDetails, setProductDetails] = useState([]);

  const fetchProductsList = async () => {
    setLaoding(true);
    const apiResp = await fetch("https://dummyjson.com/products");
    const result = await apiResp.json();
    if (result && result?.products) {
      setLaoding(false);
      setProductList(result?.products);
    }
  };
  // console.log(productList);

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        productList,
        loading,
        setLaoding,
        productDetails,
        setProductDetails,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
