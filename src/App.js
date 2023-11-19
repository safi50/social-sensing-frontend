import React from "react";
import Navbar from "./components/navbar/Navbar.component";
import Footer from "./components/footer/Footer.component";
import SearchBar from "./components/searchBar/SearchBar.component";
import SavedSearches from "./components/savedsearches/SavedSearches.component";
import styled from "styled-components";
import TrendingTable from "./components/trending_table/trending_table.component";
import WorldwideDropdown from "./components/worldwideDropdown/worldwideDropdown.component";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 0rem;
  max-width: 120rem;
  margin: 0 auto;
`;

const PrimaryHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  padding-bottom: 2rem;
`;

const SecondaryHeading = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
`;
const App = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default App;
