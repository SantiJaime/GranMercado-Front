import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  FunnelIcon,
} from "@heroicons/react/24/outline";
import { FILTER_MENU_OPTIONS } from "../constants/const";
import useFilters from "../hooks/useFilters";
const FilterComp = () => {
  const { setFilters } = useFilters();

  const handleChangeCategory = (value: string) => {
    setFilters((prevState) => ({
      ...prevState,
      category: value,
    }));
  };


  return (
    <Menu>
      <MenuHandler>
        <Button
          variant="gradient"
          className="flex items-center gap-1"
        >
          <FunnelIcon className="size-4" />
          <span>Filtar por categoria</span>
        </Button>
      </MenuHandler>
      <MenuList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {FILTER_MENU_OPTIONS.map(({ name, category, icon }) => (
          <MenuItem key={name} onClick={() => handleChangeCategory(category)}>
            <div className="flex items-center gap-1">
              <img src={icon} alt={name} className="w-8" />
              <span>{name}</span>
            </div>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default FilterComp;
