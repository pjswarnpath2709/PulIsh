import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/actions/profileAction";
import { loadUser } from "../../redux/actions/authAction";

// eslint-disable-next-line react/prop-types
const EditProfileModal = ({ open, handleClose }) => {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();

  const onSaveButtonHandler = () => {
    dispatch(updateProfile({ name, email }));
    dispatch(loadUser());
    handleClose();
  };
  const onCancelButtonHandler = () => {
    handleClose();
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            style={{
              marginRight: "1rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            size="small"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            label="Name"
          />
          <TextField
            style={{
              marginRight: "1rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            size="small"
            id="email"
            label="email"
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

export default EditProfileModal;
