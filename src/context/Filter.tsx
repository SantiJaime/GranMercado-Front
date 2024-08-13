import { createContext, useState } from "react";

interface Props {
  children: JSX.Element;
}

export const FiltersContext = createContext<IFiltersContext | undefined>(undefined);

export const FiltersProvider: React.FC<Props> = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
