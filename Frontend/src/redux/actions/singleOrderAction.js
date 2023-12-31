import _ from "lodash";
import pulishServer from "../api/pulishServer";
import {
  createOrderFail,
  createOrderRequest,
  createOrderSuccess,
  editOrderFail,
  editOrderRequest,
  editOrderSuccess,
  toggleOrderStatusFail,
  toggleOrderStatusRequest,
  toggleOrderStatusSuccess,
} from "../slices/singleOrderSlice";
import { deleteOrderFail, deleteOrderRequest, deleteOrderSuccess } from "../slices/singleOrderSlice";
export const createOrder =
  ({
    model,
    problemStatement,
    estimateAmount,
    estimateTime,
    customerName,
    customerContact,
  }) =>
    async (dispatch) => {
      try {
        dispatch(createOrderRequest());
        const { data } = await pulishServer.post(
          "/order/new",
          {
            model,
            problemStatement,
            estimateAmount,
            estimateTime,
            customerName,
            customerContact,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(createOrderSuccess(data));
      } catch (err) {
        console.log("\x1b[35m", "👉👉👉 err :", err);
        dispatch(createOrderFail(err.response.data.message));
      }
    };

export const updateOrderDetails =
  (
    { orderId },
    {
      model,
      problemStatement,
      estimateAmount,
      estimateTime,
      customerName,
      customerContact,
    }
  ) =>
    async (dispatch) => {
      let updatedFields = {};
      if (model) updatedFields = { ...updatedFields, model };
      if (problemStatement)
        updatedFields = { ...updatedFields, problemStatement };
      if (estimateAmount) updatedFields = { ...updatedFields, estimateAmount };
      if (estimateTime) updatedFields = { ...updatedFields, estimateTime };
      if (customerName) updatedFields = { ...updatedFields, customerName };
      if (customerContact) updatedFields = { ...updatedFields, customerContact };
      if (_.isEqual(updatedFields, {})) return;
      try {
        dispatch(editOrderRequest());
        const { data } = await pulishServer.put(
          `/order/${orderId}`,
          updatedFields,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(editOrderSuccess(data));
      } catch (err) {
        console.log("\x1b[35m", "👉👉👉 err :", err);
        dispatch(editOrderFail(err.response.data.message));
      }
    };

export const deleteOrder = ({ orderId }) => async (dispatch) => {
  try {
    dispatch(deleteOrderRequest());
    const { data } = await pulishServer.delete(`/order/${orderId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch(deleteOrderSuccess(data));
  } catch (err) {
    dispatch(deleteOrderFail(err.response.data.message));
  }
}

export const toggleOrderStatus = ({ orderId }) => async (dispatch) => {
  try {
    dispatch(toggleOrderStatusRequest());
    const { data } = await pulishServer.put(`/order/orderstatus/${orderId}`, {}, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    dispatch(toggleOrderStatusSuccess(data));
  } catch (err) {
    dispatch(toggleOrderStatusFail(err.response.data.message));
  }
}