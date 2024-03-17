import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = authUser._id === message.senderId;
  const chatClassName = fromMe ? "chat chat-end" : "chat chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const formattedTime = extractTime(message.createdAt);

  return (
    <div className={chatClassName}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic}></img>
        </div>
      </div>
      <div className={`chat-bubble text-white ${fromMe ? "bg-blue-500" : ""}`}>
        {message.message}
      </div>
      <div className={`chat-footer text-xs flex items-center gap-1 opacity-65`}>
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
