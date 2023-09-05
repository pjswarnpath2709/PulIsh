import "./Home.css";
import DashBoard from "../DashBoard/DashBoard";
import Order from "../Order/Order";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState("orders");

  const handleSidebarButtonClick = (component) => {
    setSelectedComponent(component);
  };
  return (
    <>
      <div className="wrapper">
        <Sidebar onButtonClick={handleSidebarButtonClick} />
        {selectedComponent === "orders" && <Order />}
        {selectedComponent === "dashboard" && <DashBoard />}
      </div>
    </>
  );
};

export default Home;
