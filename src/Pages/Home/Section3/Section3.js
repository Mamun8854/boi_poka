import React from "react";
import Lottie from "lottie-react";
import sideImage from "./banner.json";

const Section3 = () => {
  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h2 className="text-4xl text-center font-bold">
        Send Here Your Opinion.
      </h2>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                Subscribe To The{" "}
                <span className="text-blue-500">Newsletter</span>
              </h1>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                be the first to knows when our{" "}
                <span className="font-medium text-blue-500">Brand</span> is live
              </p>

              <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button className="btn btn-outline ml-2">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Lottie
              className="w-[400px]"
              animationData={sideImage}
              loop={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
