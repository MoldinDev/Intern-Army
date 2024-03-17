import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSortByDate from "./useSortByDate.js";
import useConversation from "../zustand/useConversation.js";

const useGetLatestConversations = () => {
  const [loading2, setLoading2] = useState(false);
  const [conversations2, setConversations2] = useState([]);
  const { sortByDate } = useSortByDate();
  const { messages } = useConversation();

  useEffect(() => {
    const getLatestConversation = async () => {
      setLoading2(true);
      try {
        const res = await fetch("/api/users/lastest");
        const data = await res.json();

        if (data.error) throw new Error(data.error);

        let name = { "Super Saiyan": true };
        const sortedData = await data.sort(sortByDate);
        const filteredData = [];

        // Make Data unique (only appear 1 time)
        for (let i = 0; i < data.length; i++) {
          if (
            name[sortedData[i].receiverId.fullname.toLowerCase()] &&
            name[sortedData[i].senderId.fullname.toLowerCase()]
          ) {
            continue;
          }
          filteredData.push(sortedData[i]);
          name[sortedData[i].receiverId.fullname.toLowerCase()] = true;
          name[sortedData[i].senderId.fullname.toLowerCase()] = true;
        }

        setConversations2(filteredData);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading2(false);
      }
    };
    getLatestConversation();
  }, [messages]);

  return { conversations2, loading2 };
};

export default useGetLatestConversations;
