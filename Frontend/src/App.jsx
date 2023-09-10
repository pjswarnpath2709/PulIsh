import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import LandingPage from "./Components/LandingPage/LandingPage";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import { useEffect } from "react";
import Loader from "./Components/Loader/Loader";
import { loadUser } from "./redux/actions/authAction";
import { clearError, clearMessage } from "./redux/slices/authSlice";
import Profile from "./Components/Profile/Profile";
import ForgetPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import Sidebar from "./Components/Sidebar/Sidebar";
import DashBoard from "./Components/DashBoard/DashBoard";
import Order from "./Components/Order/Order";
import Messaging from "./Components/Messaging/Messaging";

function App() {
  const { isAuth, loading, error, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (message) {
      toast.success(message, { position: "top-center" });
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error, { position: "top-center" });
      dispatch(clearError());
    }
  }, [message, error, dispatch]);

  if (loading) return <Loader />;

  return (
    <>
      <Messaging />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuth}
                authRouteRedirect={"/login"}
              />
            }
          >
            <Route path="/dashboard" element={<Sidebar />}>
              <Route index element={<DashBoard />} />
              <Route path="orders" element={<Order />} />
              <Route path="profile" element={<Profile />} />
              <Route path="changepassword" element={<ChangePassword />} />
            </Route>
          </Route>
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={!isAuth}
                authRouteRedirect={"/dashboard"}
              />
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgetPassword />} />
            <Route
              path="/resetpassword/:resetToken"
              element={<ResetPassword />}
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
