import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../contextApi";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productDetails, setProductDetails, cartItems, setCartItems } =
    useContext(ShoppingCartContext);

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

  const handleAddToCart = (getProdDetail) => {
    const cpyOfExistingCartItems = [...cartItems];
    const findIndexOfItem = cpyOfExistingCartItems.findIndex(
      (item) => item.id === getProdDetail.id
    );
    if (findIndexOfItem === -1) {
      cpyOfExistingCartItems.push({
        ...getProdDetail,
        quantity: 1,
      });
    } else {
      console.log("if item not");
    //   const item = cpyOfExistingCartItems.filter(
    //     (item) => item.id === getProdDetail.id
    //   );
    //   cpyOfExistingCartItems.push({
    //     ...item,
    //     quantity: item.quantity + 1,
    //   });
    }
    setCartItems(cpyOfExistingCartItems);
    console.log(cpyOfExistingCartItems);
    localStorage.setItem('cartItems',JSON.stringify(cpyOfExistingCartItems))
    navigate("/cart");
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
              ? productDetails?.images.map((x, index) => (
                  <div className="rounded-xl shadow-md p-4" key={index}>
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
        <div className="lg:col-span-2 mt-10">
          <p className="text-2xl font-bold text-gray-800">
            {productDetails?.title}
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <p className="text-sm font-bold">${productDetails?.price}</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <p className="text-sm font-bold">Stock: {productDetails?.stock}</p>
          </div>
          <button
            className="bg-green-600 p-3 w-60 border border-gray-700 rounded-sm mt-4 font-bold text-white hover:bg-green-700"
            onClick={() => handleAddToCart(productDetails)}
          >
            Add to Cart
          </button>
          <div className="mt-5">
            <span className="font-semibold">{"Description"}</span>
            <p className="text-black font-serif">
              {productDetails?.description}
            </p>
          </div>
          <div className="mt-4">
            {productDetails?.reviews?.length > 0
              ? productDetails?.reviews?.map((x, index) => (
                  <div className="mt-2" key={index}>
                    <p className="font-semibold text-sm">{x?.reviewerName}</p>
                    <p className="text-[10px]">{x?.reviewerEmail}</p>
                    <p>{x?.comment}</p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProductDetail;
