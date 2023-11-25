import React from "react";
import SearchBar from "../searchBar/SearchBar.component";
import SavedSearches from "../savedsearches/SavedSearches.component";
import TrendingTable from "../trending_table/trending_table.component";
import {Content, PrimaryHeading, SecondaryHeading} from "./SearchPage.styles"


const SearchPage = () => {
    return (
      <>
      <Content>
        <PrimaryHeading>Ask Walee!</PrimaryHeading>
        <div></div>
        <SecondaryHeading>
          Get a 360 degree holistic view of each Happening, Brand or Event in
          the world
        </SecondaryHeading>
        <SearchBar style={{ marginTop: '30px' }}/>
        <SavedSearches style={{ marginTop: '40px' }}/>
        <TrendingTable style={{ marginTop: '40px' }}/>
      </Content>
      </>
    )
}

export default SearchPage;
