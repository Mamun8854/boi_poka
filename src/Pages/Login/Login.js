import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import UseToken from "../../Hooks/UseToken/UseToken";
const Login = () => {
  const { signIn, error, googleLogin, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState("");
  const [token] = UseToken(userEmail);
  const from = location.state?.from?.pathname || "/";

  // if (token) {
  //   return navigate(from, { replace: true });
  // }

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password);
    setUserEmail(email);
    form.reset();
  };

  useEffect(() => {
    if (user && token) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate, token]);

  return (
    <div>
      <div className="flex justify-center py-20 bg-white ">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-900 shadow shadow-slate-700 ">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form
            onSubmit={handleSignIn}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label
                htmlFor="email"
                className="block text-black font-semibold text-left pb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your mail"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-700 stroke-cyan-500 text-gray-900 focus:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block text-black font-semibold text-left pb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-700 stroke-cyan-500 text-gray-900 focus:border-violet-400"
              />
              <div className="flex justify-end text-xs text-gray-400">
                <a href="/">Forgot Password?</a>
              </div>
            </div>
            <p className="text-red-600 font-bold">
              {(error === "Firebase: Error (auth/wrong-password)." &&
                "Please Provide Right Password.") ||
                (error === "Firebase: Error (auth/user-not-found)." &&
                  "User Not FOund")}
            </p>
            <button className="block w-full p-3 text-center font-semibold rounded-sm text-gray-900 bg-violet-400">
              Sign in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => googleLogin()}
              aria-label="Log in with Google"
              className=" rounded-sm btn btn-outline"
            >
              <FaGoogle className="mr-4 text-2xl"></FaGoogle> Login With Google
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Don't have an account?
            <Link to="/signup" className="pl-2 font-semibold  text-violet-600">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
