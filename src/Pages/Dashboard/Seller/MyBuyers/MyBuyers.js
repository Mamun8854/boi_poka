import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);
  const { data: buyers = [] } = useQuery({
    queryKey: ["order-buyer"],
    queryFn: async () => {
      const res = await fetch(
        `https://boi-poka-server.vercel.app/my-buyer?sellerEmail=${user.email}`,
        {
          headers: {
            auth: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h2 className="font-bold text-4xl text-center py-10 text-teal-600">
        My Buyers
      </h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Contact</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {buyers?.map((buyer, i) => (
              <tr key={buyer._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={buyer?.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{buyer?.customerName}</div>
                      <div className="text-sm opacity-50">
                        {buyer?.customerEmail}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{buyer?.customerPhone}</td>
                <td>{buyer?.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyers;
