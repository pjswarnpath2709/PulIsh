import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
  message: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuth = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuth = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.user = null;
      state.isAuth = false;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuth = true;
      state.message = action.payload.message;
      state.user = action.payload.user;
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
  loginRequest,
  loginFail,
  loginSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  clearError,
  clearMessage,
  registerFail,
  registerRequest,
  registerSuccess,
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
} = authSlice.actions;

export default authSlice.reducer;
