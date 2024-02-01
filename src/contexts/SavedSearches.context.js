import React, { createContext, useEffect, useState } from "react";

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