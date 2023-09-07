import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: false,
  error: null,
  filters: {
    searchTerm: null,
    page: null,
    startDate: null,
    endDate: null,
    payment: null,
    orderStatus: null,
  },
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    getOrdersRequest: (state) => {
      state.loading = true;
    },
    getOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const {
  getOrdersFail,
  getOrdersRequest,
  getOrdersSuccess,
  clearError,
  updateFilters,
  clearFilters,
} = ordersSlice.actions;

export default ordersSlice.reducer;
