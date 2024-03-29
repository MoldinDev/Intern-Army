import React from "react";

const GenderCheckbox = ({ genderSelect, handleCheckbox }) => {
  return (
    <div className="flex gap-6 mt-2">
      <div className="form-control">
        <label className={"label gap-2 cursor-pointer"}>
          <span className="label-text text-white">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={genderSelect === "male"}
            onChange={() => handleCheckbox("male")}
          ></input>
        </label>
      </div>

      <div className="form-control">
        <label className={"label gap-2 cursor-pointer"}>
          <span className="label-text text-white">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            checked={genderSelect === "female"}
            onChange={() => handleCheckbox("female")}
          ></input>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
