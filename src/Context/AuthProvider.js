import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [isSeller, setIsSeller] = useState(false);

  // create user  Email/password

  const createUser = (email, password, name, photoURL) => {
    console.log(email);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            userRole(name, email, photoURL);
            toast.success("Successfully Sign Up");
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // create user with google

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user?.email);
        getToken(user?.email);
        userRole(user?.name, user?.email, user?.photoURL);
        toast.success("Login With Google Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //   sign in with email/password

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // post user role

  const userRole = (name, email, photoURL) => {
    const user = { name, email, photoURL, role: isSeller ? "seller" : "buyer" };
    fetch("https://boi-poka-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("User posted");
      });
  };

  //   Log Out user
  const logOutUser = () => {
    return signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const getToken = (email) => {
    fetch(`https://boi-poka-server.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.accessToken) {
          localStorage.setItem("token", data.accessToken);
        }
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [user]);

  const authInfo = {
    user,
    loading,
    error,
    createUser,
    signIn,
    logOutUser,
    userRole,
    googleLogin,
    setIsSeller,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
