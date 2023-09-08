import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import Order, { OrderStatusEnum } from "../models/Order.js";

export const getStats = catchAsyncErrors(async (req, res) => {
  const totalOrders = await Order.countDocuments();
  const totalPendingOrders = await Order.find({
    orderStatus: OrderStatusEnum.open,
  }).countDocuments();
  const totalCompleteOrders = totalOrders - totalPendingOrders;

  const getMonthlySales = async () => {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );
    return await Order.aggregate([
      {
        $match: {
          closedAt: {
            $gte: firstDayOfMonth,
            $lte: lastDayOfMonth,
          },
          orderStatus: OrderStatusEnum.closed,
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
  const monthlySales = (await getMonthlySales())[0].totalAmount;
  res.status(201).json({
    success: true,
    totalOrders,
    totalCompleteOrders,
    totalPendingOrders,
    monthlySales,
    message: "stats loaded!",
  });
});
