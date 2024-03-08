import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <BiLogOut
        size={32}
        className="text-white cursor-pointer mt-2 hover:-translate-x-1 transition"
      />
    </div>
  );
};

export default LogoutButton;
