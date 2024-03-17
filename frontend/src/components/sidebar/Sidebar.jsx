import React, { useState } from "react";
import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import BottomSidebar from "./BottomSidebar.jsx";

const Sidebar = () => {
  const [isNewChat, setIsNewChat] = useState(false);
  return (
    <div className="border-r border-gray-400 border-opacity-30 p-5 pb-2 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations isNewChat={isNewChat} />
      <BottomSidebar setIsNewChat={setIsNewChat} isNewChat={isNewChat} />
    </div>
  );
};

export default Sidebar;
