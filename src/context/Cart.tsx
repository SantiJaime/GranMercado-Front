import { createContext, useEffect, useState } from "react";

interface Props {
  children: JSX.Element;
}

export const CartContext = createContext<ProductsContext | undefined>(
  undefined
);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const cartLS = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cartItems, setCartItems] = useState<ProductWithQuantity[]>(cartLS);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const isProdInCart = (product: Product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  const addToCart = (product: Product) => {
    setCartItems((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  const addQuantity = (id: number) => {
    const prodIndex = cartItems.findIndex((prod) => prod.id === id);
    if (prodIndex !== -1) {
      cartItems[prodIndex].quantity++;
      setCartItems((prevState) => [...prevState]);
    }
  };

  const subtractQuantity = (id: number) => {
    const prodIndex = cartItems.findIndex((prod) => prod.id === id);
    if (prodIndex === -1) return;

    if (cartItems[prodIndex].quantity > 1) {
      cartItems[prodIndex].quantity--;
      setCartItems((prevState) => [...prevState]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        isProdInCart,
        removeFromCart,
        addQuantity,
        subtractQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
