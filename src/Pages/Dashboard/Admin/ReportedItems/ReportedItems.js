import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import Loading from "../../../Shared/Loading/Loading";

const ReportedItems = () => {
  const {
    data: reports = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyer"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/report?report=report");
      const data = await res.json();
      return data;
    },
  });

  console.log(reports);

  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm("Are you sure delete this product?");
    if (confirmDelete) {
      fetch(`http://localhost:5000/myProducts-delete/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            toast.success("Product deleted");
            refetch();
          }
        });
    }
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>Reported Items</h2>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Advertising</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reports?.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {product?.data?.productName}
                      </div>
                      <div
                        className={
                          product?.paid
                            ? "text-gray-500 font-bold"
                            : "text-green-600 font-bold"
                        }
                      >
                        {product?.paid ? "sold" : "available"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>$ {product?.data?.resalePrice}</td>
                <td>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn btn-sm border-0 bg-red-600"
                  >
                    <FaTrashAlt className="mr-2"></FaTrashAlt> Delete
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

export default ReportedItems;
