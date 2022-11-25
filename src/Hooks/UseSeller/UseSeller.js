import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const UseSeller = (email, head) => {
  const { logOutUser } = useContext(AuthContext);
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsaSellerLoading] = useState(true);
  const navigate = useNavigate();

  //   console.log(email);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data?.isSeller);
          setIsaSellerLoading(false);
        });
    }
  }, [email, head, navigate]);

  return [isSeller, isSellerLoading];
};

export default UseSeller;
