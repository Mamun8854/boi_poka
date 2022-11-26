import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";
import { FaTrashAlt } from "react-icons/fa";

const MyProducts = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: myProducts = [] } = useQuery({
    queryKey: ["sellerEmail"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/my-products?sellerEmail=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
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
                      <div className="text-sm opacity-50">
                        {myProducts.length > 0 ? "available" : "sold"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>$ {product?.data?.resalePrice}</td>
                <td>
                  <button className="btn btn-sm border-0 bg-red-600">
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

export default MyProducts;
