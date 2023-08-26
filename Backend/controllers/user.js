import User from "../models/User.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import CustomError from '../utils/CustomError.js'

export const register = catchAsyncErrors(async (req, res) => {
  const { name, email, password, avatar } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    throw new CustomError({ message: "user already exists" , statusCode : 401 });
  }
  user = await User.create({
    name,
    email,
    password,
    avatar: { public_id: "public-id", url: "url" },
  });
  res.status(200).json({
    message: true,
    user,
  });
});
