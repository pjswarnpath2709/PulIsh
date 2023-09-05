import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../../redux/actions /profileAction";
import { toast } from "react-toastify";
import { clearError, clearMessage } from "../../../redux/slices/authSlice";
import Loader from "../../Layouts/Loader/Loader";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
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
    }
  }, [message, error, dispatch, navigate]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword({ email }));
    setEmail("");
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <section className="container">
      <div className="form">
        <div className="label">Forget Password ?</div>
        <form onSubmit={onSubmitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            name="email"
            autoComplete="email"
          />
          <button type="submit" className="btn">
            Reset Password Link!
          </button>
        </form>
        <div style={{ textAlign: "center" }} className="bottom">
          <Link replace to={"/register"} style={{ fontSize: ".8rem" }} href="">
            {"Don't have an account ? SignUp."}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
