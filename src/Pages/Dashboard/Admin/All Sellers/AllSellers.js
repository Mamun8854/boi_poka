import React, { useEffect, useState } from "react";

const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allSeller?role=seller")
      .then((res) => res.json())
      .then((data) => {
        setSellers(data);
      });
  }, []);

  return (
    <div>
      <h2>All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {sellers?.map((seller) => (
              <tr key={seller._id}>
                <th>1</th>
                <td>{seller?.name}</td>
                <td>{seller?.email}</td>
                <td>{seller?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
