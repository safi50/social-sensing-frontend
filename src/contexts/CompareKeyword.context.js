import React, { createContext, useState } from "react";
import { generateData } from "./dummyData";

export const CompareKeywordContext = createContext();

export const CompareKeywordProvider = ({ children }) => {
  const [data, setData] = useState(generateData());

  const deleteDataByName = (name) => {
    setData((currentData) => currentData.filter((item) => item.name !== name));
  };

  return (
    <CompareKeywordContext.Provider value={{ data, deleteDataByName }}>
      {children}
    </CompareKeywordContext.Provider>
  );
};
