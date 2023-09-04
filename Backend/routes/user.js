import express from "express";
const router = express.Router();
import {
  changePassword,
  forgetPassword,
  getUserDetails,
  login,
  logout,
  register,
  resetPassword,
  updateProfile,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(isAuthenticated, logout);

router.route("/forgetpassword").post(forgetPassword);

router.route("/resetpassword/:token").put(resetPassword);

router.route("/user/me").get(isAuthenticated, getUserDetails);

router.route("/user/updateprofile").put(isAuthenticated, updateProfile);

router.route("/user/changepassword").put(isAuthenticated, changePassword);

export default router;
