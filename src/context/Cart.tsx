import { createContext, useState } from "react";

interface Props {
  children: JSX.Element;
}

export const CartContext = createContext<ProductsContext | undefined>(
  undefined
);

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ProductWithQuantity[]>([]);

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
    const product = cartItems.find((prod) => prod.id === id);
    if (product) {
      product.quantity++;

      setCartItems((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, quantity: product.quantity } : item
        )
      );
    }
  };

  const subtractQuantity = (id: number) => {
    const product = cartItems.find((prod) => prod.id === id);
    if (product && product.quantity > 1) {
      product.quantity--;

      setCartItems((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, quantity: product.quantity } : item
        )
      );
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
