import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const { data: myOrders = [] } = useQuery({
    queryKey: ["my-orders"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/my-orders?customerEmail=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(myOrders);

  return (
    <div>
      <h2 className="text-4xl text-center text-teal-600 font-bold py-10">
        My Orders
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>

              <th>Name</th>
              <th>Price</th>
              <th>Payment Option</th>
            </tr>
          </thead>
          <tbody>
            {myOrders?.map((order, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order?.productImg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    {/* <div>
                      <div className="font-bold">{order?.productName}</div>
                    </div> */}
                  </div>
                </td>
                <td className="font-bold">{order?.productName}</td>
                <td className="font-semibold">{order?.price}</td>
                <th>
                  <button className="btn btn-sm bg-teal-600">Pay</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
