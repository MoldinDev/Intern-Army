import React from "react";

const useSortByDate = () => {
  const sortByDate = (a, b) => {
    return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
  };
  return { sortByDate };
};

export default useSortByDate;
