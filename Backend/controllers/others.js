import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import Order, { OrderStatusEnum } from "../models/Order.js";
import User from "../models/User.js";
import { mongoose } from "mongoose";

export const getStats = catchAsyncErrors(async (req, res) => {
  const totalOrders = await Order.find({ user: req.user._id }).countDocuments();
  const totalPendingOrders = await Order.find({
    user: req.user._id,
    orderStatus: OrderStatusEnum.open,
  }).countDocuments();
  const totalCompleteOrders = totalOrders - totalPendingOrders;

  const getMonthlySales = async (userId) => {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return await Order.aggregate([
      {
        $match: {
          closedAt: {
            $gte: firstDayOfMonth,
            $lte: lastDayOfMonth,
          },
          orderStatus: OrderStatusEnum.closed,
          user: new mongoose.Types.ObjectId(userId), // Assuming userId is a string
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$estimateAmount" },
        },
      },
    ]);
  };
  const monthlySalesArray = await getMonthlySales(req.user._id);
  const monthlySales =
    monthlySalesArray.length > 0 ? monthlySalesArray[0].totalAmount : 0;

  res.status(201).json({
    success: true,
    totalOrders,
    totalCompleteOrders,
    totalPendingOrders,
    monthlySales,
    message: "stats loaded!",
  });
});

export const subscribeUserForNotification = catchAsyncErrors(
  async (req, res) => {
    const { device_token } = req.body;
    const user = await User.findById(req.user._id).select("device_tokens");
    if (
      user.device_tokens.find((token) => {
        return token === device_token;
      }) === undefined
    ) {
      user.device_tokens.push(device_token);
    }
    await user.save();
    res.status(201).json({
      message: "device registered for notifications",
      success: true,
    });
  }
);