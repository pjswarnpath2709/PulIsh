import "./Login.css";
import { TextField } from "@mui/material";
import loginImg from "../../images/login.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/authAction";
import { Link } from "react-router-dom";
const LoginFormWithImage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };
  return (
    <section className="container">
      <div className="card">
        <div className="media">
          <img src={loginImg} alt="" />
        </div>
        <div className="form">
          <div className="label">Login</div>
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
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              autoComplete="current-password"
            />
            <div className="forgot">
              <Link replace to={'/forgotpassword'} href="">{"Forgot Password?"}</Link>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
          <div style={{ textAlign: "center" }} className="bottom">
            <Link replace to={"/register"} style={{ fontSize: ".8rem" }} href="">
              {"Don't have an account ? SignUp."}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginFormWithImage;
