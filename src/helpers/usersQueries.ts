import { URL } from "../constants/const";

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${URL}/users`);
    if(!response.ok){
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: GetAllUsersResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) throw error;

    throw new Error("Error desconocido");
  }
};

export const createNewUser = async (userData: CreateUserValues) => {
  try {
    const response = await fetch(`${URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        fullName: userData.fullName,
        password: userData.password,
        id_role: 1,
      }),
    });
    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: CreateUserResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) throw error;

    throw new Error("Error desconocido");
  }
};

export const loginUser = async (userData: UserLogin) => {
  try {
    const { email, password } = userData;

    const response = await fetch(`${URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: UserLoginResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) throw error;
    throw new Error("Error desconocido");
  }
};

export const checkAuth = async (token: string) => {
  try {
    const response = await fetch(`${URL}/users/verify-token`, {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }
    const res: AuthResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) throw error;

    throw new Error("Error desconocido");
  }
};
