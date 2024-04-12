import React, { createContext, useEffect, useState } from "react";

// React Context to contain the user's saved searches
export const SavedSearchesContext = createContext();

export const SavedSearchesProvider = ({ children }) => {
    const [mySavedSearches, setMySavedSearches] = useState([])

    return (
        <SavedSearchesContext.Provider
          value={{ mySavedSearches, setMySavedSearches }}
        >
          {children}
        </SavedSearchesContext.Provider>
      );
}