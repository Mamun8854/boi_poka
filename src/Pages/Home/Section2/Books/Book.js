import React from "react";
import toast from "react-hot-toast";
import {
  FaShoppingCart,
  FaCheckCircle,
  FaRegWindowClose,
} from "react-icons/fa";

const Book = ({ book, setBook }) => {
  const {
    image,
    sellerName,
    sellerPhoto,
    data,
    sellerEmail,
    postTime,
    date,
    verify,
    _id,
  } = book;
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

  const handleReport = (id) => {
    // console.log(id);
    fetch(`https://boi-poka-server.vercel.app/report/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Reported successfully !");
        }
      });
  };
  return (
    <div className={book?.paid && "hidden"}>
      <div className="max-w-lg p-4 shadow-xl  dark:bg-gray-900 dark:text-gray-100">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span className="mr-4">Post time : {postTime}</span>
              <span>Post date : {date}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src={sellerPhoto}
                alt=""
              />

              <div className="mx-4">
                <div className="flex">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    {sellerName}
                  </h1>
                  <div className="ml-4">
                    {verify && <FaCheckCircle></FaCheckCircle>}
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {sellerEmail}
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleReport(_id)}
                className="flex items-center bg-red-600 border-none font-bold btn btn-xs"
              >
                Report <FaRegWindowClose className="ml-2"></FaRegWindowClose>
              </button>
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
