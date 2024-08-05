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
import { type Product } from "../types/types";

interface Props {
  product: Product;
}

const CardComp: React.FC<Props> = ({ product }) => {
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
        <CardFooter className="pt-0">
          <Button
            fullWidth={true}
            variant="gradient"
            className="shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default CardComp;
