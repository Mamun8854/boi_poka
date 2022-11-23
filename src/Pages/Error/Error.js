import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Lottie from "lottie-react";
import ErrorImage from "./error.json";

const Error = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16 dark:bg-gray-100 dark:text-gray-900 py-20">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 bg-white p-10 rounded-lg ">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-orange-900">
              <span className="sr-only">Error</span>
              <Lottie
                className="w-[400px]"
                animationData={ErrorImage}
                loop={true}
              />
            </h2>
            <div>
              <p className="text-2xl font-semibold md:text-3xl">
                <span className="text-blue-900 font-bold">Whoops!</span> This is
                not what you were looking for...😥
              </p>
              <br />
              <br />
            </div>

            <Link
              to="/"
              className="btn px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Back to homepage{" "}
              <FaArrowLeft className="ml-2 text-teal-600"></FaArrowLeft>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
