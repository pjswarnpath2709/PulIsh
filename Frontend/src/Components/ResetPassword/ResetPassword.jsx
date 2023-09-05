import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { clearError, clearMessage } from "../../redux/slices/authSlice";
import Loader from "../Loader/Loader";
import { resetPassword } from "../../redux/actions /profileAction";

const ResetPassword = () => {
  const { resetToken } = useParams();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading, message, error } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  useEffect(() => {
    if (message) {
      toast.success(message, { position: "top-center" });
      dispatch(clearMessage());
      navigate("/login", { replace: true });
    }
    if (error) {
      toast.error(error, { position: "top-center" });
      dispatch(clearError());
      navigate("/forgotpassword", { replace: true });
    }
  }, [message, error, dispatch, navigate]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password does'nt Match", {
        position: "top-center",
      });
      return;
    } else if (password.length < 6) {
      toast.error("Password too short , use atleast 6 characters", {
        position: "top-center",
      });
      return;
    } else {
      dispatch(resetPassword({ resetToken, password }));
      setConfirmPassword("");
      setPassword("");
    }
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <section className="container">
      <div className="form">
        <div className="label">Reset Password</div>
        <form onSubmit={onSubmitHandler}>
          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            name="password"
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
            Save Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
