import React from "react";
import GenderCheckbox from "./GenderCheckbox.jsx";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-solid border-wh">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup<span className="text-lime-500"> ChatApp</span>
        </h1>

        <form className="text-white">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Son Goku"
              className="w-full input h-10 input-bordered bg-gray-900 placeholder-slate-300 placeholder:opacity-40 text-white"
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
            ></input>
          </div>

          {/* Gender Checkbox Goes Here */}
          <GenderCheckbox />

          <a
            href="#"
            className="text-sm hover:underline opacity-50 hover:text-blue-500 inline-block"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
