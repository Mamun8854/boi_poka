import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import UseAdmin from "../../Hooks/UseAdmin/UseAdmin";
import UseSeller from "../../Hooks/UseSeller/UseSeller";
import Loading from "../../Pages/Shared/Loading/Loading";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email, true);
  const [isSeller] = UseSeller(user?.email, true);

  if (loading) {
    return <Loading></Loading>;
  }
  console.log(isSeller);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard" className="font-bold">
                    All Buyers
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/all-sellers" className="font-bold">
                    All Sellers
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/reported-items" className="font-bold">
                    Reported Items
                  </Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/my-buyers" className="font-bold">
                    My buyers
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/add-product" className="font-bold">
                    Add A product
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/my-products" className="font-bold">
                    My Products
                  </Link>
                </li>
              </>
            )}
            {!isAdmin && !isSeller && (
              <>
                <li>
                  <Link to="/dashboard/my-orders" className="font-bold">
                    My Orders
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
