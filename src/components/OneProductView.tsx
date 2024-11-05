import {
  ArrowLongRightIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { toast } from "sonner";
import useCart from "../hooks/useCart";

interface Props {
  product: Product;
  role?: string;
}

const OneProductView: React.FC<Props> = ({ product, role }) => {
  const [show, setShow] = useState(false);
  const [activeImage, setActiveImage] = useState(product.thumbnail);
  const { isProdInCart, addToCart } = useCart();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleClickCart = (product: Product) => {
    if (isProdInCart(product)) {
      toast.error("El producto ya se encuentra en el carrito");
      return;
    }
    addToCart(product);
    toast.success("Producto agregado al carrito");
  };

  return (
    <>
      <Button
        fullWidth={true}
        onClick={handleShow}
        variant="text"
        className="flex items-center justify-center gap-2 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
      >
        <span>Ver más</span>
        <ArrowLongRightIcon className="size-5" />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="xl"
        className="modal-open"
      >
        <div className="bg-gray-200">
          <Modal.Body>
            <Row>
              {window.innerWidth < 577 && (
                <Col sm={12} className="flex justify-end">
                  <Button
                    variant="text"
                    className="h-min p-2 transition-all hover:bg-gray-400/50"
                    onClick={handleClose}
                  >
                    <XMarkIcon className="size-5 text-gray-900" />
                  </Button>
                </Col>
              )}
              <Col sm={5}>
                <Row className="justify-center">
                  <Col lg={6} sm={12} className="w-full">
                    <div className="flex min-h-96 items-center justify-center">
                      <Image
                        src={activeImage}
                        alt={product.title}
                        className="size-full rounded-lg bg-blue-gray-200/20 object-cover object-center"
                        fluid
                      />
                    </div>
                    <div className="mt-2 grid grid-cols-3 items-center gap-2">
                      {product.images.map((image, index) => (
                        <Image
                          onClick={() => setActiveImage(image)}
                          src={image}
                          className="w-full cursor-pointer rounded-lg object-contain object-center transition-all hover:bg-blue-gray-500/20 lg:object-cover"
                          alt={`${product.title}-${index}`}
                          key={index}
                        />
                      ))}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={7}>
                <Row className="h-full flex-col justify-between">
                  <Col sm={12}>
                    <div className="flex justify-between">
                      <Typography variant="h2" color="black">
                        {product.title}
                      </Typography>
                      {window.innerWidth >= 577 && (
                        <Button
                          variant="text"
                          className="h-min p-2 transition-all hover:bg-gray-400/50"
                          onClick={handleClose}
                        >
                          <XMarkIcon className="size-5 text-gray-900" />
                        </Button>
                      )}
                    </div>
                    <Typography variant="h5" className="mt-3 text-gray-700">
                      ${product.price}
                    </Typography>
                    <hr className="my-3 text-gray-900" />
                    <Typography variant="paragraph" color="black">
                      {product.description}
                    </Typography>
                  </Col>
                  {role !== "Administrador" && (
                    <Col sm={12}>
                      <Button
                        fullWidth={true}
                        variant="gradient"
                        className="mt-8 flex items-center justify-center gap-2 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        onClick={() => handleClickCart(product)}
                      >
                        <ShoppingCartIcon className="size-5" />
                        <span>Añadir al carrito</span>
                      </Button>
                    </Col>
                  )}
                </Row>
              </Col>
            </Row>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default OneProductView;
