import React from "react";

const Category = ({ category }) => {
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img
          src={category?.picture}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-2xl font-bold tracking-wide text-teal-600 text-center">
            {category?.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
