import Table from "../Table/Table";
import "./Order.css";
import OrderForm from "./OrderForm";
import OrderHeader from "./OrderHeader";

const Order = () => {
  return (
    <>
      <div className="main-content">
        <OrderHeader />
        <OrderForm />
        <Table height={"400px"} overflowY={"auto"} />
      </div>
    </>
  );
};

export default Order;
