import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Shared/Loading";
import { AuthContext } from "../context/authContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/signIn"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
