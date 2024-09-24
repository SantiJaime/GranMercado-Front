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
  email: string;
  fullName: string;
  password: string;
  repeatPassword: string;
  id_role?: number;
}

interface LoginUserValues {
  email: string;
  password: string;
}
interface ErrorMessage {
  statusCode: number;
  message: string;
}

interface UserResponse {
  email: string;
  fullName: string;
  password: string;
  role: string;
}

interface CreateUserResponse {
  statusCode: number;
  message: string;
  user: UserResponse;
}
