import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
  toggleOrderStatus,
  togglePaymentStatus,
  updateOrder,
} from "../controllers/order.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { isSubscribed } from "../middlewares/subscribe.js";

const orderRouter = Router();

const appliedMiddleWares = [isAuthenticated, isSubscribed];

orderRouter.post("/order/new", appliedMiddleWares, createOrder);

orderRouter.delete("/order/:orderId", appliedMiddleWares, deleteOrder);

orderRouter.put("/order/:orderId", appliedMiddleWares, updateOrder);

orderRouter.put(
  "/order/payment/:orderId",
  appliedMiddleWares,
  togglePaymentStatus
);

orderRouter.put(
  "/order/orderstatus/:orderId",
  appliedMiddleWares,
  toggleOrderStatus
);

orderRouter.get("/order/all", appliedMiddleWares, getAllOrders);

orderRouter.get("/order/:orderId", appliedMiddleWares, getOrderById);

export default orderRouter;
