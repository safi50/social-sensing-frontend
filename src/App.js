import React from "react";
import Navbar from "./components/navbar/Navbar.component";
import Footer from "./components/footer/Footer.component";
import SearchBar from "./components/searchBar/SearchBar.component";
import SavedSearches from "./components/savedsearches/SavedSearches.component";
import styled from "styled-components";
import TrendingTable from "./components/trending_table/trending_table.component";
import OnboardingCard from "./components/onBoardingCard/onBoardingCard.component";
import { BrowserRouter as Router, Route, Routes,  Switch } from 'react-router-dom';
import SignUp from "./components/SignUp/signUp.component";
import SignIn from "./components/SignIn/signIn.component";
import SearchPage from "./components/SearchPage/SearchPage.component";
import Dashboard from "./components/dashboard/Dashboard.component";
import WordCloudComponent from "./components/top-themes/wordcloud";
import EmojiCloudComponent from "./components/top-themes/emojicloud";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Router>
      <Routes>
        <Route path="/onboarding" element={<OnboardingCard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/searchPage" element={<SearchPage />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wordcloud" element={<WordCloudComponent />} />
        <Route path="/emojicloud" element={<EmojiCloudComponent />} />
      </Routes>
    </Router>
    {/* <Footer /> */}
     {/* <Navbar />
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
      <Footer />  */}
    </>
  );
};

export default App;
