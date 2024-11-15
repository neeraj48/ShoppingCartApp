import { Fragment } from "react";
import "./App.css";
import ProductList from "./pages/productList";
import ProductDetail from "./pages/productDetails";
import CartList from "./pages/cartList";
import PageNotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="product-list" element={<ProductList />} />
        <Route path="product-detail/:id" element={<ProductDetail />} />
        <Route path="cart" element={<CartList />} />
        <Route path="*" element={<PageNotFound />} />ll
      </Routes>
    </Fragment>
  );
}

export default App;
