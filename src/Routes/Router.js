import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Main from "../Layout/Main";
import AllSellers from "../Pages/Dashboard/Admin/All Sellers/AllSellers";
import AllBuyers from "../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import ReportedItems from "../Pages/Dashboard/Admin/ReportedItems/ReportedItems";
import AddProduct from "../Pages/Dashboard/Buyer/AddProduct/AddProduct";
import MyOrders from "../Pages/Dashboard/Buyer/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/Buyer/MyProducts/MyProducts";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers/MyBuyers";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Books from "../Pages/Home/Section2/Books/Books";
import Category from "../Pages/Home/Section2/Category";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      { path: "/dashboard/all-sellers", element: <AllSellers></AllSellers> },
      { path: "/dashboard/all-buyers", element: <AllBuyers></AllBuyers> },
      {
        path: "/dashboard/reported-items",
        element: <ReportedItems></ReportedItems>,
      },

      { path: "/dashboard/my-buyers", element: <MyBuyers></MyBuyers> },
      { path: "/dashboard/add-product", element: <AddProduct></AddProduct> },
      { path: "/dashboard/my-products", element: <MyProducts></MyProducts> },

      { path: "/dashboard/my-orders", element: <MyOrders></MyOrders> },
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
