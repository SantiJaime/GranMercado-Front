import { useContext } from "react";
import { FiltersContext } from "../context/Filter";

const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) throw new Error("El contexto de filtros no existe");

  const { filters, setFilters } = context;

  const filterProducts = (products: Product[]) => {
    return products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
    );
  };

  return { filterProducts, setFilters, filters };
};

export default useFilters;
