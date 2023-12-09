import styled from 'styled-components';
import { useState } from 'react';
import ResultCard from './resultCard';
import ResultCardCompact from './resultCardCompact';
import ResultCardStory from './resultCardStory';
import ResultCardGrid from './resultCardGrid';

// Existing Container
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  border-radius: 1rem;
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
`;

const CustomSelect = styled.select`
  height: 40px;
  width: 200px;
  border-radius: 0.6rem;
  border: 0.8px solid #888888;
  padding: 7px;
  font-size: 1.35rem;
  color: #888888;
  font-weight: 300;
    margin-left: 0.5rem;
    margin-right: 0.5rem;

  option:hover {
    background-color: #F1EBFF; 
    color: #6631F7; 
  }
`;

// Tabs Container
const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
`;

// Individual Tab
const Tab = styled.div`
  margin-left: 1rem;
  padding-bottom: 2rem;
  padding-right: 1.5rem;
  cursor: pointer;
  border-bottom: 3px solid transparent; // Invisible border for layout consistency
    font-size: 1.5rem;
    font-weight: 400;
    color: #111111;

  &.active {
    border-color: #6631F7;
  }
`;

const OuterRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Img = styled.img`
  width: 2rem;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; 
  justify-content: flex-start;
  margin-bottom: 1rem; // Space below each row of cards
`;
const ExportButton = styled.button`
    background-color: #6937f2;
    color: white;   
    border: none;
    border-radius: 5px;
    padding: 8px 20px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 300;
`;




const ResultsCard = () => {
  const [activeTab, setActiveTab] = useState('topResults');
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (


    <Container>
        <OuterRow>
            <Row>
      <TabsContainer>
        <Tab
          className={activeTab === 'topResults' ? 'active' : ''}
          onClick={() => setActiveTab('topResults')}
        >
         Top Themes&nbsp;
          <Img src="/danger-circle.svg" />
                  </Tab>
        <Tab
          className={activeTab === 'topThemes' ? 'active' : ''}
          onClick={() => setActiveTab('topThemes')}
        >
        Themes&nbsp;
        <Img src="/danger-circle.svg" />
        </Tab>
        </TabsContainer>

       </Row>
        <Row>
        <CustomSelect onChange={handleSelectChange} value={selectedOption}>
            <option>Sort By</option>
            <option value="Engagement">Engagement</option>
            <option value="PotentialReach">Potential Reach</option>
            <option value="TrendingScore">Trending Score</option>
            <option value="Random">Random</option>
            <option value="CommentCount">Comment Count</option>
            <option value="Published">Published</option>
            <option value="Found">Found</option>
            <option value="Alexa">Alexa</option>
            <option value="ReviewRating">Review Rating</option>
            <option >Social Channels</option>
            <option value="facebook"> &nbsp;&nbsp;Facebook</option>
            <option value="twitter">&nbsp;&nbsp;Twitter</option>
            <option value="vine">&nbsp;&nbsp;Vine</option>
            <option value="youtube">&nbsp;&nbsp;Youtube</option>
            <option value="tiktok">&nbsp;&nbsp;Tiktok</option>
            <option value="disqus">&nbsp;&nbsp;Disqus</option>

          </CustomSelect>

          <CustomSelect  onChange={handleSelectChange} value={selectedOption}>
            <option>Select layout</option>
            <option value="Normal"> Normal</option>
            <option value="Compact">Compact</option>
            <option value="Stories">Stories</option>
            <option >Images</option>
            <option value="grid">&nbsp;&nbsp;- Grid</option>
            <option value="treemap">&nbsp;&nbsp;- Tree Map</option>
          </CustomSelect>
          <ExportButton>Export</ExportButton>
        </Row>
      </OuterRow>
     <ResultCardCompact />  
     <ResultCardCompact />  
     <ResultCardCompact />  
     <ResultCardCompact />  
      
       {/* <CardRow>
        <ResultCardStory />
        <ResultCardStory />
        <ResultCardStory />
        <ResultCardStory />
        <ResultCardStory />
        <ResultCardStory />
        <ResultCardStory />
        <ResultCardStory />

      </CardRow> */}
    </Container>
  );
};

export default ResultsCard;