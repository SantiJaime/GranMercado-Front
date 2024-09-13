import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const RoutesView = () => {
  return (
    <Routes>
      <Route path="/iniciar-sesion" element={<LoginPage />} />
      <Route path="/registrarse" element={<RegisterPage />} />
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesView;
