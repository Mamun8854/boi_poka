import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const UseAdmin = (email, head) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext);
  // console.log(isAdmin);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/admin/${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data?.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email, head, navigate, logOutUser]);
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
