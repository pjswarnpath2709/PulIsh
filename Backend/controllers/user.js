import User from "../models/User.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import CustomError from "../utils/CustomError.js";
import cookieOptions from "../constants/cookieOptions.js";
import sendEmail from "../utils/SendEmail.js";
import crypto from "crypto";

export const register = catchAsyncErrors(async (req, res) => {
  const { name, email, password, firm, address } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    throw new CustomError({ message: "user already exists", statusCode: 401 });
  }
  user = await User.create({
    name,
    email,
    password,
    firm,
    address,
  });
  const token = user.getJWTToken();
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
  console.log(
    "\x1b[35m",
    `[${new Date(Date.now()).toLocaleString()}]`,
    "👉👉👉 email :",
    email
  );
  console.log(
    "\x1b[35m",
    `[${new Date(Date.now()).toLocaleString()}]`,
    "👉👉👉 password :",
    password
  );
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

export const getUserDetails = catchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.user._id);
  res.status(201).json({
    success: true,
    user: user,
    message: "user details fetched successfully",
  });
});

export const forgotPassword = catchAsyncErrors(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    throw new CustomError({ message: "Invalid email Id", statusCode: 400 });
  const resetToken = await user.getResetToken();
  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
  const message = `click on the link to reset your password . ${url}. if you have not requested then please ignore.`;
  await sendEmail({
    to: user.email,
    subject: "Pulish Reset Password Email!",
    text: message,
  });
  res.status(200).json({
    success: true,
    message: `reset password email has been send to ${user.email}`,
  });
});

export const resetPassword = catchAsyncErrors(async (req, res) => {
  const { token } = req.params;
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {
      $gt: Date.now(),
    },
  });
  if (!user)
    throw new CustomError({
      message: "Invalid Token or Expired Token, Please Try Again!",
      statusCode: 400,
    });
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();
  res.status(200).json({
    success: true,
    message: "password reset successfully",
  });
});

export const updateProfile = catchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.user._id);
  await user.updateOne({ $set: req.body });
  await user.save();
  res.status(201).json({
    message: "details updated successfully",
    success: true,
  });
});

export const changePassword = catchAsyncErrors(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (oldPassword === newPassword) {
    throw new CustomError({
      message: "old and new password are same",
      statusCode: 400,
    });
  }
  if (isMissing(oldPassword, newPassword))
    throw new CustomError({
      message: "Either Old Password or new Password is missing",
      statusCode: 400,
    });
  const user = await User.findById(req.user._id);
  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) {
    throw new CustomError({
      message: "Invalid email or password",
      statusCode: 401,
    });
  }
  user.password = newPassword;
  await user.save();
  res.status(200).json({
    message: "password updated successfully",
    success: true,
  });
});
