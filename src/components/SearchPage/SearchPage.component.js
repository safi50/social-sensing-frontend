import React from "react";
import SearchBar from "../searchBar/SearchBar.component";
import SavedSearches from "../savedsearches/SavedSearches.component";
import TrendingTable from "../trending_table/trending_table.component";
import {Content, PrimaryHeading, SecondaryHeading} from "./SearchPage.styles"
import Navbar from "../navbar/Navbar.component";
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
    return (
      <div style={{backgroundColor: '#6937F2'}}>
        <Navbar />
      <Content>
        <PrimaryHeading>Ask Walee!</PrimaryHeading>
        <div></div>
        <SecondaryHeading>
          Get a 360 degree holistic view of each Happening, Brand or Event in
          the world
        </SecondaryHeading>
        <SearchBar style={{ marginTop: '30px' }} onClick={()=>{navigate('/dashboard')}}/>
        <SavedSearches style={{ marginTop: '40px' }}/>
        <TrendingTable style={{ marginTop: '40px' }}/>
      </Content>
      </div>
    )
}

export default SearchPage;
