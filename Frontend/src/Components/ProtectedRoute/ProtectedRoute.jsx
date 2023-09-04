/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAuthenticated,
  authRouteRedirect,
  children,
  isAdminRoute,
  isAdmin,
  adminRouteRedirect,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={authRouteRedirect} replace />;
  }
  if (isAdminRoute && !isAdmin) {
    return <Navigate to={adminRouteRedirect} replace />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
