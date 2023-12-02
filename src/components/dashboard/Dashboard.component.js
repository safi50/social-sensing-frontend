import React, {useEffect, useState} from "react";
import {
  DashboardContainer,
  HeaderContainer,
  Header,
  ButtonsContainer,
  RefreshButton,
  RefreshIcon,
  DownloadButton,
  DownloadIcon,
  SubHeadingContainer,
  HashtagContainer,
  PurpleCircle,
  HashtagText,
  CompareContainer,
  PurplePlus,
  CompareKeywordText,
  SaveSearchContainer,
  HeartIcon,
  SaveSerchText,
  BarIcon,
  DisabledContainer,
  FolderIcon,
  DisabledText,
  RightContainer,
  LeftContainer,
  SelectionContainer,
  FiltersContainer,
  DateContainer,
  SelectionHeading,
  FilterItem,
  MoreItem,
  CountBox,
  FilterItemsRow,
  DurationBtn,
  DateItemRow,
  DurationBtnSelected,
  DateInputContainer,
  DateInput,
  CrossIcon,
  CrossBtn,
  ResultsContainer,
  CardsContainer,
  ChartsContainer,
} from "./Dashboard.styles";
import Navbar from "../navbar/Navbar.component";
import Card from "../card/Card";
import SentimentsCard from "../sentiments-card/SentimentsCard";
import ChartComponent from "../chart/Chart";
import TopThemes from "../top-themes/TopThemes";
import SaveSearchModal from "../saveSearchModal/SaveSearchModal.component";


const saveSearches = [{name: 'car show', date: 'Jan 02, 2022', region: 'Islamabad'},
                        {name: 'fast food', date: 'Jan 09, 2022', region: 'Lahore'}]

const Dashboard = () => {
  const data1 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Lahorecarshow",
        data: [
          15000, 10000, 25000, 20000, 30000, 20000, 35000, 25000, 40000, 30000,
          45000, 35000,
        ],
        fill: false,
        borderColor: "#6631F7",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "#6631F7",
        pointBorderColor: "#6631F7",
      },
    ],
  };
  const data2 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Positive",
        data: [
          15000, 10000, 25000, 20000, 30000, 20000, 35000, 25000, 40000, 30000,
          45000, 35000,
        ],
        fill: false,
        borderColor: "#4FA531",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "#4FA531",
        pointBorderColor: "#4FA531",
      },

      {
        label: "Negative",
        data: [
          -15000, -10000, -25000, -20000, -30000, -20000, -35000, -25000,
          -40000, -30000, -45000, -35000,
        ],
        fill: false,
        borderColor: "#E60000",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "#E60000",
        pointBorderColor: "#E60000",
      },
    ],
  };

  const [showSaveSearchModal, setShowSaveSearchModal] = useState(false);


  function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  function addToDataset(name, region) {
    const newEntry = {
      name: name,
      date: formatDate(new Date()), // Gets today's date in the specified format
      region: region
    };
  
    saveSearches.push(newEntry); // Adds the new entry to the dataset
    console.log("dataset:", saveSearches)
  }

  const handleSaveSearchClose = () => setShowSaveSearchModal(false)
  const handleSaveSearchShow = () => setShowSaveSearchModal(true)

  return (
    <div style={{ backgroundColor: "#6937F2" }}>
      <Navbar />
      <DashboardContainer>
        <HeaderContainer>
          <Header>Listening Analysis</Header>
          <ButtonsContainer>
            <RefreshButton>
              <RefreshIcon src="/refresh-cw-svgrepo-com.svg" />
            </RefreshButton>
            <DownloadButton>
              <DownloadIcon src="/download-minimalistic-svgrepo-com.svg" />{" "}
              Download
            </DownloadButton>
          </ButtonsContainer>
        </HeaderContainer>
        <SubHeadingContainer>
          <LeftContainer>
            <HashtagContainer>
              <PurpleCircle src="/purple-circle-svgrepo-com.svg" />
              <HashtagText>#lahorecarshow</HashtagText>
            </HashtagContainer>
            <CompareContainer>
              <PurplePlus src="/plus-large-svgrepo-com.svg" />
              <CompareKeywordText>Compare keyword</CompareKeywordText>
            </CompareContainer>
          </LeftContainer>
          <RightContainer>
            <SaveSearchContainer onClick={handleSaveSearchShow}>
              <HeartIcon src="/heart-svgrepo-com.svg" />
              <SaveSerchText>Save Search</SaveSerchText>
            </SaveSearchContainer>
            <SaveSearchModal show={showSaveSearchModal} handleClose={handleSaveSearchClose} addToDataset={addToDataset}/>
            <BarIcon src="/bar-svgrepo-com.svg" />
            <DisabledContainer>
              <FolderIcon src="/folder-svgrepo-com.svg" />
              <DisabledText>My Searches</DisabledText>
            </DisabledContainer>
          </RightContainer>
        </SubHeadingContainer>
        <SelectionContainer>
          <FiltersContainer>
            <SelectionHeading>Filters</SelectionHeading>
            <FilterItemsRow>
              <FilterItem>
                Sentiments <CountBox>2</CountBox>
              </FilterItem>
             
              {/* <FilterItem>
                Media type <CountBox>2</CountBox>
              </FilterItem> */}
              <FilterItem>
                Language <CountBox>3</CountBox>
              </FilterItem>
              <FilterItem>
                Pakistan <CountBox>1</CountBox>
              </FilterItem>
             
              <MoreItem>
                <PurplePlus src="/plus-large-svgrepo-com.svg" />
                More
              </MoreItem>
            </FilterItemsRow>
          </FiltersContainer>
          <DateContainer>
            <SelectionHeading style={{ paddingLeft: "50px" }}>
              Date
            </SelectionHeading>
            <DateItemRow>
              <CrossBtn>
                <CrossIcon src="/cross-svgrepo-com.svg" />
              </CrossBtn>
              <BarIcon src="/bar-svgrepo-com.svg" />

              <DurationBtn>1d</DurationBtn>
              <DurationBtnSelected>7d</DurationBtnSelected>
              <DurationBtn>1M</DurationBtn>
              <DateInputContainer>
                <DateInput />
              </DateInputContainer>
            </DateItemRow>
          </DateContainer>
        </SelectionContainer>
        <ResultsContainer>
          <CardsContainer>
            <Card
              image={"/chat.svg"}
              title={"Total Results"}
              infoText={"348.7K"}
              percentage={"30%"}
            />
            <Card
              image={"/Impressions_likes.svg"}
              title={"Total Engagement"}
              infoText={"2.1K"}
              percentage={"30%"}
            />
            <SentimentsCard title={"Sentiments"} happy={"2.1K"} sad={"1.1K"} />
            <Card
              image={"/noun-antenna-4635475.svg"}
              title={"Reach"}
              infoText={"19.1M"}
              percentage={"30%"}
            />
          </CardsContainer>
          <ChartsContainer>
            <ChartComponent title={"Results over time"} data={data1} />
            <ChartComponent title={"Net sentiment over time"} data={data2} />
          </ChartsContainer>
          <TopThemes />
        </ResultsContainer>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
