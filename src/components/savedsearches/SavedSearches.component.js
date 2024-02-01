import React, {useState, useContext} from 'react';
import {Container,
    SearchList,
    SearchItem,
    ViewAllButton,
    Heading,
    SearchItemHeading} from './SavedSearches.styles'
import MySearchModal from "../mySearchesModal/MySearchesModal.component";
import { savedSearches } from '../dashboard/Dashboard.component';
import { SavedSearchesContext } from "../../contexts/SavedSearches.context";


const SavedSearches = ({style}) => {
  const [showMySeachesModal, setShowMySearchesModal] = useState(false);
  const [saveSearches, setSaveSearches] = useState(savedSearches);
  const { mySavedSearches, setMySavedSearches } = useContext(SavedSearchesContext)

  const handleMySearchesClose = () => setShowMySearchesModal(false);
  const handleMySearchesShow = () => setShowMySearchesModal(true);

  const handleEditSearch = (id, name) => {
    setSaveSearches(
      saveSearches.map((search) => {
        if (search.id === id) {
          return {
            ...search,
            name: name,
          };
        }
        return search;
      })
    );
  };

  const handleDeleteSearch = (id) => {
    setSaveSearches(saveSearches.filter((search) => search.id !== id));
  };
    return (
      <Container style={style}>
        <Heading>Saved Searches</Heading>
        <SearchList>
          <SearchItem><SearchItemHeading>Lahore</SearchItemHeading>2k Mentions</SearchItem>
          <SearchItem><SearchItemHeading>Islamabad</SearchItemHeading>2k Mentions</SearchItem>
          <SearchItem><SearchItemHeading>CarShow</SearchItemHeading>2k Mentions</SearchItem>
          <ViewAllButton onClick={handleMySearchesShow}>View All</ViewAllButton>
          <MySearchModal
              show={showMySeachesModal}
              handleClose={handleMySearchesClose}
              saveSearches={mySavedSearches}
              handleEditSearch={handleEditSearch}
              handleDeleteSearch={handleDeleteSearch}
            />
        </SearchList>
        
      </Container>
    );
  };
  
  export default SavedSearches;