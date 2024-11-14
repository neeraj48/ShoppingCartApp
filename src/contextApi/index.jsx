// create context
// provide state to context
// wrap context to root component
// consume context using useContext api

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [loading, setLaoding] = useState(false);
  const [productDetails, setProductDetails] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchProductsList = async () => {
    setLaoding(true);
    const apiResp = await fetch("https://dummyjson.com/products");
    const result = await apiResp.json();
    if (result && result?.products) {
      setLaoding(false);
      setProductList(result?.products);
    }
  };

  const handleAddToCart = (getProdDetail) => {
    const cpyOfExistingCartItems = [...cartItems];
    const findIndexOfItem = cpyOfExistingCartItems.findIndex(
      (item) => item.id === getProdDetail.id
    );
    if (findIndexOfItem === -1) {
      cpyOfExistingCartItems.push({
        ...getProdDetail,
        quantity: 1,
        totalPrice: getProdDetail?.price,
      });
    } else {
      cpyOfExistingCartItems[findIndexOfItem] = {
        ...cpyOfExistingCartItems[findIndexOfItem],
        quantity: cpyOfExistingCartItems[findIndexOfItem].quantity + 1,
        totalPrice:
          (cpyOfExistingCartItems[findIndexOfItem].quantity + 1) *
          cpyOfExistingCartItems[findIndexOfItem].price,
      };
    }
    setCartItems(cpyOfExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyOfExistingCartItems));
    navigate("/cart");
  };

  const handleRemoveItemFromCart = (getCartItem, removeItemFlag) => {
    const cpyCartItems = [...cartItems];
    const findIndexOfItem = cpyCartItems?.findIndex(
      (x) => x?.id == getCartItem?.id
    );
    if (removeItemFlag) {
      cpyCartItems.splice(findIndexOfItem, 1);
    } else {
      cpyCartItems[findIndexOfItem] = {
        ...cpyCartItems[findIndexOfItem],
        quantity: cpyCartItems[findIndexOfItem].quantity - 1,
        totalPrice:
          (cpyCartItems[findIndexOfItem].quantity - 1) *
          cpyCartItems[findIndexOfItem].price,
      };
    }
    localStorage.setItem("cartItems", JSON.stringify(cpyCartItems));
    setCartItems(cpyCartItems);
  };

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
        cartItems,
        setCartItems,
        handleAddToCart,
        handleRemoveItemFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
