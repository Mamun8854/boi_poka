import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const AllSellers = () => {
  const { loading } = useContext(AuthContext);

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["allSeller"],
    queryFn: async () => {
      const res = await fetch(
        "https://boi-poka-server.vercel.app/allSeller?role=seller",
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

  const handleDeleteSeller = (id) => {
    const confirmDelete = window.confirm("Are you sure to delete this seller?");
    if (confirmDelete) {
      fetch(`https://boi-poka-server.vercel.app/allSellers/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("seller deleted");
            refetch();
          }
        });
    }
  };

  const handleVerifySeller = (id) => {
    fetch(`https://boi-poka-server.vercel.app/user/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Seller Verified Success");
        }
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-teal-600 py-10">
        All Sellers
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
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
                  {!seller?.verify && (
                    <button
                      onClick={() => handleVerifySeller(seller?.email)}
                      className="btn btn-sm"
                    >
                      Verify
                    </button>
                  )}
                  {seller?.verify && (
                    <button
                      disabled
                      onClick={() => handleVerifySeller(seller?.email)}
                      className="btn btn-sm text-white"
                    >
                      Verified
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteSeller(seller?._id)}
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

export default AllSellers;
