import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { checkAuth } from "../helpers/usersQueries";

interface Props {
  children?: JSX.Element;
}
const PrivateRoutes: React.FC<Props> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthentication = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      setIsAuth(false);
      setIsLoading(false);
      toast.error("Token inexistente o inválido");
      return;
    }

    try {
      const res = await checkAuth(token);
      if (res.isTokenVerified) setIsAuth(true);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      setIsAuth(false);
      throw new Error("Error desconocido");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    checkAuthentication();
  }, []);

  if (isLoading) {
    return (
      <div className="mt-24 flex flex-col items-center justify-center">
        <Spinner className="text-center" variant="black" />
        <Typography className="mt-3" variant="h4" color="black">
          Verificando autenticación...
        </Typography>
      </div>
    );
  }
  return isAuth ? children || <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
