import User from "../models/User.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import CustomError from "../utils/CustomError.js";
import cookieOptions from "../constants/cookieOptions.js";

export const register = catchAsyncErrors(async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    throw new CustomError({ message: "user already exists", statusCode: 401 });
  }
  user = await User.create({
    name,
    email,
    password,
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

export const forgetPassword = catchAsyncErrors(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new CustomError(UserErrors.UserNotFound);
  const resetToken = await user.getResetToken();
  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
  const message = `click on the link to reset your password . ${url}. if you have not requested then please ignore.`;
  await sendEmail(user.email, "Pulish Reset Password Token", message);
  res.status(200).json({
    success: true,
    message: `user token has been send to ${user.email}`,
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
    if (!user) throw new CustomError(AuthErrors.TokenInvalidOrExpired);
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    res.status(200).json({
      success: true,
      message: "password reset successfully",
    });
  });