import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { signIn, error } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password);
    form.reset();
  };

  return (
    <div>
      <div className="flex justify-center py-20 bg-white ">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-100 text-gray-900 shadow-xl shadow-slate-400 hover:shadow-slate-900">
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
            <p>{error}</p>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button aria-label="Log in with Google" className="p-3 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
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
