import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  message: null,
  stats: {
    totalOrders: 0,
    totalCompleteOrders: 0,
    totalPendingOrders: 0,
    monthlySales: 0,
  },
};

const othersSlice = createSlice({
  name: "others",
  initialState: initialState,
  reducers: {
    getStatsRequest: (state) => {
      state.loading = true;
    },
    getStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats.monthlySales = action.payload.monthlySales;
      state.stats.totalCompleteOrders = action.payload.totalCompleteOrders;
      state.stats.totalOrders = action.payload.totalOrders;
      state.stats.totalPendingOrders = action.payload.totalPendingOrders;
      state.message = action.payload.message;
    },
    getStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  getStatsRequest,
  getStatsSuccess,
  getStatsFail,
  clearError,
  clearMessage,
} = othersSlice.actions;

export default othersSlice.reducer;
