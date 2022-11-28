import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["sellerEmail"],
    queryFn: async () => {
      const res = await fetch(
        `https://boi-poka-server.vercel.app/my-products?sellerEmail=${user?.email}`,
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

  const handleDeleteProduct = (id) => {
    fetch(`https://boi-poka-server.vercel.app/myProducts-delete/${id}`, {
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
  };

  // make advertise item
  const handleAdvertise = (id) => {
    console.log(id);
    fetch(`https://boi-poka-server.vercel.app/products/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
        auth: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Your product added in advertise item");
        }
      });
  };
  console.log(myProducts);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-4xl text-teal-600 font-bold text-center py-10">
        My Products
      </h2>
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
            {myProducts?.map((product, i) => (
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
                <td>
                  {product?.advertise ? (
                    <button
                      onClick={() => handleAdvertise(product._id)}
                      className="btn btn-sm border-0"
                    >
                      Make Advertise
                    </button>
                  ) : (
                    <button className="font-bold text-green-600">
                      Advertised
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
