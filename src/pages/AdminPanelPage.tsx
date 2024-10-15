import { Container } from "react-bootstrap";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { UserCircleIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { createElement, useState } from "react";
import TableComp from "../components/TableComp";

const AdminPanelPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("products");
  const DATA = [
    {
      label: "Productos",
      value: "products",
      icon: ShoppingBagIcon,
    },
    {
      label: "Usuarios",
      value: "users",
      icon: UserCircleIcon,
    },
  ];
  return (
    <Container className="my-8" fluid>
      <Tabs value={activeTab}>
        <TabsHeader>
          {DATA.map(({ label, value, icon }) => (
            <Tab key={value} value={value} onClick={() => setActiveTab(value as TabType)}>
              <div className={`flex items-center gap-2 ${
                activeTab === value ? "text-gray-900" : "text-gray-600"
              }`}>
                {createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel value={activeTab}>
            <TableComp type={activeTab} />
          </TabPanel>
        </TabsBody>
      </Tabs>
    </Container>
  );
};

export default AdminPanelPage;
