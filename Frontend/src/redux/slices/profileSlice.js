import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    forgotPasswordRequest: (state) => {
      state.loading = true;
    },
    forgotPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    forgotPasswordFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordRequest: (state) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    resetPasswordFail: (state, action) => {
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
  forgotPasswordFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  resetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  clearError,
  clearMessage,
} = profileSlice.actions;

export default profileSlice.reducer;
