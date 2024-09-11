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

interface InputAndSelect {
  id: string;
  name: string;
  label: string;
  value: string | number;
  icon: JSX.Element;
  errors?: string;
  touched?: boolean;
}

type InputType = "text" | "email" | "password" | "textarea" | "date" | "number";

interface CreateUserValues {
  email: string,
  password: string
}

type LoginUserValues = Partial<CreateUserValues>
