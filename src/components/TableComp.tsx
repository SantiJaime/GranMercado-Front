import { products as initialProducts } from "../mocks/products.json";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  CardFooter,
  Avatar,
} from "@material-tailwind/react";
import { useState } from "react";
import PaginationComp from "./PaginationComp";
import FilterComp from "./FilterComp";
import useFilters from "../hooks/useFilters";

interface Props {
  type: TabType;
}

const TableComp: React.FC<Props> = ({ type }) => {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const [productsPerPage] = useState(24);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = filterProducts(products);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const TABLE_HEAD = ["Producto", "Precio", "Descripción", "Categoría"];

  return (
    <>
      {type === "products" ? (
        <Card className="size-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <Typography variant="h5" color="blue-gray">
                  Productos
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Todos los productos publicados en El Gran Mercado
                </Typography>
              </div>
              <div className="flex w-full shrink-0 gap-2 md:w-max">
                <div className="w-full md:w-72">
                  <FilterComp type="Category" />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredProducts
                  .map(
                    (
                      { title, thumbnail, category, description, price, id },
                      index
                    ) => {
                      const isLast = index === products.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={id}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar
                                src={thumbnail}
                                alt={title}
                                size="md"
                                className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                              />
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {title}
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              ${price}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {description}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {category}
                            </Typography>
                          </td>
                        </tr>
                      );
                    }
                  )
                  .slice(indexOfFirstProduct, indexOfLastProduct)}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-center p-4">
            <PaginationComp
              productsPerPage={productsPerPage}
              totalProducts={filteredProducts.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </CardFooter>
        </Card>
      ) : (
        <p>ORDERS</p>
      )}
    </>
  );
};

export default TableComp;
