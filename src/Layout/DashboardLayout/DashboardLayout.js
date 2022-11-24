import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
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
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard" className="text-teal-900 font-bold">
                My Appointment
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users" className="font-bold">
                Users
              </Link>
            </li>
            <li>
              <Link to="/dashboard/add-doctor" className="font-bold">
                Add Doctor
              </Link>
            </li>
            <li>
              <Link to="/dashboard/manage-doctor" className="font-bold">
                Manage Doctor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
