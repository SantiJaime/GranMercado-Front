import { useContext } from "react";
import { CartContext } from "../context/Cart";

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("El contexto de carrito no existe");

  return context;
};

export default useCart;
