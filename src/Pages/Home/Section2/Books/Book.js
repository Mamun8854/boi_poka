import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Book = ({ book, setBook }) => {
  const { image, sellerName, sellerPhoto, data, sellerEmail } = book;
  const {
    productName,
    time,
    phone,
    location,
    description,
    quality,
    resalePrice,
    originalPrice,
  } = data;
  console.log(book);
  return (
    <div>
      <div className="max-w-lg p-4 shadow-xl  dark:bg-gray-900 dark:text-gray-100">
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
              src={sellerPhoto}
              alt=""
            />

            <div className="mx-4">
              <h1 className="text-sm text-gray-700 dark:text-gray-200">
                {sellerName}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {sellerEmail}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold dark:text-violet-400">
              {productName}
            </h3>

            <p className="leading-snug dark:text-gray-400">
              Original Price :$ {originalPrice}
            </p>
            <p className="leading-snug dark:text-gray-400">
              Resale Price :$ {resalePrice}
            </p>
            <p className="leading-snug dark:text-gray-400">
              Book Quality : {quality}
            </p>
            <p className="leading-snug dark:text-gray-400">
              Location : {location}
            </p>
            <p className="leading-snug dark:text-gray-400">Use Time : {time}</p>
            <p className="leading-snug dark:text-gray-400">Contact : {phone}</p>
            <p className="leading-snug dark:text-gray-400">
              Details : {description.slice(0, 100)}...
            </p>
          </div>
          <div className="flex items-center justify-center">
            <label
              onClick={() => setBook(book)}
              htmlFor="bookNowModal"
              className="btn flex justify-center items-center w-full"
            >
              <FaShoppingCart className="mr-4"></FaShoppingCart>
              Book now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
