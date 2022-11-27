import React, { useContext } from "react";
import ImageBook from "./book.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../../Context/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-gray-100 rounded-lg">
      <section className="dark:bg-gray-800 dark:text-gray-100 ">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="font-bold leading-none text-3xl bg-white px-10 py-20 rounded-xl">
              Welcome <span className="text-teal-700">{user?.displayName}</span>{" "}
              to your dashboard on our site
              <Link to="/" className="btn btn-accent w-2/4 my-10 font-semibold">
                Back to home
              </Link>
            </h1>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Lottie
              className="w-[300px] "
              animationData={ImageBook}
              loop={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
