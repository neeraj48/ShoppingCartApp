import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../contextApi";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const { productDetails, setProductDetails } = useContext(ShoppingCartContext);

  const getProductDetailbyId = async () => {
    try {
      const resp = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await resp.json();
      if (result) {
        setProductDetails(result);
      }
      console.log("PRODUCT-DETAILS ", productDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetailbyId();
  }, [id]);

  return (
    // <div>
    <div className="p-6 lg:max-w-7xl max-w-rxl mx-auto bg-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 shadow-lg p-6 bg-white">
        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
          <div className="px-4 py-10 rounded-xl shadow-lg relative">
            <img
              className="w-4/5 rounded object-cover"
              src={productDetails?.thumbnail}
              alt={productDetails?.title}
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-around">
            {productDetails?.images?.length > 0
              ? productDetails?.images.map((x) => (
                  <div className="rounded-xl shadow-md p-4">
                    <img
                      className="w-24 cursor-pointer"
                      src={productDetails?.thumbnail}
                      alt={productDetails?.title}
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="lg:col-span-2 mt-20">
          <p className="text-2xl font-bold text-gray-800">
            {productDetails?.title}
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <p className="text-sm font-bold">${productDetails?.price}</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <p className="text-sm font-bold">Stock: {productDetails?.stock}</p>
          </div>
          <button className="bg-green-600 p-3 w-60 border border-gray-700 rounded-sm mt-4 font-bold text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProductDetail;
