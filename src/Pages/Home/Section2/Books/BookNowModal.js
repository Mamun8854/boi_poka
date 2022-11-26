import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";

const BookNowModal = ({ book }) => {
  console.log(book.data.productName);
  const { user } = useContext(AuthContext);
  return (
    <>
      <input type="checkbox" id="bookNowModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookNowModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{book?.data?.productName}</h3>
          <form className="grid grid-cols-1 gap-4 mt-5">
            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="Type here"
              className="input w-full bg-gray-100"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full bg-gray-100"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full bg-gray-100"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full bg-gray-100"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full bg-gray-100"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full bg-gray-100"
            />
            <input
              className="btn w-full mx-w-xs"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookNowModal;
