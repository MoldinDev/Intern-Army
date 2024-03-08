import React from "react";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className={`border text-sm rounded-lg block w-full p-2.5 bg-gray-200 border-gray-600`}
        />
        <button
          type="submit"
          className="flex items-center absolute end-0 inset-y-0 pe-3"
        >
          Go
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
