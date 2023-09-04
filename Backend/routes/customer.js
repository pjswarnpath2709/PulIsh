import { Router } from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
} from "../controllers/customer.js";
import { isAuthenticated } from "../middlewares/auth.js";

const customerRouter = Router();

customerRouter.post("/customer/new", isAuthenticated, createCustomer);

customerRouter.put("/customer/:customerId", isAuthenticated, updateCustomer);

customerRouter.delete("/customer/:customerId", isAuthenticated, deleteCustomer);

customerRouter.get("/customer/all", isAuthenticated, getAllCustomers);

customerRouter.get("/customer/:customerId", isAuthenticated, getCustomerById);

export default customerRouter;
