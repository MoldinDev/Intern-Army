import React from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSortByName from "./useSortByName.js";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { sortByName } = useSortByName();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();

        if (data.error) throw new Error(data.error);

        setConversations(data.sort(sortByName));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { conversations, loading };
};

export default useGetConversations;
