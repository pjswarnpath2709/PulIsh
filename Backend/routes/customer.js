import { Router } from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
} from "../controllers/customer.js";

const customerRouter = Router();

customerRouter.post("/customer/new", createCustomer);

customerRouter.put("/customer/:customerId", updateCustomer);

customerRouter.delete("/customer/:customerId", deleteCustomer);

customerRouter.get("/customer/all", getAllCustomers);

customerRouter.get("/customer/:customerId", getCustomerById);


export default customerRouter;
