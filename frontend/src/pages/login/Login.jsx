import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-solid border-wh">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login<span className="text-lime-500"> ChatApp</span>
        </h1>

        <form className="text-white" onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input h-10 input-bordered bg-gray-900 placeholder-slate-300 placeholder:opacity-40 text-white"
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input h-10 input-bordered bg-gray-900 placeholder-slate-300 placeholder:opacity-40 text-white"
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <Link
            to="/signup"
            className="text-sm hover:underline opacity-50 hover:text-blue-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2"
              disabled={loading}
            >
              {!loading ? (
                "Login"
              ) : (
                <span className="loading loading-spinner"></span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
