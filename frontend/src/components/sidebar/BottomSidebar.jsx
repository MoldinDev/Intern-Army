import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout.js";
import { IoChatboxOutline } from "react-icons/io5";
import { BsFillMegaphoneFill, BsSend } from "react-icons/bs";
import { useAuthContext } from "../../../context/AuthContext.jsx";
import useBroadcast from "../../hooks/useBroadcast.js";

const BottomSidebar = ({ isNewChat, setIsNewChat }) => {
  const { loading, logout } = useLogout();
  const { authUser } = useAuthContext();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mt-auto flex justify-between relative">
      <div>
        {!loading ? (
          <BiLogOut
            size={32}
            className="text-white cursor-pointer mt-2 hover:-translate-x-1 transition"
            onClick={logout}
          />
        ) : (
          <span className="loading loading-spinner"></span>
        )}
      </div>
      {authUser?.fullname == "admin" ? (
        <BsFillMegaphoneFill
          size={28}
          className="mt-2 text-white cursor-pointer"
          onClick={() => (openModal ? setOpenModal(false) : setOpenModal(true))}
        />
      ) : (
        ""
      )}
      <div
        className={
          openModal && authUser?.fullname == "admin"
            ? "fixed bottom-5 w-full m-5 pe-2 ms-0 z-50"
            : "hidden"
        }
      >
        <BroadcastModal />
      </div>
      <div>
        <button
          onClick={() => {
            isNewChat ? setIsNewChat(false) : setIsNewChat(true);
          }}
          className={`${
            !isNewChat
              ? 'hover:after:content-["New_Chat"]'
              : 'hover:after:content-["Close"]'
          } after:absolute after:top-0 after:right-6 after:hover:-translate-y-4 after:transition after:duration-300 after:bg-transparent after:px-2 after:py-1 after:rounded-full after:hover:border after:border-solid  ${
            !isNewChat
              ? "after:text-white after:border-sky-400"
              : "after:text-red-500 after:border-red-500"
          } after:font-semibold`}
        >
          <IoChatboxOutline
            size={32}
            className={`${
              !isNewChat ? "text-sky-400" : "text-red-500"
            } mt-2 hover:translate-x-1 transition duration-300 cursor-pointer`}
          />
        </button>
      </div>
    </div>
  );
};

export default BottomSidebar;

export const BroadcastModal = () => {
  const [message, setMessage] = useState("");
  const { broadcast, loadingBC } = useBroadcast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    broadcast(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className={`border text-sm rounded-lg block w-full p-2.5 bg-gray-200 border-gray-600`}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="flex items-center absolute end-0 inset-y-0 pe-3"
        >
          {loadingBC ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};
