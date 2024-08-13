import {
  ArrowLongRightIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

interface Props {
  product: Product;
}

const ProductView: React.FC<Props> = ({ product }) => {
  const [show, setShow] = useState(false);
  const [activeImage, setActiveImage] = useState(product.images[0]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        fullWidth={true}
        variant="text"
        className="flex items-center justify-center gap-2 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        onClick={handleShow}
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
        <div className="bg-gray-300">
          <Modal.Body>
            <Row>
              <Col sm={5}>
                <Row className="justify-center">
                  <Col lg={6} sm={12}>
                    <div className="flex min-h-96 items-center">
                      <Image
                        src={activeImage}
                        alt={product.title}
                        className="rounded-lg object-cover object-center"
                        fluid
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-2">
                      {product.images.map((image, index) => (
                        <Image
                          onClick={() => setActiveImage(image)}
                          src={image}
                          className="sombra w-full cursor-pointer rounded-lg object-contain object-center transition-all lg:object-cover "
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
                    <div className="mt-8 flex justify-between sm:mt-0 md:mt-0 lg:mt-0">
                      <Typography variant="h2" color="black">
                        {product.title}
                      </Typography>
                      <Button
                        variant="text"
                        className="h-min p-2 transition-all hover:bg-gray-700/50"
                        onClick={handleClose}
                      >
                        <XMarkIcon className="size-5 text-gray-900" />
                      </Button>
                    </div>
                    <Typography variant="h5" className="mt-3 text-gray-700">
                      ${product.price}
                    </Typography>
                    <hr className="my-3 text-gray-600" />
                    <Typography variant="paragraph" color="black">
                      {product.description}
                    </Typography>
                  </Col>
                  <Col sm={12}>
                    <Button
                      fullWidth={true}
                      variant="gradient"
                      className="mt-8 flex items-center justify-center gap-2 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                      <ShoppingCartIcon className="size-5" />
                      <span>Añadir al carrito</span>
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default ProductView;
