import User from "../models/User.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import CustomError from "../utils/CustomError.js";
import cookieOptions from "../constants/cookieOptions.js";

export const register = catchAsyncErrors(async (req, res) => {
  const { name, email, password, avatar } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    throw new CustomError({ message: "user already exists", statusCode: 401 });
  }
  user = await User.create({
    name,
    email,
    password,
    avatar: { public_id: "public-id", url: "url" },
  });
  const token = user.getJWTToken();
  console.log("\x1b[35m", "👉👉👉 token :", token);
  const newUser = { ...user._doc };
  delete newUser.password;
  res.status(200).cookie("token", token, cookieOptions).json({
    success: true,
    message: "user registered successfully",
    user: newUser,
  });
});

export const login = catchAsyncErrors(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError({
      message: "Invalid email or password",
      statusCode: 401,
    });
  }
  console.log(user);
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new CustomError({
      message: "Invalid email or password",
      statusCode: 401,
    });
  }
  const newUser = { ...user._doc };
  delete newUser.password;
  const token = user.getJWTToken();
  res.status(200).cookie("token", token, cookieOptions).json({
    success: true,
    message: "user logged in successfully",
    user: newUser,
  });
});

export const logout = catchAsyncErrors(async (req, res) => {
  res
    .status(200)
    .cookie("token", null, cookieOptions)
    .clearCookie("token")
    .json({
      success: true,
      message: "logged out successfully",
    });
});
