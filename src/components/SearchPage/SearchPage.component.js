import React, {useState, useContext, useEffect} from "react";
import SearchBar from "../searchBar/SearchBar.component";
import SavedSearches from "../savedsearches/SavedSearches.component";
import TrendingTable from "../trending_table/trending_table.component";
import {Content, PrimaryHeading, SecondaryHeading} from "./SearchPage.styles"
import Navbar from "../navbar/Navbar.component";
import { CompareKeywordContext } from '../../contexts/CompareKeyword.context';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    filters: contextFilters,
    setFilters: setContextFilters,
  } = useContext(CompareKeywordContext);

  const handleSearchClick = ()=>{
    setContextFilters({...contextFilters, eventNames:[searchQuery]})
    navigate('/dashboard')
  }
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
        <SearchBar style={{ marginTop: '30px' }} onClick={handleSearchClick} onChange={(e) => setSearchQuery(e.target.value)}/>
        <SavedSearches style={{ marginTop: '40px' }}/>
        <TrendingTable style={{ marginTop: '40px' }}/>
      </Content>
      </div>
    )
}

export default SearchPage;
