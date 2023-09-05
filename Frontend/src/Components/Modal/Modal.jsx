import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// eslint-disable-next-line react/prop-types
const Modal = ({ open, handleClose }) => {
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
            id="name"
            label="Name"
          />
          <TextField
            style={{
              marginRight: "1rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
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
            id="date"
            label="Date"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
