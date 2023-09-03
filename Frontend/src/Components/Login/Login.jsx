import "./Login.css";
import { TextField } from "@mui/material";
import loginImg from "../../images/Login.svg";
const LoginFormWithImage = () => {
  return (
    <section className="container">
      <div className="card">
        <div className="media">
          <img src={loginImg} alt="" />
        </div>
        <div className="form">
          <div className="label">Login</div>
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
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
              id="password"
              autoComplete="current-password"
            />
            <div className="forgot">
              <a href="">{"Forgot Password?"}</a>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
          <div style={{ textAlign: "center" }} className="bottom">
            <a style={{ fontSize: ".8rem" }} href="">
              {"Don't have an account ? SignUp."}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginFormWithImage;
