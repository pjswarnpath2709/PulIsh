import {
  loadUserFail,
  loadUserRequest,
  loadUserSuccess,
  loginFail,
  loginRequest,
  loginSuccess,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  registerFail,
  registerRequest,
  registerSuccess,
} from "../slices/authSlice";
import pulishServer from "../api/pulishServer";

export const registerUser =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      dispatch(registerRequest());
      const { data } = await pulishServer.post(
        "/register",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("\x1b[35m", "👉👉👉 data :", data);
      dispatch(registerSuccess(data.user));
    } catch (err) {
      dispatch(registerFail(err.response.data.errorMessage));
    }
  };

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch(loginRequest());
      const { data } = await pulishServer.post(
        "/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("\x1b[35m", "👉👉👉 data :", data);
      dispatch(loginSuccess(data));
    } catch (err) {
      dispatch(loginFail(err.response.data.message));
    }
  };

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());
    const { data } = await pulishServer.get("/logout");
    dispatch(logoutSuccess(data));
  } catch (err) {
    dispatch(logoutFail(err.response.data.message));
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());
    const { data } = await pulishServer.get("/user/me", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch(loadUserSuccess(data));
  } catch (err) {
    dispatch(loadUserFail(err.response.data.message));
  }
};
