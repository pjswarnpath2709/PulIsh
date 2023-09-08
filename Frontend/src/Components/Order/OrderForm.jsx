import { TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/actions/singleOrderAction";
import { toast } from "react-toastify";
import { clearMessage } from "../../redux/slices/authSlice";
// import { getOrders } from "../../redux/actions/ordersAction";
const OrderForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [model, setModel] = useState("");
  const [estimateAmount, setEstimateAmount] = useState(0);
  const [estimateTime, setEstimateTime] = useState("");
  const dispatch = useDispatch();
  const resetState = () => {
    setCustomerContact("");
    setCustomerName("");
    setEstimateAmount(0);
    setEstimateTime("");
    setModel("");
    setProblemStatement("");
  };
  const createOrderHandler = () => {
    if (
      model === "" ||
      customerContact === "" ||
      customerName === "" ||
      estimateAmount === 0 ||
      estimateTime === "" ||
      problemStatement === ""
    ) {
      toast.error("required fields are missing", { position: "top-center" });
      return;
    }
    dispatch(
      createOrder({
        model,
        customerContact,
        problemStatement,
        customerName,
        estimateAmount,
        estimateTime,
      })
    );
  };

  const { loading, message } = useSelector((state) => state.singleOrder);

  useEffect(() => {
    if (message) {
      dispatch(clearMessage());
      resetState();
    }
  }, [message, dispatch]);

  const numericPattern = /^[0-9]*$/; // Regular expression to match only numeric characters

  const handleInput = (event) => {
    const inputText = event.target.value;

    // Check if the input matches the numeric pattern and is within the character limit
    if (inputText.match(numericPattern) && inputText.length <= 10) {
      // Update the input value
      event.target.value = inputText;
    } else {
      // Prevent input if it doesn't meet the criteria
      event.preventDefault();
    }
  };
  return (
    <main className="card-container">
      <h3>Enter Customer Details :</h3>
      <div className="card-wrapper">
        <TextField
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          size="small"
          required
          id="name"
          label="Name"
        />
        <TextField
          value={problemStatement}
          onChange={(e) => setProblemStatement(e.target.value)}
          size="small"
          required
          id="problem"
          label="Problem"
        />
        <TextField
          size="small"
          value={customerContact}
          inputProps={{
            maxLength: 10,
            pattern: "[0-9]*", // Pattern attribute for additional browser support
            inputMode: "numeric", // Input mode attribute for better mobile keyboard
          }}
          onInput={handleInput}
          onChange={(e) => setCustomerContact(e.target.value)}
          required
          id="contact"
          label="Contact Number"
        />
        <TextField
          size="small"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
          id="model"
          label="Model"
        />
        <TextField
          size="small"
          type="number"
          required
          id="amount"
          value={estimateAmount}
          onChange={(e) => setEstimateAmount(e.target.value)}
          label="Amount"
        />
        <TextField
          size="small"
          value={estimateTime}
          onChange={(e) => setEstimateTime(e.target.value)}
          required
          id="date"
          label="Estimate Time"
        />
      </div>
      <button
        disabled={loading}
        href=""
        className="order-btn"
        onClick={createOrderHandler}
      >
        <span>Create Order</span>
        <AddCircleIcon />
      </button>
    </main>
  );
};

export default OrderForm;
