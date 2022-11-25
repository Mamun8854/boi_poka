import React, { useEffect, useState } from "react";

const AllBuyers = () => {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/buyers?role=buyer")
      .then((res) => res.json())
      .then((data) => {
        setBuyers(data);
      });
  }, []);
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

export default AllBuyers;
