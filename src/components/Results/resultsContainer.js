import styled from "styled-components";
import { useState, useContext } from "react";
import ResultCard from "./resultCard";
import ResultCardCompact from "./resultCardCompact";
import ResultCardStory from "./resultCardStory";
import ResultCardGrid from "./resultCardGrid";
import WordCloudComponent from "../top-themes/wordcloud";
import EmojiCloudComponent from "../top-themes/emojicloud";
import Select from "react-select";
import { TopResultsFilterContext } from "../../contexts/TopResultsFilter.context";
import profileImage from '../../assets/profile-pic.jpeg';
import sharedImage from '../../assets/cool-profile-picture.jpeg';

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
    background-color: #f1ebff;
    color: #6631f7;
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
  border-bottom: 3px solid transparent;
  font-size: 1.5rem;
  font-weight: 400;
  color: #111111;

  &.active {
    border-color: #6631f7;
    color: #6631f7;
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
  margin-bottom: 1rem; 
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

const WordCloudStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const ExportDropdown = styled(CustomSelect)`
  position: absolute;
  top: 48%;
  left: 84%;
  margin-top: 5px;
`;

// Define custom styles
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#6937f2",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "2px 20px",
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "1.5rem",
    fontWeight: "300",
  }),
  indicatorSeparator: () => {},
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    "& svg": { display: "none" },
  }),
  option: (provided, {isFocused}) => ({
    ...provided,
    backgroundColor: isFocused ? "#F1EBFF" : "white",
    fontSize: "1.25rem",
    fontWeight: "500",
    color: isFocused ? "#6631F7" : "#888888",
    margin: "0"
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const exportOptions = [
  { value: "Normal", label: "Normal" },
  { value: "PDF", label: "PDF" },
  { value: "XLS", label: "XLS" },
  { value: "CSV", label: "CSV" },
  { value: "PPT Landscape", label: "PPT Landscape" },
  { value: "PPT Portrait", label: "PPT Portrait" },
];


const ResultsCard = () => {
  const [activeTab, setActiveTab] = useState("topResults");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedLayout, setSelectedLayout] = useState("Normal");
  const [selectedExport, setSelectedExport] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("Bio");

  const {topResultMatch, setTopResultMatch, topResultRange, setTopResultRange, topResultSentiment, setTopResultSentiment} = useContext(TopResultsFilterContext)

  
  const generateRandomTweetsNormal = () => {
    const sentiments = ['Positive', 'Negative', 'Neutral'];
    const profiles = [
        { name: 'John Doe', handle: '@johndoe'},
        { name: 'Jane Smith', handle: '@janesmith'},
        { name: 'Alice Johnson', handle: '@alicejohnson'}
    ];

    const tweets = [];
    for (let i = 0; i < 13; i++) {
        const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];

        let randomTime = Math.floor(Math.random() * 24); // Random hour
        if (randomTime < 10) {
            randomTime = `0${randomTime}`;
        }
        const randomMinutes = Math.floor(Math.random() * 60); // Random minutes
        const randomHourString = `${randomTime}:${randomMinutes < 10 ? '0' : ''}${randomMinutes}`;
        const randomTimePublished = `${topResultRange} ${randomHourString}`;

        let sentiment = topResultSentiment;
        if (sentiment === 'none') {
            sentiment = sentiments[Math.floor(Math.random() * sentiments.length)];
        }

        const profileData = {
            name: randomProfile.name,
            handle: randomProfile.handle,
            profileImage: profileImage,
            content: 'Random tweet content here...',
            sharedImage: sharedImage,
            sentiment: sentiment,
            matches: topResultMatch,
            reach: `${(Math.random()*10).toFixed(1)}k`,
            engagement: `${(Math.random()*1000).toFixed(0)}k`,
            trending: `${(Math.random()*10).toFixed(1)}k`,
            timePublished: isNaN(topResultRange)? randomTimePublished: `${topResultRange} hours ago`,
            location: 'Pakistan',
            platform: "Twitter.com"
        };
        const additionalMetrics = {
          shares: `${(Math.random()*1000).toFixed(0)}k`,
          hearts: `${(Math.random()*1000).toFixed(0)}k`,
          users: `${(Math.random()*1000).toFixed(0)}k`
        }

        tweets.push([{profileData, additionalMetrics}]);
    }

    return tweets;
};


  const randomTweetsNormal = generateRandomTweetsNormal()

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLayoutChange = (event) => {
    setSelectedLayout(event.target.value);
  };

  const handleExportChange = (event) => {
    setSelectedExport(event.target.value);
  };

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  return (
    <Container>
      <OuterRow>
        <Row>
          <TabsContainer>
            <Tab
              className={activeTab === "topResults" ? "active" : ""}
              onClick={() => setActiveTab("topResults")}
            >
              Top Results&nbsp;
              <Img src="/danger-circle.svg" />
            </Tab>
            <Tab
              className={activeTab === "topThemes" ? "active" : ""}
              onClick={() => setActiveTab("topThemes")}
            >
              Themes&nbsp;
              <Img src="/danger-circle.svg" />
            </Tab>
          </TabsContainer>
        </Row>

        {activeTab === "topResults" ? (
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
              <option>Social Channels</option>
              <option value="facebook"> &nbsp;&nbsp;Facebook</option>
              <option value="twitter">&nbsp;&nbsp;Twitter</option>
              <option value="vine">&nbsp;&nbsp;Vine</option>
              <option value="youtube">&nbsp;&nbsp;Youtube</option>
              <option value="tiktok">&nbsp;&nbsp;Tiktok</option>
              <option value="disqus">&nbsp;&nbsp;Disqus</option>
            </CustomSelect>

            <CustomSelect onChange={handleLayoutChange} value={selectedLayout}>
              <option>Select layout</option>
              <option value="Normal">Normal</option>
              <option value="Compact">Compact</option>
              <option value="Stories">Stories</option>
              <option>Images</option>
              <option value="grid">&nbsp;&nbsp;- Grid</option>
              <option value="treemap">&nbsp;&nbsp;- Tree Map</option>
            </CustomSelect>
            {/* <ExportButton onClick={handleExportButton}>Export</ExportButton> */}
            <Select
              options={exportOptions}
              styles={customStyles}
              placeholder="Export"
              onChange={handleExportChange}
              value={selectedExport}
            />
          </Row>
        ) : (
          <Row>
            <CustomSelect onChange={handleThemeChange} value={selectedTheme}>
              <option>Select theme type</option>
              <option value="TopTheme">☆ Top Theme</option>
              <option value="Hashtags"># Hashtags</option>
              <option value="Account">@ Account</option>
              <option value="Bio">𝐓 Bio</option>
              <option value="Emojis">☺ Emojis</option>
            </CustomSelect>
          </Row>
        )}
      </OuterRow>

      {activeTab === "topResults" && (
        <div>
         {/* {[...Array(3)].map((_, index) => (
                <div key={index}>
                    {selectedLayout === "Normal" && <ResultCard />}
                    {selectedLayout === "Compact" && <ResultCardCompact />}
                </div>
            ))} */}
          {randomTweetsNormal.map((data, index) => (
            <div>
              {selectedLayout === "Normal" && 
                  <ResultCard profileData={data[0].profileData} additionalMetrics={data[0].additionalMetrics}/>
              }
              {selectedLayout === "Compact" &&
                  <ResultCardCompact profileData={data[0].profileData} additionalMetrics={data[0].additionalMetrics}/>
              }
              </div>
          ))}

          {selectedLayout === "Stories" && (

            <CardRow>
              {randomTweetsNormal.map((data, index)=>{
                 return <ResultCardStory data={data[0].profileData}/>
              })}
            </CardRow>
          )}

          {selectedLayout === "grid" && (
            <CardRow>
              {randomTweetsNormal.map((data, index)=>{
                 return <ResultCardGrid data={data[0].profileData}/>
              })}
            </CardRow>
          )}

          {/* {selectedLayout === "Stories" && (
            <CardRow>
              <ResultCardStory />
              <ResultCardStory />
              <ResultCardStory />
              <ResultCardStory />
              <ResultCardStory />
              <ResultCardStory />
              <ResultCardStory />
              <ResultCardStory />
            </CardRow>
          )} */}
          {/* {selectedLayout === "grid" && (
            <CardRow>
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
              <ResultCardGrid />
            </CardRow>
          )} */}
        </div>
      )}
      {activeTab === "topThemes" && (
        <WordCloudStyle>
          {selectedTheme === "Bio" && <WordCloudComponent />}
          {selectedTheme === "Emojis" && <EmojiCloudComponent />}
        </WordCloudStyle>
      )}
    </Container>
  );
};

export default ResultsCard;
