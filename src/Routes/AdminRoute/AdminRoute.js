import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import UseAdmin from "../../Hooks/UseAdmin/UseAdmin";
import Loading from "../../Pages/Shared/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isAdmin, isAdminLoading] = UseAdmin(user?.email, true);

  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }

  if (!isAdmin) {
    logOutUser();
    return navigate("/");
  }

  if (isAdmin === true) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
