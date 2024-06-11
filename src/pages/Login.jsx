import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Store } from "../context/Store";

function Login() {
  const nevigation = useNavigate();
  const [mobileno, setMobileno] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(Store);

  const GetLogin = async () => {
    try {
      axios
        .post(
          "https://e-commerce-project-1dsz.onrender.com/E-Commerce/User/signIn",
          {
            mobileno,
            password,
          }
        )
        .then((e) => {
          setMobileno("");
          setPassword("");
          sessionStorage.setItem("token", e.data.accessToken);
          setToken(sessionStorage.getItem("token"));
          nevigation("/cart");
        })
        .catch((e) => {
          alert(e.response.data.error);
        });
    } catch (error) {
      console.log("internal server error");
    }
  };

  const navigate = useNavigate();
  // const handleButtonClick = () => {
  //   console.log("Login Button clicked")
  //   GetLogin();
  //   navigate('/cart');
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    GetLogin();
  };

  return (
    <section>
      <div className="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">
            Login to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="mobileno"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Mobile no.{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="mobileno"
                    name="mobileno"
                    type="tel"
                    autoComplete="mobile"
                    required=""
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    value={mobileno}
                    onChange={(e) => setMobileno(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "}
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required=""
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block ml-2 text-sm text-neutral-600"
                  >
                    {" "}
                    Remember me{" "}
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    {" "}
                    Forgot your password?{" "}
                  </a>
                </div>
              </div>
              <div className="text-center">
                <p>
                  Don't have an account?{" "}
                  <NavLink to="/signup" className="text-blue-600 font-semibold">
                    Signup
                  </NavLink>
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
