import { useState } from "react";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import useGetLatestConversations from "../../hooks/useGetLatestConversations";
import { useAuthContext } from "../../../context/AuthContext";

const Conversations = ({ isNewChat }) => {
  const { authUser } = useAuthContext();
  const { loading, conversations } = useGetConversations();
  const { loading2, conversations2 } = useGetLatestConversations();

  console.log("CONVERSATION 2: ", conversations2);

  return (
    <div className="flex flex-col py-2 overflow-auto">
      {isNewChat ? (
        <>
          <div className="backdrop-blur-[5px] backdrop-filter font-bold text-xl p-2 text-black sticky -top-2 left-0 right-0 bg-white/30 z-50 rounded-sm">
            New Chat{" "}
          </div>
          {conversations.map((user, index) => {
            return (
              <Conversation
                key={user._id}
                conversation={user}
                fullname={user.fullname}
                profilePic={user.profilePic}
                lastIndex={index === conversations.length - 1}
              />
            );
          })}
        </>
      ) : (
        conversations2.map((user, index) => {
          return (
            <Conversation
              key={user._id}
              conversation={
                user.receiverId._id == authUser._id
                  ? user.senderId
                  : user.receiverId
              }
              fullname={
                user.receiverId._id == authUser._id
                  ? user.senderId.fullname
                  : user.receiverId.fullname
              }
              profilePic={
                user.receiverId._id == authUser._id
                  ? user.senderId.profilePic
                  : user.receiverId.profilePic
              }
              lastIndex={index === conversations2.length - 1}
            />
          );
        })
      )}
    </div>
  );
};

export default Conversations;
