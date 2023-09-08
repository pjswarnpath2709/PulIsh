import pulishServer from "../api/pulishServer";
import {
  getOrdersFail,
  getOrdersRequest,
  getOrdersSuccess,
  updateFilters,
} from "../slices/ordersSlice";

export const setFilterOptions =
  ({ searchTerm, page, startDate, endDate, payment, orderStatus }) =>
  async (dispatch) => {
    let filtersToUpdate = {};
    if (searchTerm !== undefined) {
      filtersToUpdate = { ...filtersToUpdate, searchTerm };
    }
    if (page !== undefined) {
      filtersToUpdate = { ...filtersToUpdate, page };
    }
    if (startDate !== undefined) {
      filtersToUpdate = { ...filtersToUpdate, startDate };
    }
    if (endDate !== undefined) {
      filtersToUpdate = { ...filtersToUpdate, endDate };
    }
    if (payment !== undefined) {
      filtersToUpdate = { ...filtersToUpdate, payment };
    }
    if (orderStatus !== undefined) {
      filtersToUpdate = { ...filtersToUpdate, orderStatus };
    }
    dispatch(updateFilters(filtersToUpdate));
  };

export const getOrders =
  ({ searchTerm, page, startDate, endDate, payment, orderStatus }) =>
  async (dispatch) => {
    // Create an object to hold the query parameters
    const queryParams = { resultsPerPage: 10 };

    // Add parameters to the object if they are not null or undefined
    if (searchTerm !== null && searchTerm !== undefined) {
      queryParams.searchTerm = searchTerm;
    }

    if (page !== null && page !== undefined) {
      queryParams.page = page;
    }

    if (startDate !== null && startDate !== undefined) {
      queryParams.startDate = startDate;
    }

    if (endDate !== null && endDate !== undefined) {
      queryParams.endDate = endDate;
    }

    if (payment !== null && payment !== undefined) {
      queryParams.payment = payment;
    }

    if (orderStatus !== null && orderStatus !== undefined) {
      queryParams.orderStatus = orderStatus;
    }

    try {
      dispatch(getOrdersRequest());
      const { data } = await pulishServer.get("/order/all", {
        params: queryParams,
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      dispatch(getOrdersSuccess(data));
    } catch (err) {
      dispatch(getOrdersFail(err.response.data.message));
    }
  };
