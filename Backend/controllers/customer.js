import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import Customer from "../models/Customer.js";
import CustomError from "../utils/CustomError.js";
import CustomerApiFeature from "../utils/CustomerFeatures.js";

export const createCustomer = catchAsyncErrors(async (req, res) => {
  const { name, contactNumber, email } = req.body;
  if (!name || !contactNumber) {
    throw new Error("Name or Contact Number is Not Provided");
  }
  const customer = new Customer({ name, contactNumber, email });

  await customer.save();

  res.status(200).json({
    success: true,
    message: "customer created",
    customer: customer._doc,
  });
});

export const updateCustomer = catchAsyncErrors(async (req, res) => {
  const { customerId } = req.params;
  const customer = await Customer.findById(customerId);
  if (!customer) {
    throw new CustomError({ message: "Invalid Customer Id", statusCode: 404 });
  }
  await customer.updateOne({ $set: req.body });
  res.status(201).json({
    success: true,
    message: "customer updated successfully",
  });
});

export const deleteCustomer = catchAsyncErrors(async (req, res) => {
  const { customerId } = req.params;
  const customer = await Customer.findById(customerId);
  if (!customer) {
    throw new CustomError({ message: "Invalid Customer Id", statusCode: 404 });
  }
  await customer.deleteOne();
  req.status(200).json({
    success: true,
    message: "customer deleted successfully",
  });
});

export const getAllCustomers = catchAsyncErrors(async (req, res) => {
  const { searchTerm, page, resultsPerPage } = req.query;
  const apiFeatures = new CustomerApiFeature({ operator: Customer.find() });
  const customers = await (
    await apiFeatures.search({ searchTerm })
  ).pagination({
    currentPage: page,
    resultsPerPage,
  }).operator;
  res.status(201).json({
    totalCustomers: customers.length,
    customers,
    success: true,
    message: "customers fetched successfully",
  });
});

export const getCustomerById = catchAsyncErrors(async (req, res) => {
  const { customerId } = req.params;
  const customer = await Customer.findById(customerId);
  if (!customer) {
    throw new CustomError({ message: "Invalid Customer", statusCode: 404 });
  }
  res.status(200).json({
    customer,
    success: true,
    message: "Customer fetched successfully",
  });
});

