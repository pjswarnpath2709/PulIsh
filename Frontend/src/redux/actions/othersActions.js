import pulishServer from "../api/pulishServer";
import {
  getStatsFail,
  getStatsRequest,
  getStatsSuccess,
  subscribeToNotificationFail,
  subscribeToNotificationRequest,
  subscribeToNotificationSuccess,
} from "../slices/othersSlice";

export const getStats = () => async (dispatch) => {
  try {
    dispatch(getStatsRequest());
    const { data } = await pulishServer.get("/others/stats", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch(getStatsSuccess(data));
  } catch (err) {
    dispatch(getStatsFail(err.response.data.message));
  }
};

export const subscribeToNotifications =
  ({ device_token }) =>
  async (dispatch) => {
    try {
      dispatch(subscribeToNotificationRequest());
      const { data } = await pulishServer.post(
        "/others/notifications",
        {
          device_token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(subscribeToNotificationSuccess(data));
    } catch (err) {
      dispatch(subscribeToNotificationFail(err.response.data.message));
    }
  };
