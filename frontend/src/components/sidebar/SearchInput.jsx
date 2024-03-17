import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation.js";
import useGetConversation from "../../hooks/useGetConversations.js";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3)
      return toast.error("Search must be atleast 3 characters or longer");

    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found");
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        className="placeholder:opacity-50 input input-bordered rounded-full bg-gray-800 text-white"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
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
