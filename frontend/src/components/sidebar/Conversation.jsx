import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../../context/SocketContext.jsx";

const Conversation = ({ fullname, profilePic, lastIndex, conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex gap-2 items-center hover:bg-lime-600 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-lime-600" : ""
        }`}
      >
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={profilePic}></img>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between">
            <p className="font-bold text-gray-200">{fullname}</p>
          </div>
        </div>
      </div>
      {!lastIndex ? <div className="divider my-0 py-0 h-0"></div> : <div></div>}
    </>
  );
};

export default Conversation;
