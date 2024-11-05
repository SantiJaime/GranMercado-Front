import { Container, Row } from "react-bootstrap";
import { products as initialProducts } from "../mocks/products.json";
import { useEffect, useState } from "react";
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
  const [userRole, setUserRole] = useState("");

  const filteredProducts = filterProducts(products);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const role = sessionStorage.getItem("role");
  useEffect(() => {
    setUserRole(JSON.parse(role as string));
  }, [role]);

  return (
    <>
      <div className="filtersClass mt-8">
        <FilterComp type="Category" />
        <FilterComp type="Price" />
      </div>

      <Container fluid className="my-8">
        <Typography variant="h2">Nuestros productos</Typography>
        <hr />
        <Row>
          {filteredProducts
            .map((product) => (
              <CardComp product={product} key={product.id} role={userRole} />
            ))
            .slice(indexOfFirstProduct, indexOfLastProduct)}
        </Row>
        {filteredProducts.length === 0 ? (
          <div className="mt-8 text-center">
            <Typography variant="h2">
              No hay productos acordes al filtrado
            </Typography>
          </div>
        ) : (
          <PaginationComp
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Container>
    </>
  );
};

export default ProductsPage;
