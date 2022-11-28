import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Shared/Loading/Loading";

const AddvertiseItem = () => {
  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/books");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(books);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <h2>Advertise Items Here</h2>
      <div className="grid grid-cols-3">
        {books?.map((book) => (
          <div className={(book?.advertise && !book?.paid) || "hidden"}>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-100 dark:text-gray-900">
              <img
                src={book?.image}
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                  Quisque
                </span>
                <h2 className="text-xl font-semibold tracking-wide">
                  {book?.data?.productName}
                </h2>
              </div>
              <p className="dark:text-gray-100">
                {book?.data?.description && book?.data?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddvertiseItem;
