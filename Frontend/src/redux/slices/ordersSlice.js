import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  currentPage: 0,
  totalOrders: 0,
  totalPages: 0,
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
      state.orders = action.payload.orders;
      state.currentPage = Number(action.payload.currentPage);
      state.totalOrders = action.payload.totalOrders;
      state.totalPages = action.payload.totalPages;
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
