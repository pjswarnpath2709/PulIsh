import mongoose, { Schema } from "mongoose";

export const OrderStatusEnum = { open: "open", closed: "closed" };

export const PaymentStatusEnum = { done: "done", pending: "pending" };

const OrderSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: [true, "Please Enter Model"],
    },
    problemStatement: {
      type: String,
      required: [true, "Please Enter Problem Statement"],
    },
    estimateAmount: {
      type: Number,
      required: [true, "Please Enter Estimate Amount"],
    },
    estimateTime: {
      type: String,
      required: [true, "Please Enter Estimate Time"],
    },
    orderStatus: {
      type: String,
      default: OrderStatusEnum.open,
      enum: [OrderStatusEnum.open, OrderStatusEnum.closed],
    },
    payment: {
      type: String,
      default: PaymentStatusEnum.pending,
      enum: [PaymentStatusEnum.pending, PaymentStatusEnum.done],
    },
    customer: {
      name: {
        type: String,
        required: [true, "please enter customer's name"],
      },
      contactNumber: {
        type: String,
        required: [true, "please enter customer's number"],
      },
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "please enter the user id"],
    },
    closedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
