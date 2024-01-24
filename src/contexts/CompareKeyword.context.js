import React, { createContext, useEffect, useState } from "react";
import { generateData } from "./dummyData";

export const CompareKeywordContext = createContext();

export const CompareKeywordProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    eventNames: ["abc", "pakistan"],
    timeRange: "1d", //1d , 7d , 1M
    date: new Date(),
    sentimentType: ["positive", "negative", "neutral"], // positive, negative, neutral
    language: "en", // en, ur
  });

  useEffect(() => {
    setData(generateData(filters));
  }, [filters]);

  const deleteDataByName = (name) => {
    setData((currentData) => currentData.filter((item) => item.name !== name));
  };

  return (
    <CompareKeywordContext.Provider
      value={{ data, deleteDataByName, filters, setFilters }}
    >
      {children}
    </CompareKeywordContext.Provider>
  );
};
