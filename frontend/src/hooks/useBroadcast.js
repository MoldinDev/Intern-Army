import React, { useState } from "react";
import useSendMessage from "./useSendMessage";
import toast from "react-hot-toast";

const useBroadcast = () => {
  const [loadingBC, setLoadingBC] = useState(false);
  const { sendMessage } = useSendMessage();

  const broadcast = async (message) => {
    setLoadingBC(true);
    try {
      const res = await fetch("/api/users");
      const data = await res.json();

      if (data.error) throw new Error(data.error);

      for (let i = 0; i < data.length; i++) {
        sendMessage(message, data[i]._id);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoadingBC(false);
    }
  };
  return { loadingBC, broadcast };
};

export default useBroadcast;
