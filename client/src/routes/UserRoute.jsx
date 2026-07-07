import { Navigate, Outlet } from "react-router-dom";

const UserRoute = () => {
  const isUser = true; // Change to false to test redirect

  if (!isUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default UserRoute;
