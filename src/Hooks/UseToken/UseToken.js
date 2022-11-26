import React, { useEffect, useState } from "react";

const UseToken = (email) => {
  const [token, setToken] = useState("");
  console.log(email);

  useEffect(() => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
          setToken(data?.accessToken);
        }
      });
  }, [email]);

  return [token];
};

export default UseToken;
