import { isMissing } from "../helper/checks.js";
import Customer from "../models/Customer.js";
import CustomError from "../utils/CustomError.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import Order, { OrderStatusEnum, PaymentStatusEnum } from "../models/Order.js";
import OrderApiFeature from "../utils/OrderFeatures.js";

export const createOrder = catchAsyncErrors(async (req, res) => {
  const {
    model,
    problemStatement,
    estimateAmount,
    estimateTime,
    customerName,
    customerContact,
  } = req.body;

  // if any of the given given things is missing throw error
  if (
    isMissing(
      model,
      problemStatement,
      estimateAmount,
      estimateTime,
      customerName,
      customerContact
    )
  ) {
    throw new CustomError({
      message: "required field is missing",
      statusCode: 400,
    });
  }

  // check if the customer already present in the database
  let customer = await Customer.findOne({
    name: customerName,
    contactNumber: customerContact,
  });
  if (!customer) {
    // if the customer is not already present create one
    customer = new Customer({
      name: customerName,
      contactNumber: customerContact,
    });
    await customer.save();
  }
  const order = new Order({
    model,
    problemStatement,
    estimateAmount,
    estimateTime,
    customer,
  });
  await order.save();
  res.status(200).json({
    success: "true",
    order: order._doc,
    message: "order created successfully",
  });
});

export const deleteOrder = catchAsyncErrors(async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);
  if (!order) {
    throw new CustomError({
      message: "Invalid OrderID",
      statusCode: 404,
    });
  }
  await order.deleteOne();
  res.status(201).json({
    success: true,
    message: "order deleted successfully",
  });
});

export const updateOrder = catchAsyncErrors(async (req, res) => {
  const { orderId } = req.params;
  if (isMissing(req.body))
    throw new CustomError({ message: "Nothing to update", statusCode: 400 });
  const { model, problemStatement, estimateAmount, estimateTime } = req.body;
  const order = await Order.findById(orderId).populate("customer");
  if (!order) {
    throw new CustomError({ message: "Invalid OrderId", statusCode: 400 });
  }
  if (order.payment === PaymentStatusEnum.done)
    throw new CustomError({
      message: "Order's Payment is Done , cannot edit",
      statusCode: 400,
    });
  await order.updateOne({
    $set: { model, problemStatement, estimateAmount, estimateTime },
  });
  res.status(201).json({
    success: true,
    message: `${order.customer.name}'s order: ${order._id} updated successfully`,
  });
});

export const toggleOrderStatus = catchAsyncErrors(async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);
  if (!order)
    throw new CustomError({ message: "Order does'nt exists", statusCode: 404 });
  if (order.orderStatus === OrderStatusEnum.closed) {
    order.orderStatus = OrderStatusEnum.open;
    order.closedAt = null;
  } else {
    order.orderStatus = OrderStatusEnum.closed;
    order.closedAt = new Date(Date.now()).toISOString();
  }
  await order.save();
  res.status(201).json({
    success: true,
    message: `${order._id}s is now ${order.orderStatus}`,
  });
});

export const togglePaymentStatus = catchAsyncErrors(async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);
  if (!order)
    throw new CustomError({ message: "Order does'nt exists", statusCode: 404 });
  if (order.payment === PaymentStatusEnum.done) {
    order.payment = PaymentStatusEnum.pending;
  } else {
    order.payment = PaymentStatusEnum.done;
  }
  await order.save();
  res.status(201).json({
    success: true,
    message: `${order._id} payment is  ${order.payment}`,
  });
});

export const getAllOrders = catchAsyncErrors(async (req, res) => {
  const {
    searchTerm,
    page,
    resultsPerPage,
    startDate,
    endDate,
    payment,
    orderStatus,
  } = req.query;
  const apiFeatures = new OrderApiFeature({ operator: Order.find() });
  const orders = await (
    await (
      await apiFeatures.search({ searchTerm })
    )
      .filterByOrderStatus({ orderStatus })
      .filterByPaymentStatus({ paymentStatus: payment })
      .filterByDate({ startDate, endDate })
      .pagination({
        currentPage: Number(page),
        resultsPerPage: resultsPerPage ?? 20,
      })
  ).operator.populate("customer");
  res.status(201).json({
    totalOrders: orders.length,
    currentPage: page ?? 1,
    orders,
    success: true,
    message: "orders fetched successfully",
  });
});

export const getOrderById = catchAsyncErrors(async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);
  if (!order) {
    throw new CustomError({ message: "Invalid orderId", statusCode: 404 });
  }
  res.status(200).json({
    order,
    success: true,
    message: "Order fetched successfully",
  });
});
