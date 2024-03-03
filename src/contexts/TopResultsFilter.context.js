import React, { createContext, useContext, useEffect, useState } from "react";
import { getTwitterTweets } from "./dummyData";
import { CompareKeywordContext } from "./CompareKeyword.context";

export const TopResultsFilterContext = createContext();

export const TopResultsFilterProvider = ({ children }) => {
  const [topResultMatch, setTopResultMatch] = useState("");
  const [topResultRange, setTopResultRange] = useState("");
  const [topResultSentiment, setTopResultSentiment] = useState("");

  return (
    <TopResultsFilterContext.Provider
      value={{
        topResultMatch,
        setTopResultMatch,
        topResultRange,
        setTopResultRange,
        topResultSentiment,
        setTopResultSentiment,
      }}
    >
      {children}
    </TopResultsFilterContext.Provider>
  );
};
