import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const MyOrders = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: myOrders = [], isLoading } = useQuery({
    queryKey: ["my-orders"],
    queryFn: async () => {
      const res = await fetch(
        `https://boi-poka-server.vercel.app/my-orders?customerEmail=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
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
              <tr key={order._id}>
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
                  </div>
                </td>
                <td className="font-bold">{order?.productName}</td>
                <td className="font-semibold">{order?.price}</td>
                <th>
                  {order?.price && !order?.paid && (
                    <Link to={`/dashboard/payment/${order?._id}`}>
                      <button className="btn btn-sm bg-teal-600">Pay</button>
                    </Link>
                  )}
                  {order?.price && order?.paid && (
                    <button disabled className="btn btn-sm ">
                      Paid
                    </button>
                  )}
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
