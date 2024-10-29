import { useState } from "react";
import { Drawer } from "flowbite-react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import CartItemComp from "./CartItemComp";
import { Row } from "react-bootstrap";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
const CartComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

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
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="left"
        className="flex min-w-96 flex-col justify-between"
      >
        <div>
          <Drawer.Header
            title="Mi carrito"
            titleIcon={
              ShoppingCartIcon as React.FunctionComponent<
                React.SVGProps<SVGSVGElement>
              >
            }
          />
          <hr className="mb-3 text-gray-900" />
          <Drawer.Items>
            {cartItems.length === 0 ? (
              <Typography className="mt-2 text-center" variant="h6">
                Aún no agregaste productos a tu carrito
              </Typography>
            ) : (
              <Row>
                {cartItems.map((product: ProductWithQuantity) => (
                  <CartItemComp key={product.id} product={product} />
                ))}
              </Row>
            )}
          </Drawer.Items>
        </div>
        <div>
          <hr className="mb-3" />
          <Link to={"/checkout"} onClick={handleClose}>
            <Button
              className="flex items-center justify-center gap-2"
              fullWidth
            >
              <ShoppingCartIcon className="size-5" />
              <span>Finalizar compra y proceder al pago</span>
            </Button>
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default CartComp;
