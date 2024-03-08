import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"></img>
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hai Goku-san!</div>
      <div className={`chat-footer text-xs flex items-center gap-1 opacity-65`}>
        01:24 PM
      </div>
    </div>
  );
};

export default Message;
