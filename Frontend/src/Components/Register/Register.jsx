import "./Register.css";
import { TextField, Typography } from "@mui/material";
import loginImg from "../../images/login.svg";
import { useState } from "react";
import { registerUser } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [firm, setFirm] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      address === "" ||
      firm === ""
    ) {
      toast.error("Please Enter Required Fields", { position: "top-center" });
      return;
    }
    dispatch(registerUser({ name, email, password, firm, address }));
    setEmail("");
    setPassword("");
    setName("");
    setFirm("");
    setEmail("");
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
                label="Username*"
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
                label="Email*"
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
                label="Password*"
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="address"
                label="Business Name*"
                type="text"
                id="firm"
                autoComplete="firm"
                size="small"
                value={firm}
                onChange={(e) => setFirm(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="address"
                label="Business Address*"
                type="text"
                id="address"
                autoComplete="address"
                size="small"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {""}
              <Typography>* fields are required.</Typography>
              <button type="submit" className="btn">
                Sign Up
              </button>
            </form>
            <div className="bottom">
              <Link to={"/login"} replace href="">
                {"Already have an account ? SignIn."}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
