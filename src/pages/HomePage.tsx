import { popularProducts as initialPopularProducts } from "../mocks/popularProducts.json";
import { Col, Container, Row } from "react-bootstrap";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import CarouselComp from "../components/CarouselComp";
import { useEffect, useState } from "react";
import { CAROUSEL_IMAGES1, CAROUSEL_IMAGES2 } from "../constants/const";
import ExplorerComp from "../components/ExplorerComp";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import OneProductView from "../components/OneProductView";
import { toast } from "sonner";
import useCart from "../hooks/useCart";

const HomePage = () => {
  const [popularProducts] = useState(initialPopularProducts);
  const [userRole, setUserRole] = useState("");
  const { addToCart, isProdInCart } = useCart();

  const role = sessionStorage.getItem("role");

  useEffect(() => {
    setUserRole(JSON.parse(role as string));
  }, [role]);

  const handleClickCart = (product: Product) => {
    if (isProdInCart(product)) {
      toast.error("El producto ya se encuentra en el carrito");
      return;
    }
    addToCart(product);
    toast.success("Producto agregado al carrito");
  };

  return (
    <>
      {window.innerWidth >= 960 ? (
        <CarouselComp images={CAROUSEL_IMAGES1} />
      ) : (
        <CarouselComp images={CAROUSEL_IMAGES2} />
      )}
      <Container className="my-8" fluid>
        <section className="rounded-lg bg-gray-200 p-3">
          <Typography variant="h4">Nuestros productos más comprados</Typography>
          <Row>
            {popularProducts.map((product) => (
              <Col
                lg={2}
                sm={6}
                xs={12}
                key={product.id}
                className="my-4 flex justify-center"
              >
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
                    {userRole !== "Administrador" && (
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
                    <OneProductView product={product} role={userRole} />
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
        <section>
          <ExplorerComp />
        </section>
      </Container>
    </>
  );
};

export default HomePage;
