import express from "express";
const router = express.Router();
import { login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(isAuthenticated, logout);

export default router;
