import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearError, clearMessage } from "../../redux/slices/profileSlice";
import { changePassword } from "../../redux/actions /profileAction";
import Loader from "../Loader/Loader";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading, message, error } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const toastOptions = { position: "top-center" };
    if (message) {
      toast.success(message, toastOptions);
      dispatch(clearMessage());
      navigate("/profile", toastOptions);
    }
    if (error) {
      toast.error(error, { position: "top-center" });
      dispatch(clearError());
    }
  }, [message, error, navigate, dispatch]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const toastOptions = { position: "top-center" };

    if (oldPassword === newPassword) {
      toast.error("New Password as Old Password", toastOptions);
      return;
    }
    if (oldPassword === "") {
      toast.error("Please Enter Old Password", toastOptions);
      return;
    }
    if (newPassword.length < 6) {
      toast.error("Too Short New Password", toastOptions);
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error(
        "Confirm Password and new Password Don't Match",
        toastOptions
      );
    }
    dispatch(changePassword({ oldPassword, newPassword }));
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  if (loading) return <Loader />;
  return (
    <section className="container">
      <div className="form">
        <div className="label">Change Password</div>
        <form onSubmit={onSubmitHandler}>
          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            id="oldpassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            label="Old Password"
            name="oldpassword"
          />
          <TextField
            variant="outlined"
            type="password"
            margin="normal"
            fullWidth
            id="newpassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            label="New Password"
            name="newpassword"
          />
          <TextField
            variant="outlined"
            type="password"
            margin="normal"
            fullWidth
            id="confirmpassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirm Password"
            name="comfirmpassword"
          />
          <button type="submit" className="btn">
            Change Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
