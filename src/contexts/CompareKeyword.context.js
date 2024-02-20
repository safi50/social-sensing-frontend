import React, { createContext, useEffect, useState } from "react";
import { generateData } from "./dummyData";

export const CompareKeywordContext = createContext();

export const CompareKeywordProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    eventNames: [],
    eventQueries: [],
    timeRange: "1d", //1d , 7d , 1M
    date: {
      startDate: new Date(),
      endDate: new Date(),
    },
    devices: ["mobile", "desktop", "tablet"],
    sentimentType: ["Positive", "Negative", "Neutral"], // positive, negative, neutral
    language: ["en", "ur"], // en, ur
  });

  const clearFilters = () => {
    setFilters({
      eventNames: filters.eventNames,
      eventQueries: [],
      timeRange: "1d", //1d , 7d , 1M
      date: {
        startDate: new Date(),
        endDate: new Date(),
      },
      devices: ["mobile", "desktop", "tablet"],
      sentimentType: ["Positive", "Negative", "Neutral"], // positive, negative, neutral
      language: ["en", "ur"], // en, ur
    });
  };

  useEffect( () => {

    async function fetchMyAPI() {
      try {
        const result = await generateData(filters);
        console.log("results are:", result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally, handle the error state in your component
      }
    }

    fetchMyAPI();
  }, [filters]);

  const deleteDataByName = (name) => {
    setData((currentData) => currentData.filter((item) => item.name !== name));
  };

  return (
    <CompareKeywordContext.Provider
      value={{ data, deleteDataByName, filters, setFilters, clearFilters }}
    >
      {children}
    </CompareKeywordContext.Provider>
  );
};
