import "./Register.css";
import { TextField } from "@mui/material";
import loginImg from "../../images/Login.svg";
import { useState } from "react";
import { registerUser } from "../../redux/actions /authAction";
import { useDispatch } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") return;
    dispatch(registerUser({ name, email, password }));
    setEmail("");
    setPassword("");
    setName("");
  };
  return (
    <>
      <section className="container" onSubmit={onSubmitHandler}>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
