import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { FILTER_MENU_OPTIONS } from "../constants/const";
import useFilters from "../hooks/useFilters";
import { RangeInput } from "./InputComp";

interface Props {
  type: "Category" | "Price";
}

const FilterComp: React.FC<Props> = ({ type }) => {
  const { setFilters, filters } = useFilters();

  const handleChangeCategory = (value: string) => {
    setFilters((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  const handleChangePrice = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(ev.target.value);
    setFilters((prevState) => ({
      ...prevState,
      minPrice: value,
    }));
  };

  return (
    <>
      {type === "Category" ? (
        <Menu>
          <MenuHandler>
            <Button variant="gradient" className="flex items-center gap-1">
              <FunnelIcon className="size-4" />
              <span>Filtar por categoria</span>
            </Button>
          </MenuHandler>
          <MenuList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {FILTER_MENU_OPTIONS.map(({ name, category, icon }) => (
              <MenuItem
                key={name}
                onClick={() => handleChangeCategory(category)}
              >
                <div className="flex items-center gap-1">
                  <img src={icon} alt={name} className="w-8" />
                  <span>{name}</span>
                </div>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        type === "Price" && (
          <div className="w-80">
            <Typography variant="h6">Precio a partir de:</Typography>
            <div className="flex items-center gap-1">
              <RangeInput
                id="price-range-filter"
                value={Number(filters.minPrice)}
                onChange={handleChangePrice}
                min={0}
                max={15000}
              />
              <Typography variant="h6">
                ${Math.round(filters.minPrice)}
              </Typography>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default FilterComp;
