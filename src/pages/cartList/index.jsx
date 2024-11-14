import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../contextApi";
import CartTile from "../../components/CartTile";

const CartList = () => {
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();
  const gotoShopping = () => {
    navigate("/product-list");
  };
  function getTotolAmount() {
    if (cartItems?.length > 0) {
      let total = 0;
      cartItems.forEach((element) => {
        total += element?.price;
      });
      setTotalAmount(total);
    }
  }
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    getTotolAmount();
  }, []);
  return (
    <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        My Cart Page
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className=" md:col-span-2 space-y-4">
          {cartItems?.length > 0
            ? cartItems.map((x) => <CartTile key={x?.id} signleCartItem={x} />)
            : null}
        </div>
        <div className="bg-gray-100 rounded-sm p-4 h-max">
          <h3 className="font-extrabold text-xl text-gray-700 border-b border-gray-300 py-2">
            Order Summary
          </h3>
          <ul className="mt-4 text-gray-700">
            <p className="flex flex-wrap gap-4 text-sm font-bold"> Totol</p>
            <span>${totalAmount?.toFixed(2)}</span>
          </ul>
          <div className="flex flex-wrap gap-2 mt-5">
            <button className="bg-green-500 p-2 rounded-md  text-white">
              Checkout
            </button>
            <button
              className="bg-red-500 p-2 rounded-md  text-white"
              onClick={gotoShopping}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
