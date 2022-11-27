import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const datas = useLoaderData();
  console.log(datas);
  return (
    <div>
      <h2 className="text 2xl text-center font-semibold ">
        Please Pay{" "}
        <span className="font-bold text-teal-600">
          $<strong>{datas?.price}</strong>
        </span>{" "}
        for{" "}
        <span className="font-bold text-teal-600">{datas?.productName}</span>
      </h2>
    </div>
  );
};

export default Payment;
