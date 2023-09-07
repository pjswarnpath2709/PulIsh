import pulishServer from "../api/pulishServer";
import {
  changePasswordFail,
  changePasswordRequest,
  changePasswordSuccess,
  forgotPasswordFail,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  resetPasswordFail,
  resetPasswordSuccess,
  updateProfileFail,
  updateProfileRequest,
  updateProfileSuccess,
} from "../slices/profileSlice";

export const forgotPassword =
  ({ email }) =>
    async (dispatch) => {
      try {
        dispatch(forgotPasswordRequest());
        const { data } = await pulishServer.post(
          "/forgotpassword",
          { email },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(forgotPasswordSuccess(data));
      } catch (err) {
        dispatch(forgotPasswordFail(err.response.data.message));
      }
    };

export const resetPassword =
  ({ resetToken, password }) =>
    async (dispatch) => {
      try {
        dispatch(resetPasswordFail());
        const { data } = await pulishServer.put(
          `/resetpassword/${resetToken}`,
          { password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(resetPasswordSuccess(data));
      } catch (err) {
        dispatch(resetPasswordFail(err.response.data.message));
      }
    };

export const changePassword =
  ({ oldPassword, newPassword }) =>
    async (dispatch) => {
      try {
        dispatch(changePasswordRequest());
        const { data } = await pulishServer.put(
          `/user/changepassword`,
          { oldPassword, newPassword },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(changePasswordSuccess(data));
      } catch (err) {
        dispatch(changePasswordFail(err.response.data.message));
      }
    };

export const updateProfile = ({ name, email }) => async (dispatch) => {
  try {
    dispatch(updateProfileRequest());
    const { data } = await pulishServer.put(`/user/updateprofile`, { name, email }, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    dispatch(updateProfileSuccess(data));
  } catch (err) {
    dispatch(updateProfileFail(err.response.data.message));
  }
};
