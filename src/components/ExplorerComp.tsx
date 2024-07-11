import { ListBulletIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PercentBadgeIcon } from "./Icons";

const ExplorerComp = () => {
  return (
    <Row className="justify-between gap-3 px-5 py-3 lg:px-40">
      <Col lg={5} sm={12} className="rounded-lg bg-gray-100">
        <Row className="gap-y-4">
          <Col sm={6} className="flex flex-col justify-center py-1">
            <Typography variant="h3">
              ¡Mira todos nuestros productos!
            </Typography>
            <div className="mt-4 flex justify-center">
              <Button variant="gradient">
                <Link to={"/productos"} className="flex items-center gap-1">
                  <ListBulletIcon className="size-5" />
                  <span>Ver todos</span>
                </Link>
              </Button>
            </div>
          </Col>
          <Col
            sm={6}
            className="flex justify-center px-0 sm:justify-end md:justify-end lg:justify-end"
          >
            <Image
              src="/GranMercadoLogo2.png"
              alt="Todos los productos de El Gran Mercado"
              className="w-72 sm:rounded-e-lg md:rounded-e-lg lg:rounded-e-lg"
              fluid
            />
          </Col>
        </Row>
      </Col>
      <Col lg={5} sm={12} className="rounded-lg bg-gray-100">
        <Row className="gap-y-4">
          <Col sm={6} className="flex flex-col justify-center py-1">
            <Typography variant="h3">
              ¡Productos con 40% de descuento!
            </Typography>
            <div className="mt-4 flex justify-center">
              <Button variant="gradient">
                <Link to={"/descuentos"} className="flex items-center gap-1">
                  <PercentBadgeIcon className="size-5" />
                  <span>Ver productos</span>
                </Link>
              </Button>
            </div>
          </Col>
          <Col
            sm={6}
            className="flex justify-center px-0 sm:justify-end md:justify-end lg:justify-end"
          >
            <Image
              src="/Descuentos.png"
              alt="Productos en descuento"
              className="w-72 sm:rounded-e-lg md:rounded-e-lg lg:rounded-e-lg"
              fluid
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ExplorerComp;
