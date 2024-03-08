import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="placeholder:opacity-50 input input-bordered rounded-full bg-gray-800 text-white"
      />
      <button
        type="submit"
        className="hover:bg-gray-200 hover:text-gray-800 border-none btn btn-circle bg-gray-800 text-white"
      >
        <IoSearchSharp size={26} />
      </button>
    </form>
  );
};

export default SearchInput;
