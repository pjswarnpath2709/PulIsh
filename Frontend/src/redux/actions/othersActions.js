import pulishServer from "../api/pulishServer";
import {
  getStatsFail,
  getStatsRequest,
  getStatsSuccess,
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
