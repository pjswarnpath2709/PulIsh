import mongoose, { Schema } from "mongoose";

export const OrderStatusEnum = ["open", "closed"];

export const PaymentStatusEnum = ["done", "pending"];

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
      default: "open",
      enum: OrderStatusEnum,
    },
    payment: {
      type: String,
      default: "pending",
      enum: PaymentStatusEnum,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    closedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

export default Order;
