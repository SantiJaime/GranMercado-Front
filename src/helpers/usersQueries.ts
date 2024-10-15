import Swal from "sweetalert2";
import { URL } from "../constants/const";

export const getAllUsers = async () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error(
      "No tienes los permisos necesarios para realizar esta acción"
    );
  }
  try {
    const response = await fetch(`${URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    if (!response.ok) {
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

export const deleteUser = async (id: number) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    throw new Error(
      "No tienes los permisos necesarios para realizar esta acción"
    );
  }

  const result = await Swal.fire({
    title: "¿Estás seguro de eliminar este usuario?",
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  });

  if (!result.isConfirmed) throw new Error("Acción cancelada por el usuario");

  try {
    const response = await fetch(`${URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });

    if (!response.ok) {
      const errorResponse: ErrorMessage = await response.json();
      throw new Error(errorResponse.msg);
    }

    const res: { msg: string } = await response.json();
    return res;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Error desconocido");
  }
};
