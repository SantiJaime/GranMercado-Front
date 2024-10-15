import { HomeIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container className="my-8 flex flex-col items-center gap-y-6">
      <Image src="/error404.png" alt="Error 404" fluid className="rounded-lg" />
      <Link to={"/"}>
        <Button
          variant="filled"
          color="white"
          size="lg"
          className="flex items-center gap-2"
        >
          <HomeIcon className="size-5" />
          <span>Ir a inicio</span>
        </Button>
      </Link>
    </Container>
  );
};

export default ErrorPage;
