import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox.jsx";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signup, loading } = useSignup();

  const handleCheckbox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-solid border-wh">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup<span className="text-lime-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="text-white">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Son Goku"
              className="w-full input h-10 input-bordered bg-gray-900 placeholder-slate-300 placeholder:opacity-40 text-white"
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
            ></input>
          </div>

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
            ></input>
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
            ></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input h-10 input-bordered bg-gray-900 placeholder-slate-300 placeholder:opacity-40 text-white"
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            ></input>
          </div>

          {/* Gender Checkbox Goes Here */}
          <GenderCheckbox
            handleCheckbox={handleCheckbox}
            genderSelect={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline opacity-50 hover:text-blue-500 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-sm mt-2"
              disabled={loading}
            >
              {!loading ? (
                "Signup"
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

export default Signup;
