import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const AllBuyers = () => {
  const { loading } = useContext(AuthContext);

  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["allSeller"],
    queryFn: async () => {
      const res = await fetch(
        "https://boi-poka-server.vercel.app/buyers?role=buyer",
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

  const handleDeleteBuyer = (id) => {
    const confirmDelete = window.confirm("Are you sure to delete this buyer?");
    if (confirmDelete) {
      fetch(`https://boi-poka-server.vercel.app/allBuyers/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Buyer deleted");
            refetch();
          }
        });
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>All buyers</h2>

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
                      <div className="font-bold">{buyer?.name}</div>
                      <div className="text-sm opacity-50">{buyer?.email}</div>
                    </div>
                  </div>
                </td>
                <td>{buyer?.role}</td>
                <td>
                  <button
                    onClick={() => handleDeleteBuyer(buyer?._id)}
                    className="btn btn-sm bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
