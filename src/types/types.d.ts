import type { Dispatch, SetStateAction } from "react";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface IFilters {
  category: string;
  minPrice: number;
}
export interface IFiltersContext {
  filters: IFilters;
  setFilters: Dispatch<SetStateAction<IFilters>>;
}
