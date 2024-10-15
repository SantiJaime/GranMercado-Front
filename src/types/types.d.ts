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

type InputType = "text" | "email" | "password" | "textarea" | "date" | "number" | "search";

interface CreateUserValues {
  email: string;
  fullName: string;
  password: string;
  repeatPassword: string;
  id_role?: number;
}

interface ErrorMessage {
  msg: string;
}

interface UserResponse {
  id: number;
  email: string;
  fullName: string;
  password: string;
  role: string;
}

interface CreateUserResponse {
  msg: string;
  newUser: Pick<UserResponse, "email" | "password" | "role">;
}

type UserLogin = Pick<UserResponse, "email" | "password">;

interface UserLoginResponse {
  msg: string;
  userData: Pick<UserResponse, "email" | "id" | "role">;
  token: string;
}

interface AuthResponse {
  msg: string;
  isTokenVerified: boolean;
}

type TabType = "products" | "users";

interface GetAllUsersResponse {
  msg: string;
  allUsers: Pick<UserResponse, "email" | "fullName" | "id" | "role">[];
}
