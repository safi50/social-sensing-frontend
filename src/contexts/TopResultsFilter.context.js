import React, { createContext, useContext, useEffect, useState } from "react";
import { getTwitterTweets } from "./dummyData";
import { CompareKeywordContext } from "./CompareKeyword.context";

export const TopResultsFilterContext = createContext();

export const TopResultsFilterProvider = ({ children }) => {
  const [topResultMatch, setTopResultMatch] = useState("");
  const [topResultRange, setTopResultRange] = useState("");
  const [topResultSentiment, setTopResultSentiment] = useState("");
  const [tweets, setTweets] = useState([]);
  const { filters } = useContext(CompareKeywordContext);
  useEffect(() => {
    const fetchTweets = async (query) => {
      try {
        const fetchedTweets = await getTwitterTweets(query);
        console.log("=============================fetchedTweets============");
        console.log(fetchedTweets);
        if (fetchedTweets && fetchedTweets.length > 0) {
          return fetchedTweets; // Assuming the structure based on your function's return
        }
        return []; // Return an empty array if no tweets are fetched
      } catch (error) {
        console.error("Failed to fetch tweets:", error);
        return []; // Return an empty array in case of error
      }
    };

    const fetchAllTweets = async () => {
      const tweetsPromises = filters.eventNames.map(fetchTweets);
      const tweetsResults = await Promise.all(tweetsPromises);
      setTweets(tweetsResults);
    };

    fetchAllTweets();
  }, [filters]);

  return (
    <TopResultsFilterContext.Provider
      value={{
        topResultMatch,
        setTopResultMatch,
        topResultRange,
        setTopResultRange,
        topResultSentiment,
        setTopResultSentiment,
        tweets,
      }}
    >
      {children}
    </TopResultsFilterContext.Provider>
  );
};
