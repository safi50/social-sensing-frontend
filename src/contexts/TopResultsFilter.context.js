import React, { createContext, useEffect, useState } from "react";

export const TopResultsFilterContext = createContext();

export const TopResultsFilterProvider = ({children}) => {
    const [topResultMatch, setTopResultMatch] = useState("")
    const [topResultRange, setTopResultRange] = useState("")
    const [topResultSentiment, setTopResultSentiment] = useState("")

    return (
        <TopResultsFilterContext.Provider
            value={{topResultMatch, setTopResultMatch, topResultRange, setTopResultRange, topResultSentiment, setTopResultSentiment}}
        >
            {children}
        </TopResultsFilterContext.Provider>
    )
}