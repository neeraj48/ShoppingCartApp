import { useContext } from "react";
import { ShoppingCartContext } from "../../contextApi";

const CartTile = ({ signleCartItem }) => {
  const { handleRemoveItemFromCart, handleAddToCart } =
    useContext(ShoppingCartContext);

  return (
    <div className="grid grid-cols-3 items-start gap-5 border-b border-slate-600">
      <div className="col-span-2 flex items-start gap-4 mb-3">
        <div className="w-28 h-28 max-sm:w-20 shrink-0 p-1 bg-gray-400 rounded-md">
          <img
            src={signleCartItem?.thumbnail}
            alt={signleCartItem?.title}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="h-full">
          <h3 className="text-base font-bold text-gray-900">
            {signleCartItem?.title}
          </h3>
          <button
            className="text-sm px-4 py-3 bg-red-500 rounded-sm text-white mt-4"
            onClick={() => handleRemoveItemFromCart(signleCartItem, true)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="ml-auto">
        <h3 className="text-lg font-bold text-gray-950">
          ${signleCartItem?.totalPrice?.toFixed(2)}
        </h3>
        <p className="text-sm">Qty:{signleCartItem?.quantity}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <button
            className="bg-red-700 px-4 py-2 rounded-sm text-xl font-bold text-white disabled:opacity-50"
            onClick={() => handleRemoveItemFromCart(signleCartItem, false)}
            disabled={signleCartItem?.quantity == 1}
          >
            -
          </button>
          <button
            className=" bg-green-700 px-4 py-2 rounded-sm text-xl font-bold text-white disabled:opacity-50"
            onClick={() => handleAddToCart(signleCartItem)}
            disabled={signleCartItem?.quantity === 10}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTile;
