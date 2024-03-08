import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex gap-6 mt-2">
      <div className="form-control">
        <label className={"label gap-2 cursor-pointer"}>
          <span className="label-text text-white">Male</span>
          <input type="checkbox" className="checkbox checkbox-accent"></input>
        </label>
      </div>

      <div className="form-control">
        <label className={"label gap-2 cursor-pointer"}>
          <span className="label-text text-white">Female</span>
          <input type="checkbox" className="checkbox checkbox-accent"></input>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
