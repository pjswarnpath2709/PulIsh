import User from "../models/User.js";
import CustomError from "../utils/CustomError.js";
import { catchAsyncErrors } from "./catchAsyncError.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    throw new CustomError({ message: "User not logged In", statusCode: 401 });
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded._id);
  if (!user) {
    throw new CustomError({
      message: "Invalid User or Email",
      statusCode: 500,
    });
  }
  req.user = user;
  next();
});
