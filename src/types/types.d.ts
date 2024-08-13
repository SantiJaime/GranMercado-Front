interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  images: string[];
}
interface IFilters {
  category: string;
  minPrice: number;
}
interface IFiltersContext {
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}
