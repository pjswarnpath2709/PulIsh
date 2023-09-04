import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
} from "../controllers/order.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { isSubscribed } from "../middlewares/subscribe.js";

const orderRouter = Router();

orderRouter.post("/order/new", [isAuthenticated, isSubscribed], createOrder);

orderRouter.delete(
  "/order/:orderId",
  [isAuthenticated, isSubscribed],
  deleteOrder
);

orderRouter.put(
  "/order/:orderId",
  [isAuthenticated, isSubscribed],
  updateOrder
);

orderRouter.get("/order/all", [isAuthenticated, isSubscribed], getAllOrders);

orderRouter.get(
  "/order/:orderId",
  [isAuthenticated, isSubscribed],
  getOrderById
);

export default orderRouter;
