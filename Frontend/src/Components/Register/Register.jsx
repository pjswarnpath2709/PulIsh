import "./Register.css";
import { TextField } from "@mui/material";
import loginImg from "../../images/Login.svg";

const Register = () => {
  return (
    <>
      <section className="container">
        <div className="card">
          <div className="media">
            <img src={loginImg} alt="" />
          </div>
          <div className="form">
            <div className="label">Sign Up</div>
            <form>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                size="small"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                size="small"
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
                size="small"
              />
              <button type="submit" className="btn">
                Sign Up
              </button>
            </form>
            <div className="bottom">
              <a href="">{"Already have an account ? SignIn."}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
