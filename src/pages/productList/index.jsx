import { useContext } from "react";
import { ShoppingCartContext } from "../../contextApi/index";
import ProductCard from "../../components/ProductCard";

const ProductList = () => {
  const { productList, loading } = useContext(ShoppingCartContext);
  console.log("Product List ==", productList);
  if (loading) return <h1 className="font-bold text-center mt-20">Loading data...</h1>;

  return (
    <section className="py-12 bg-gray-300 sm:py-16 lg:py-5">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-gray-100 text-center font-bold text-blue-500 rounded-md p-4">
          <h2>Product List Page</h2>
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
