import React, { useEffect, useState } from "react";

const AllSellers = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/allUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users?.map((user) => console.log(user.role))}
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
