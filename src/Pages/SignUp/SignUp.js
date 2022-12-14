import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import UseToken from "../../Hooks/UseToken/UseToken";

const SignUp = () => {
  const { createUser, error, setIsSeller, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [token] = UseToken(userEmail);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate, token]);

  // handle signUp
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    createUser(email, password, name, photoURL);
    setUserEmail(email);
    form.reset();
  };

  // handle Checkbox
  const handleCheckbox = (event) => {
    setIsSeller(event.target.checked);
  };

  return (
    <div>
      <div className="flex justify-center bg-white py-20">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-900 shadow shadow-slate-700 ">
          <h1 className="text-2xl font-bold text-center text-black">
            Registration
          </h1>
          <form
            onSubmit={handleSignUp}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label
                htmlFor="name"
                className="block text-black font-semibold text-left pb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="username"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-700 stroke-cyan-500 text-gray-900 focus:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="photoURL"
                className="block text-black font-semibold text-left pb-2"
              >
                Photo URL
              </label>
              <input
                type="url"
                name="photoURL"
                id="PhotoURL"
                placeholder="Enter your photoURL"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-700 stroke-cyan-500 text-gray-900 focus:border-violet-400"
              />
            </div>
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
            </div>

            <p className="text-red-600 font-bold">
              {error === "Firebase: Error (auth/email-already-in-use)." &&
                "This email is already used."}
            </p>

            <div className="flex items-center gap-2">
              <input
                onChange={handleCheckbox}
                type="checkbox"
                name="showAgain"
                id="showAgain"
                className="rounded-sm "
              />
              <label
                htmlFor="showAgain"
                className="text-sm cursor-pointer dark:text-gray-400"
              >
                Join as a seller.
              </label>
            </div>

            <button className="block w-full p-3 text-center font-semibold rounded-sm text-gray-900 bg-violet-400">
              Registration
            </button>
          </form>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Do you have an account?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="hover:underline text-violet-600 font-medium ml-2"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
