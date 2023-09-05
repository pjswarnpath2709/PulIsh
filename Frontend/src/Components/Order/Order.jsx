import Table from "../Table/Table";
import "./Order.css";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

const Order = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = ["Pending", "Completed"];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const createOrder = (e) => {
    e.preventDefault();
    console.log("");
  };
  return (
    <>
      <div className="main-content">
        <header className="order-header">
          <div className="order-navigation">
            {categories.map((category) => (
              <div
                key={category}
                className={`category ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </header>
        <main className="card-container">
          <h3>Enter Customer Details :</h3>
          <div className="card-wrapper">
            <TextField size="small" required id="name" label="Name" />
            <TextField size="small" required id="problem" label="Problem" />
            <TextField
              size="small"
              required
              id="contact"
              label="Contact Number"
            />
            <TextField size="small" required id="mobile" label="Mobile Model" />
            <TextField size="small" required id="amount" label="Amount" />
            <TextField size="small" required id="date" label="Date" />
          </div>
          <a href="" className="order-btn" onClick={createOrder}>
            <span>Create Order</span>
            <AddCircleIcon />
          </a>
        </main>
        <Table height={"400px"} overflowY={"auto"} />
      </div>
    </>
  );
};

export default Order;
