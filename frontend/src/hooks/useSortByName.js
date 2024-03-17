import React from "react";

const useSortByName = () => {
  const sortByName = (a, b) => {
    if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) return 1;
    else if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) return -1;
    else return 0;
  };
  return { sortByName };
};

export default useSortByName;
