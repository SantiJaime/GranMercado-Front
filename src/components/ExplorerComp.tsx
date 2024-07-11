import { ListBulletIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PercentBadgeIcon } from "./Icons";

const ExplorerComp = () => {
  const OPTIONS = [
    {
      title: "¡Mira todos nuestros productos!",
      icon: <ListBulletIcon className="size-5" />,
      to: "/productos",
      buttonText: "Ver todos",
      image: {
        src: "/GranMercadoLogo2.png",
        alt: "Todos los productos de El Gran Mercado",
      },
    },
    {
      title: "¡Productos con 40% de descuento!",
      icon: <PercentBadgeIcon className="size-5" />,
      to: "/descuentos",
      buttonText: "Ver productos",
      image: {
        src: "/Descuentos.png",
        alt: "Productos en descuento",
      },
    },
  ];

  return (
    <Row className="justify-between gap-3 px-5 py-3 lg:px-40">
      {OPTIONS.map(({ title, icon, to, buttonText, image }) => (
        <Col lg={5} sm={12} className="rounded-lg bg-gray-100" key={title}>
          <Row className="gap-y-4">
            <Col sm={6} className="flex flex-col justify-center py-1">
              <Typography variant="h3">{title}</Typography>
              <div className="mt-4 flex justify-center">
                <Button variant="gradient">
                  <Link to={to} className="flex items-center gap-1">
                    {icon}
                    <span>{buttonText}</span>
                  </Link>
                </Button>
              </div>
            </Col>
            <Col
              sm={6}
              className="flex justify-center px-0 sm:justify-end md:justify-end lg:justify-end"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-72 sm:rounded-e-lg md:rounded-e-lg lg:rounded-e-lg"
                fluid
              />
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

export default ExplorerComp;
