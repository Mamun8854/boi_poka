import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import UseSeller from "../../Hooks/UseSeller/UseSeller";
import Loading from "../../Pages/Shared/Loading/Loading";

const SellerRoute = ({ children }) => {
  const { user, loading, logOutUser } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = UseSeller(user?.email);
  const location = useLocation();

  if (loading || isSellerLoading) {
    return <Loading></Loading>;
  }

  if (!isSeller) {
    return logOutUser();
  }

  if (isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
