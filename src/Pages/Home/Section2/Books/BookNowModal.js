import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";

const BookNowModal = ({ book }) => {
  console.log(book.data.productName);
  //   product info
  const { productName, resalePrice } = book?.data;

  //   user info
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;

  //   handle form data submit to db
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const customerName = form.customerName.value;
    const location = form.location.value;
    const customerPhone = form.phone.value;
    const customerEmail = form.email.value;
    const sellerEmail = book?.sellerEmail;
    const price = form.price.value;
    const productImg = book?.image;
    const productName = productName;
    const orderInfo = {
      productName,
      price,
      productImg,
      customerName,
      customerEmail,
      customerPhone,
      sellerEmail,
      location,
    };
  };
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
          <h3 className="text-lg font-extrabold">{productName}</h3>
          <form className="grid grid-cols-1 gap-4 mt-5" onSubmit={handleSubmit}>
            <label>Price</label>
            <input
              name="price"
              type="text"
              defaultValue={resalePrice ? `$ ${resalePrice}` : "$00"}
              readOnly
              placeholder="Type here"
              className="input w-full bg-gray-100"
            />
            <label>Customer</label>
            <input
              name="customerName"
              type="text"
              defaultValue={displayName}
              readOnly
              placeholder="Type here"
              className="input w-full bg-gray-100"
            />
            <label className="label">Customer Email</label>
            <input
              name="email"
              type="text"
              defaultValue={email}
              readOnly
              placeholder="Type here"
              className="input w-full bg-gray-100"
            />
            <label className="label">Customer Contact Number</label>
            <input
              name="phone"
              type="number"
              placeholder="please enter your phone number"
              required
              className="input w-full bg-gray-100"
            />
            <label className="label">Meeting Location</label>
            <input
              name="location"
              type="text"
              placeholder="Please enter meeting location"
              required
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
