import User from "../models/User.js";
import CustomError from "../utils/CustomError.js";
import { catchAsyncErrors } from "./catchAsyncError.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  console.log("\x1b[35m", "👉👉👉 req :", req);
  const { token } = req.cookie;
  if (!token)
    throw new CustomError({ message: "User not logged In", statusCode: 401 });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded._id);
  next();
});
