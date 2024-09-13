import { useEffect, useState } from "react";
import { Navbar, Button, IconButton, Collapse } from "@material-tailwind/react";
import {
  Bars3Icon,
  HomeIcon,
  PhoneIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import CartComp from "./CartComp";

const NAVIGATION = [
  {
    name: "Inicio",
    href: "/",
    icon: <HomeIcon className="size-5" />,
  },
  {
    name: "Productos",
    href: "/productos",
    icon: <ShoppingBagIcon className="size-5" />,
  },
  {
    name: "Contacto",
    href: "/contacto",
    icon: <PhoneIcon className="size-5" />,
  },
];

const NavbarComp = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="my-4 flex flex-col gap-6 lg:flex-row lg:items-center">
      {NAVIGATION.map((item) => (
        <Link
          to={item.href}
          key={item.name}
          className="flex items-center gap-1 text-gray-900 transition hover:text-blue-600"
        >
          {item.icon}
          <span>{item.name}</span>
        </Link>
      ))}
      <CartComp />
    </div>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none border-0 bg-gray-300 px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          <Image
            src="/LogoGranMercado.png"
            alt="Logo - El gran mercado"
            width={200}
            fluid
          />
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav((prevState) => !prevState)}
          >
            {openNav ? (
              <XMarkIcon className="size-6" />
            ) : (
              <Bars3Icon className="size-6" />
            )}
          </IconButton>
        </div>
        <div className="divNavbar">
          <Link to={"/iniciar-sesion"}>
            <Button variant="text" size="sm">
              Iniciar sesión
            </Button>
          </Link>
          <Link to={"/registrarse"}>
            <Button variant="gradient" size="sm">
              Registrarse
            </Button>
          </Link>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="">
            <span>Iniciar sesión</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Registrarse</span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComp;
