import React from 'react';
import {Container,
    SearchList,
    SearchItem,
    ViewAllButton,
    Heading,
    SearchItemHeading} from './SavedSearches.styles'

const SavedSearches = ({style}) => {
    return (
      <Container style={style}>
        <Heading>Saved Searches</Heading>
        <SearchList>
          <SearchItem><SearchItemHeading>Lahore</SearchItemHeading>2k Mentions</SearchItem>
          <SearchItem><SearchItemHeading>Islamabad</SearchItemHeading>2k Mentions</SearchItem>
          <SearchItem><SearchItemHeading>CarShow</SearchItemHeading>2k Mentions</SearchItem>
          <ViewAllButton>View All</ViewAllButton>
        </SearchList>
        
      </Container>
    );
  };
  
  export default SavedSearches;