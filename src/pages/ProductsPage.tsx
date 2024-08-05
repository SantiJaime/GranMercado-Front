import { Container, Row } from "react-bootstrap";
import { products as initialProducts } from "../mocks/products.json";
import { useState } from "react";
import CardComp from "../components/CardComp";
import { Typography } from "@material-tailwind/react";
import PaginationComp from "../components/PaginationComp";
import FilterComp from "../components/FilterComp";
import useFilters from "../hooks/useFilters";

const ProductsPage = () => {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const [productsPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = filterProducts(products);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  return (
    <>
      <div className="mt-8 flex justify-center">
        <FilterComp />
      </div>

      <Container fluid className="my-8">
        <Typography variant="h2">Nuestros productos</Typography>
        <hr />
        <Row>
          {filteredProducts
            .map((product) => <CardComp product={product} key={product.id} />)
            .slice(indexOfFirstProduct, indexOfLastProduct)}
        </Row>
        <PaginationComp
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </>
  );
};

export default ProductsPage;
