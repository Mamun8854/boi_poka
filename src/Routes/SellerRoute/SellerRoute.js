import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import UseSeller from "../../Hooks/UseSeller/UseSeller";
import Loading from "../../Pages/Shared/Loading/Loading";

const SellerRoute = ({ children }) => {
  const { user, loading, logOutUser } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = UseSeller(user?.email);
  const location = useLocation();
  const navigate = useNavigate();
  if (loading || isSellerLoading) {
    return <Loading></Loading>;
  }

  if (!isSeller) {
    logOutUser();
    return navigate("/");
  }

  if (isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
