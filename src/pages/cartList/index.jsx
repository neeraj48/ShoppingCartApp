import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../contextApi";
import CartTile from "../../components/CartTile";

const CartList = () => {
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const handleCheckout = () => {
    alert("Happy Shopping");
    setCartItems([]);
    localStorage.clear();
  };
  const gotoShopping = () => {
    navigate("/product-list");
  };
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  }, []);
  return (
    <div className="max-w-7xl mx-auto max-md:max-w-xl py-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center bg-slate-100 rounded-sm p-2">
        My Cart Page
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12 shadow-lg p-5">
        <div className=" md:col-span-2 space-y-4">
          {cartItems?.length > 0 ? (
            cartItems.map((x) => <CartTile key={x?.id} signleCartItem={x} />)
          ) : (
            <h1 className="text-gray-700 font-bold text-4xl">
              No cart item found!Please add some items in the cart
            </h1>
          )}
        </div>
        <div className="bg-gray-100 rounded-sm p-4 h-max">
          <h3 className="font-extrabold text-xl text-gray-700 border-b border-gray-300 py-2">
            Order Summary
          </h3>
          <ul className="mt-4 text-gray-700">
            <p className="flex flex-wrap gap-4 text-sm font-bold"> Totol</p>
            <span>
              $
              {cartItems
                ?.reduce((acc, curr) => acc + curr.totalPrice, 0)
                .toFixed(2)}
            </span>
          </ul>
          <div className="flex flex-wrap gap-2 mt-5">
            <button
              className="bg-green-600 p-2 rounded-md  text-white disabled:opacity-50"
              onClick={handleCheckout}
              disabled={cartItems?.length > 0 ? false : true}
            >
              Checkout
            </button>
            <button
              className="bg-red-600 p-2 rounded-md  text-white "
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
