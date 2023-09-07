import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: null,
  loading: false,
  error: null,
  message: null,
};

const singleOrderSlice = createSlice({
  name: "singleOrder",
  initialState: initialState,
  reducers: {
    createOrderRequest: (state) => {
      state.loading = true;
    },
    createOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    editOrderRequest: (state) => {
      state.loading = true;
    },
    editOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    editOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentOrder: (state, action) => {
      state.order = action.payload;
    },
    deleteOrderRequest: (state) => {
      state.loading = true;
    },
    deleteOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    deleteOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload
    },
    clearOrder: (state) => {
      state.order = initialState.order;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
});

export const {
  createOrderFail,
  createOrderRequest,
  createOrderSuccess,
  editOrderFail,
  editOrderRequest,
  editOrderSuccess,
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderFail,
  clearError,
  clearMessage,
  clearOrder,
  setCurrentOrder,
} = singleOrderSlice.actions;

export default singleOrderSlice.reducer;
