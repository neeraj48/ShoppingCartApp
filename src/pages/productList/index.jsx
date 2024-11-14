import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../contextApi/index";
import ProductCard from "../../components/ProductCard";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductList = () => {
  const navigate = useNavigate();
  const { productList, loading, cartItems, setCartItems } =
    useContext(ShoppingCartContext);
  if (loading)
    return <h1 className="font-bold text-center mt-20">Loading data...</h1>;

  const gotoCartPage = () => {
    navigate("/cart");
  };

  //   useEffect(() => {
  // setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  //   },[]);

  return (
    <section className="py-12 bg-gray-300 sm:py-16 lg:py-5">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-gray-100 justify-between font-bold text-blue-500 rounded-md p-4 flex">
          <h2>Product List Page</h2>
          <Badge
            onClick={gotoCartPage}
            className="cursor-pointer"
            badgeContent={cartItems?.length > 0 ? cartItems?.length : null}
            color="error"
          >
            <ShoppingCartIcon sx={{ fontSize: 30 }} />
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {productList && productList.length > 0 ? (
            <ProductCard prodData={productList} />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
