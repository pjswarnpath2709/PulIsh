import { Router } from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
} from "../controllers/order.js";

const orderRouter = Router();

orderRouter.post("/order/new", createOrder);

orderRouter.delete("/order/:orderId", deleteOrder);

orderRouter.put("/order/:orderId", updateOrder);

orderRouter.get("/order/all", getAllOrders);

orderRouter.get("/order/:orderId", getOrderById);

export default orderRouter;
