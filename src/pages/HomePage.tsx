import { products as initialProducts } from "../mocks/products.json";
import useFilters from "../hooks/useFilters";
import { Col, Container, Row } from "react-bootstrap";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";

const HomePage = () => {
  const { filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  const handleChange = (value: string) => {
    setFilters((prevState) => ({
      ...prevState,
      category: value,
    }));
  };
  return (
    <Container className="my-8" fluid>
      <div className="w-72">
        <Select label="Filtro" onChange={(value) => handleChange(value as string)}>
          <Option value="laptops">Notebooks</Option>
          <Option value="smartphones">Celulares</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
      </div>
      <Row>
        {filteredProducts.map((product) => (
          <Col
            lg={4}
            md={6}
            sm={12}
            key={product.id}
            className="my-4 flex justify-center"
          >
            <Card className="w-96">
              <CardHeader shadow={false} floated={false} className="h-96">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="size-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center justify-between">
                  <Typography color="blue-gray" className="font-medium">
                    {product.title}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    ${product.price}
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75"
                >
                  {product.description}
                </Typography>
              </CardBody>
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
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
