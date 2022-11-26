import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main";
import AllSellers from "../Pages/Dashboard/Admin/All Sellers/AllSellers";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import ReportedItems from "../Pages/Dashboard/Admin/ReportedItems/ReportedItems";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders/MyOrders";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers/MyBuyers";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts/MyProducts";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Home/Section2/Books/Books";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      // { path: "/category", element: <Category></Category> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Books></Books>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      { path: "/dashboard", element: <MyOrders></MyOrders> },
      {
        path: "/dashboard/all-sellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-buyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reported-items",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/my-buyers",
        element: (
          <SellerRoute>
            <MyBuyers></MyBuyers>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },

      { path: "/dashboard/my-orders", element: <MyOrders></MyOrders> },
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
