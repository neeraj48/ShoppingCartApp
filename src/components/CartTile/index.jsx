const CartTile = ({ signleCartItem }) => {
  console.log(signleCartItem);

  return (
    <div className="grid grid-cols-3 items-start gap-5">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-28 h-28 max-sm:w-20 shrink-0 p-1 bg-gray-400 rounded-md">
          <img
            src={signleCartItem?.thumbnail}
            alt={signleCartItem?.title}
            className="object-contain w-full h-full"
          />
        </div>
        <div>
          <h3 className="text-base font-bold text-gray-900">
            {signleCartItem?.title}
          </h3>
          <button className="text-sm px-4 py-3 bg-red-500 rounded-sm mt-2 text-white">
            Remove
          </button>
        </div>
      </div>
      <div className="ml-auto">
        <h3 className="text-lg font-bold text-gray-950">
          ${signleCartItem?.price?.toFixed(2)}
        </h3>
        <div className="flex flex-wrap gap-4 mt-2">
          <button className="bg-red-400 px-4 py-2 rounded-sm text-xl font-bold text-white">
            -
          </button>
          <button className=" bg-green-400 px-4 py-2 rounded-sm text-xl font-bold text-white">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTile;
