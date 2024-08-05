import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import {
  Button,
  IconButton,
  type IconButtonProps,
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

type ColorType = IconButtonProps["color"];

interface ItemProps {
  variant: "filled" | "text";
  color: ColorType;
  onClick: () => void;
  className: string;
}

interface Props {
  productsPerPage: number;
  totalProducts: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const PaginationComp: React.FC<Props> = ({
  productsPerPage,
  currentPage,
  setCurrentPage,
  totalProducts,
}) => {
  const [visibleButtons, setVisibleButtons] = useState(8);
  const pages = Math.ceil(totalProducts / productsPerPage);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setVisibleButtons(8);
    } else if (window.innerWidth >= 768) {
      setVisibleButtons(6);
    } else {
      setVisibleButtons(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getItemProps = (index: number): ItemProps => ({
    variant: currentPage === index ? "filled" : "text",
    color: "gray",
    onClick: () => setCurrentPage(index),
    className: "rounded-full",
  });

  const next = () => {
    if (currentPage === pages) return;

    setCurrentPage(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
  };

  const renderPageButtons = () => {
    const buttons = [];
    let startPage = Math.max(currentPage - Math.floor(visibleButtons / 2), 1);
    let endPage = startPage + visibleButtons - 1;

    if (endPage > pages) {
      endPage = pages;
      startPage = Math.max(endPage - visibleButtons + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <IconButton key={i} {...getItemProps(i)}>
          {i}
        </IconButton>
      );
    }

    return buttons;
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="size-4" /> Anterior
      </Button>
      <div className="flex items-center gap-2">
        {renderPageButtons()}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={currentPage === pages}
      >
        Siguiente
        <ArrowRightIcon strokeWidth={2} className="size-4" />
      </Button>
    </div>
  );
};

export default PaginationComp;
