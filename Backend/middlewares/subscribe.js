import { catchAsyncErrors } from "./catchAsyncError.js";
import CustomError from "../utils/CustomError.js";

export const isSubscribed = catchAsyncErrors(async (req, res, next) => {
  if (!req.user.subscribed)
    throw new CustomError({ message: "User not Subscribed", statusCode: 404 });
  next();
});
