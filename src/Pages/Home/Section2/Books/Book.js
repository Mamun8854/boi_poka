import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Book = ({ book }) => {
  const { image, sellerName, sellerPhoto, data } = book;
  console.log(book);
  return (
    <div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <img
              className="object-cover object-center w-10 h-10 rounded-full"
              src={image}
              alt=""
            />

            <div className="mx-4">
              <h1 className="text-sm text-gray-700 dark:text-gray-200">
                {sellerName}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Lead Developer
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold dark:text-violet-400">
              {data?.productName}
            </h3>

            <p className="leading-snug dark:text-gray-400">
              {/* Original Price : {originalPrice} */}
            </p>
            <p className="leading-snug dark:text-gray-400">
              {/* Resale Price : {resalePrice} */}
            </p>
            <p className="leading-snug dark:text-gray-400">
              {/* Location : {location} */}
            </p>
            <p className="leading-snug dark:text-gray-400">
              {/* Use Time : {useTime} */}
            </p>
            <p className="leading-snug dark:text-gray-400">
              {/* Location : {location} */}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn">
              <FaShoppingCart className="mr-4"></FaShoppingCart> Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
