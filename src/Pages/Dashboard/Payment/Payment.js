import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_payment_pk);
console.log(stripePromise);
const Payment = () => {
  const { loading } = useContext(AuthContext);
  const orders = useLoaderData();

  if (loading) {
    return <Loading></Loading>;
  }
  // console.log(orders);
  return (
    <div className="bg-gray-200 p-10 flex flex-col items-center rounded-2xl">
      <h2 className="text-2xl text-center font-semibold mb-10">
        Please Pay{" "}
        <span className="font-bold text-teal-600">
          $<strong>{orders?.price}</strong>
        </span>{" "}
        for{" "}
        <span className="font-bold text-teal-600">{orders?.productName}</span>
      </h2>

      <div className="w-3/4  bg-white p-20 rounded-xl">
        <Elements stripe={stripePromise}>
          <CheckoutForm orders={orders} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
