import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../contextApi";

const ProductCard = ({ prodData }) => {
  const navigate = useNavigate();
  const { handleAddToCart } = useContext(ShoppingCartContext);
  const gotoDetail = (prodId) => {
    navigate(`/product-detail/${prodId}`);
  };
  return (
    <>
      {prodData.length > 0 ? (
        prodData.map((x) => (
          <div
            className="relative group  p-6 cursor-pointer rounded-md shadow-lg bg-gray-50"
            key={x?.id}
          >
            <div className="overflow-hidden aspect-w-1 aspect-h-1">
              <img
                src={x?.thumbnail}
                alt={x?.title}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
              />
            </div>
            <div className="flex items-start justify-between mt-4 space-x-4">
              <div className="font-bold text-gray-500 sm:text-sm text-xs md:text-base">
                <p className="w-40 overflow-hidden text-ellipsis whitespace-nowrap">
                  {x?.title}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 font-bold">${x?.price}</p>
              </div>
            </div>
            <div className="flex justify-around gap-4">
              <button
                className="bg-blue-400 w-full mt-2 p-2 rounded-sm m-auto  text-white hover:bg-blue-600"
                onClick={() => gotoDetail(x?.id)}
              >
                View Detail
              </button>
              <button
                className="bg-green-400 w-full mt-2 p-2 rounded-sm m-auto  text-white hover:bg-green-600"
                onClick={() => handleAddToCart(x)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>No data found</h1>
      )}
    </>
  );
};

export default ProductCard;
