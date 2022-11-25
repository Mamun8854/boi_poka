import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const AllSellers = () => {
  const { loading } = useContext(AuthContext);
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allSeller?role=seller")
      .then((res) => res.json())
      .then((data) => {
        setSellers(data);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>All Sellers</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller, i) => (
              <tr key={seller?._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={seller?.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{seller?.name}</div>
                      <div className="text-sm opacity-50">{seller?.email}</div>
                    </div>
                  </div>
                </td>
                <td>{seller?.role}</td>
                <td>
                  <button className="btn btn-sm bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
