import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import LandingPage from "./LandingPage/LandingPage";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import { useEffect } from "react";
import Loader from "./Components/Loader/Loader";
import { loadUser } from "./redux/actions /authAction";
import { clearError, clearMessage } from "./redux/slices/authSlice";
import Profile from "./Components/Profile/Profile";

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
      toast.info(message, { position: "top-center" });
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [message, error, dispatch]);

  if (loading) return <Loader />;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add routes those are accessible when user is "logged In", but not accessible when "user is not logged In" here */}
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={isAuth}
                authRouteRedirect={"/login"}
              />
            }
          >
            <Route path="/profile" element={<Profile />} />
          </Route>
          {/* Add routes those are accessible when user is "not logged In", but not accessible when "user is logged In" here */}
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={!isAuth}
                authRouteRedirect={"/profile"}
              />
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
