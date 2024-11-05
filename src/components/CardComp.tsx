import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Col } from "react-bootstrap";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import OneProductView from "./OneProductView";
import { toast } from "sonner";
import useCart from "../hooks/useCart";

interface Props {
  product: Product;
  role?: string;
}

const CardComp: React.FC<Props> = ({ product, role }) => {
  const { isProdInCart, addToCart } = useCart();

  const handleClickCart = (product: Product) => {
    if (isProdInCart(product)) {
      toast.error("El producto ya se encuentra en el carrito");
      return;
    }
    addToCart(product);
    toast.success("Producto agregado al carrito");
  };

  return (
    <Col lg={3} md={6} sm={12} className="my-4 flex justify-center">
      <Card className="flex flex-col justify-between">
        <div>
          <CardHeader shadow={false} floated={false}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
            />
          </CardHeader>
          <CardBody>
            <Typography color="blue-gray" className="font-medium">
              {product.title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              ${product.price}
            </Typography>
          </CardBody>
        </div>
        <CardFooter className="flex flex-col gap-y-2 pt-0">
          {role !== "Administrador" && (
            <Button
              fullWidth={true}
              variant="gradient"
              className="flex items-center justify-center gap-2 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              onClick={() => handleClickCart(product)}
            >
              <ShoppingCartIcon className="size-5" />
              <span>Añadir al carrito</span>
            </Button>
          )}
          <OneProductView product={product} role={role} />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default CardComp;
