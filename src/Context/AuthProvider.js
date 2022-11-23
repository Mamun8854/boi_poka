import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

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

  //   sign in with email/password

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successfully");
      })
      .catch((error) => {
        setError(error.message);
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

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [user]);

  const authInfo = { user, loading, error, createUser, signIn, logOutUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
