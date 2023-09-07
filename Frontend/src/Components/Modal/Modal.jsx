import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearOrder } from "../../redux/slices/singleOrderSlice";
import { updateOrderDetails } from "../../redux/actions/singleOrderAction";

// eslint-disable-next-line react/prop-types
const Modal = ({ open, handleClose }) => {
  const { order } = useSelector((state) => state.singleOrder);
  const dispatch = useDispatch();
  const [model, setModel] = useState(order?.model);
  const [problem, setProblem] = useState(order?.problemStatement);
  const [amount, setAmount] = useState(order?.estimateAmount);
  const [estimateTime, setEstimateTime] = useState(order?.estimateTime);

  const onSaveButtonHandler = () => {
    dispatch(
      updateOrderDetails(
        { orderId: order?._id },
        {
          estimateAmount: amount,
          estimateTime: estimateTime,
          model: model,
          problemStatement: problem,
        }
      )
    );
    dispatch(clearOrder());
    handleClose();
  };
  const onCancelButtonHandler = () => {
    dispatch(clearOrder());
    handleClose();
  };
  if (!order) {
    dispatch(clearOrder());
    handleClose();
  }
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Order</DialogTitle>
        <DialogContent>
          <TextField
            style={{
              marginRight: "1rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            size="small"
            required
            value={order?.customer?.name}
            disabled
            id="name"
            label="Name"
          />
          <TextField
            style={{
              marginRight: "1rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            size="small"
            required
            id="problem"
            label="Problem"
          />
          <TextField
            style={{
              marginRight: "1rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            value={order?.customer?.contactNumber}
            disabled
            size="small"
            required
            id="mobile"
            label="Contact Number"
          />
          <TextField
            style={{
              marginRight: "1rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            value={model}
            onChange={(e) => setModel(e.target.value)}
            size="small"
            required
            id="model"
            label="Mobile Model"
          />
          <TextField
            style={{
              marginRight: "1rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            size="small"
            required
            id="amount"
            label="Amount"
          />
          <TextField
            style={{
              marginRight: "1rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            size="small"
            required
            value={estimateTime}
            onChange={(e) => setEstimateTime(e.target.value)}
            id="date"
            label="Date"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancelButtonHandler}>Cancel</Button>
          <Button onClick={onSaveButtonHandler}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
