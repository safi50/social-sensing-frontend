import React, { useEffect, useState } from "react";
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
} from "./Dashboard.styles";
import Navbar from "../navbar/Navbar.component";

import SaveSearchModal from "../saveSearchModal/SaveSearchModal.component";
import MySearchModal from "../mySearchesModal/MySearchesModal.component";
import { Outlet } from "react-router-dom";
import TopThemes from "../top-themes/TopThemes";

const savedSearches = [
  {
    id: "0",
    name: "car show",
    date: "Jan 02, 2022",
    region: "Islamabad",
    hashtags: ["#Islamabad", "#Lahore"],
  },
  {
    id: "1",
    name: "fast food",
    date: "Jan 09, 2022",
    region: "Lahore",
    hashtags: ["#Islamabad"],
  },
  {
    id: "2",
    name: "car show",
    date: "Jan 02, 2022",
    region: "Islamabad",
    hashtags: ["#Islamabad", "#Lahore"],
  },
  {
    id: "3",
    name: "fast food",
    date: "Jan 09, 2022",
    region: "Lahore",
    hashtags: ["#Islamabad"],
  },
  {
    id: "4",
    name: "car show",
    date: "Jan 02, 2022",
    region: "Islamabad",
    hashtags: ["#Islamabad", "#Lahore"],
  },
  {
    id: "5",
    name: "fast food",
    date: "Jan 09, 2022",
    region: "Lahore",
    hashtags: ["#Islamabad"],
  },
  {
    id: "6",
    name: "car show",
    date: "Jan 02, 2022",
    region: "Islamabad",
    hashtags: ["#Islamabad", "#Lahore"],
  },
  {
    id: "7",
    name: "fast food",
    date: "Jan 09, 2022",
    region: "Lahore",
    hashtags: ["#Islamabad"],
  },
  {
    id: "8",
    name: "car show",
    date: "Jan 02, 2022",
    region: "Islamabad",
    hashtags: ["#Islamabad", "#Lahore"],
  },
  {
    id: "9",
    name: "fast food",
    date: "Jan 09, 2022",
    region: "Lahore",
    hashtags: ["#Islamabad"],
  },
  {
    id: "10",
    name: "car show",
    date: "Jan 02, 2022",
    region: "Islamabad",
    hashtags: ["#Islamabad", "#Lahore"],
  },
  {
    id: "11",
    name: "fast food",
    date: "Jan 09, 2022",
    region: "Lahore",
    hashtags: ["#Islamabad"],
  },
  {
    id: "12",
    name: "car show",
    date: "Jan 02, 2022",
    region: "Islamabad",
    hashtags: ["#Islamabad", "#Lahore"],
  },
  {
    id: "13",
    name: "fast food",
    date: "Jan 09, 2022",
    region: "Lahore",
    hashtags: ["#Islamabad"],
  },
  {
    id: "14",
    name: "car show",
    date: "Jan 02, 2022",
    region: "Islamabad",
    hashtags: ["#Islamabad", "#Lahore"],
  },
  {
    id: "15",
    name: "fast food",
    date: "Jan 09, 2022",
    region: "Lahore",
    hashtags: ["#Islamabad"],
  },
  {
    id: "16",
    name: "fast food",
    date: "Jan 09, 2022",
    region: "Lahore",
    hashtags: ["#Islamabad"],
  },
  {
    id: "17",
    name: "car show",
    date: "Jan 02, 2022",
    region: "Islamabad",
    hashtags: ["#Islamabad", "#Lahore"],
  },
  {
    id: "18",
    name: "fast food",
    date: "Jan 09, 2022",
    region: "Lahore",
    hashtags: ["#Islamabad"],
  },
  {
    id: "19",
    name: "fast food",
    date: "Jan 09, 2022",
    region: "Lahore",
    hashtags: ["#Islamabad"],
  },
];

const generateMockData = (numberOfPosts) => {
  const mockData = [];
  for (let i = 0; i < numberOfPosts; i++) {
    mockData.push({
      id: i,
      content: `Post content ${i}`,
      sentiment: ["positive", "negative", "neutral"][
        Math.floor(Math.random() * 3)
      ],
      language: ["English", "Spanish", "French"][Math.floor(Math.random() * 3)],
      date: new Date(
        2023,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28)
      ),
    });
  }
  return mockData;
};

const Dashboard = () => {
  const [showSaveSearchModal, setShowSaveSearchModal] = useState(false);
  const [showMySeachesModal, setShowMySearchesModal] = useState(false);
  const [saveSearches, setSaveSearches] = useState(savedSearches);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filters, setFilters] = useState({
    sentiment: "",
    language: "",
    date: "",
  });

  useEffect(() => {
    const mockPosts = generateMockData(50); // Generate 50 mock posts
    setPosts(mockPosts);
    setFilteredPosts(mockPosts);
  }, []);

  useEffect(() => {
    console.log("================================filters=====================");
    console.log(filters);
    console.log(
      "================================filteredPosts====================="
    );
    console.log(filteredPosts);
    console.log("=====================================================");
  }, [filters, filteredPosts]);

  useEffect(() => {
    const filtered = posts.filter((post) => {
      return (
        (filters.sentiment ? post.sentiment === filters.sentiment : true) &&
        (filters.language ? post.language === filters.language : true) &&
        (filters.date
          ? post.date.toISOString().split("T")[0] === filters.date
          : true)
      );
    });
    setFilteredPosts(filtered);
  }, [filters, posts]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  function formatDate(date) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  function addToDataset(name, region) {
    const newEntry = {
      id: String(Math.floor(Date.now() / 1000)),
      name: name,
      date: formatDate(new Date()), // Gets today's date in the specified format
      region: region,
      hashtags: ["#Islamabad"],
    };
    setSaveSearches([...saveSearches, newEntry]); // Adds the new entry to the dataset
    handleSaveSearchClose(); // Closes the modal
  }

  const handleSaveSearchClose = () => setShowSaveSearchModal(false);
  const handleSaveSearchShow = () => setShowSaveSearchModal(true);

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
            <SaveSearchModal
              show={showSaveSearchModal}
              handleClose={handleSaveSearchClose}
              addToDataset={addToDataset}
            />
            <BarIcon src="/bar-svgrepo-com.svg" />
            <DisabledContainer onClick={handleMySearchesShow}>
              <FolderIcon src="/folder-svgrepo-com.svg" />
              <DisabledText>My Searches</DisabledText>
            </DisabledContainer>
            <MySearchModal
              show={showMySeachesModal}
              handleClose={handleMySearchesClose}
              saveSearches={saveSearches}
              handleEditSearch={handleEditSearch}
              handleDeleteSearch={handleDeleteSearch}
            />
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

        <Outlet />
        <TopThemes />
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
