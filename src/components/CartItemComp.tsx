import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import { Button } from "flowbite-react";
import React from "react";
import { Col, Image } from "react-bootstrap";
import { CartXIcon } from "./Icons";
import useCart from "../hooks/useCart";
import { toast } from "sonner";

interface Props {
  product: ProductWithQuantity;
}

const CartItemComp: React.FC<Props> = ({ product }) => {
  const { removeFromCart, addQuantity, subtractQuantity } = useCart();

  const handleDelete = (id: number) => {
    removeFromCart(id);
    toast.success("Producto eliminado correctamente del carrito");
  };

  return (
    <Col sm={6} className="my-2">
      <div className="rounded-md bg-blue-gray-200/20 p-2">
        <Image src={product.thumbnail} alt={product.title} fluid />
        <Typography color="black">{product.title}</Typography>
        <Typography color="black" variant="h6">
          ${product.price}
        </Typography>
        <hr className="my-2" />
        <div className="flex items-center justify-center gap-1">
          <button className="rounded-lg bg-red-600 p-2 text-white" onClick={() => subtractQuantity(product.id)}>
            <MinusIcon className="size-4" />
          </button>
          <Typography color="black" variant="h6">
            {product.quantity}
          </Typography>
          <button className="rounded-lg bg-green-600 p-2 text-white" onClick={() => addQuantity(product.id)}>
            <PlusIcon className="size-4" />
          </button>
        </div>
        <div className="mt-2 flex justify-center">
          <Button
            gradientMonochrome="failure"
            className="gap-2"
            onClick={() => handleDelete(product.id)}
          >
            <CartXIcon className="size-5" />
            <span>Eliminar</span>
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default CartItemComp;
