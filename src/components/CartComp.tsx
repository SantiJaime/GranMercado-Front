import { useState } from "react";
import { Drawer } from "flowbite-react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
const CartComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
  return (
    <>
      <button
        className="flex items-center gap-1 text-gray-900 transition hover:text-blue-600"
        type="button"
        aria-label="Ver carrito de compras"
        onClick={handleOpen}
      >
        <ShoppingCartIcon className="size-5" />
        <span>Carrito</span>
      </button>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header
          title="Mi carrito"
          titleIcon={
            ShoppingCartIcon as React.FunctionComponent<
              React.SVGProps<SVGSVGElement>
            >
          }
        />
        <hr />
        <Drawer.Items>
          {cartItems.length === 0 && <Typography className="mt-2 text-center" variant="h6">Aún no agregaste productos a tu carrito</Typography>}
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default CartComp;
