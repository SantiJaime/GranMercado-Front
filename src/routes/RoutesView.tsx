import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProductsPage from "../pages/ProductsPage";

const RoutesView = () => {
  return (
    <Routes>
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesView;
