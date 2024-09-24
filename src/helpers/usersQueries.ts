import { URL } from "../constants/const";

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
      throw new Error(errorResponse.message);
    }
    const res: CreateUserResponse = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) throw error;

    throw new Error("Error desconocido");
  }
};
