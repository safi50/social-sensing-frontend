/*
Manage and share a user's saved searches across components within the application.
It uses the useState hook to initialize an empty array for storing saved searches.
The SavedSearchesProvider component wraps the application's children, making the
mySavedSearches array and its update function setMySavedSearches accessible to any 
child component that consumes this context, allowing them to read and modify the saved searches.
*/

import React, { createContext, useEffect, useState } from "react";

// React Context to contain the user's saved searches
export const SavedSearchesContext = createContext();

export const SavedSearchesProvider = ({ children }) => {
  const [mySavedSearches, setMySavedSearches] = useState([]);

  return (
    <SavedSearchesContext.Provider
      value={{ mySavedSearches, setMySavedSearches }}
    >
      {children}
    </SavedSearchesContext.Provider>
  );
};
