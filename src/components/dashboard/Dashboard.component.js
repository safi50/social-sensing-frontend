import React, { useContext, useEffect, useState } from "react";
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
  IconContainer,
  EditIcon,
  DeleteIcon,
  FilterCheckbox,
  CheckBoxLabel,
  FilterItemContainer,
  FilterItemDropdown,
  ApplyBtnMedium,
  SentimentFilterFooterContainer,
  BackIcon,
  BackContainer,
  BackText
} from "./Dashboard.styles";
import Navbar from "../navbar/Navbar.component";
import SaveSearchModal from "../saveSearchModal/SaveSearchModal.component";
import MySearchModal from "../mySearchesModal/MySearchesModal.component";
import { Outlet } from "react-router-dom";
import TopThemes from "../top-themes/TopThemes";
import { CompareKeywordContext } from "../../contexts/CompareKeyword.context";
import EditCompareKeywordModal from "../editCompareKeywordModal/EditCompareKeywordModal.component";
import zIndex from "@mui/material/styles/zIndex";
import { useNavigate, useLocation } from 'react-router-dom';

export const savedSearches = [
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

  const FilterApplicationFooter = ({filterType})=>{
    let togglefnc = null
    if (filterType == 'sentiment') togglefnc = toggleSentimentCheckboxes
    else if (filterType == 'language') togglefnc = toggleLanguageCheckboxes
    return(
      <SentimentFilterFooterContainer>
        <CrossBtn onClick={togglefnc}>
          <CrossIcon src="/cross-svgrepo-com.svg" />
        </CrossBtn>
        <ApplyBtnMedium>Apply</ApplyBtnMedium>
      </SentimentFilterFooterContainer>
    )
  }



  const { data } = useContext(CompareKeywordContext);
  const [showSaveSearchModal, setShowSaveSearchModal] = useState(false);
  const [showMySeachesModal, setShowMySearchesModal] = useState(false);
  const [showCompareKeywordEditModal, setShowCompareKeywordEditModal] = useState(false);
  const [showSentimentCheckboxes, setShowSentimentCheckboxes] = useState(false);
  const [showLanguageCheckboxes, setShowLanguageCheckboxes] = useState(false);

  const [saveSearches, setSaveSearches] = useState(savedSearches);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filters, setFilters] = useState({
    sentiment: "",
    language: "",
    date: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const mockPosts = generateMockData(50); // Generate 50 mock posts
    setPosts(mockPosts);
    setFilteredPosts(mockPosts);
  }, []);

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

  const handleCompareKeywordEditClose = () => setShowCompareKeywordEditModal(false);
  const handleCompareKeywordEditShow = () => setShowCompareKeywordEditModal(true);

  const handleSaveSearchClose = () => setShowSaveSearchModal(false);
  const handleSaveSearchShow = () => setShowSaveSearchModal(true);

  const handleMySearchesClose = () => setShowMySearchesModal(false);
  const handleMySearchesShow = () => setShowMySearchesModal(true);

  const toggleSentimentCheckboxes = () => {
    setShowSentimentCheckboxes(!showSentimentCheckboxes);
  };

  const toggleLanguageCheckboxes = () => {
    setShowLanguageCheckboxes(!showLanguageCheckboxes);
  };

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
        <BackContainer>
        <BackIcon src="/back-svgrepo-com.svg" onClick={() => {location.pathname == '/dashboard' ? navigate('/searchPage'): navigate('/dashboard')}}/>
        <BackText onClick={() => {location.pathname == '/dashboard' ? navigate('/searchPage'): navigate('/dashboard')}}>{location.pathname == '/dashboard' ? "Search": "Dashboard"}</BackText>
        </BackContainer>
        
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
            {data.map((item) => (
              <HashtagContainer>
                <PurpleCircle src="/purple-circle-svgrepo-com.svg" />
                <HashtagText>{item.name}
                </HashtagText>
                <IconContainer className="icon-container">
                  <EditIcon onClick={handleCompareKeywordEditShow}/>
                  <EditCompareKeywordModal show={showCompareKeywordEditModal} handleClose={handleCompareKeywordEditClose} currentHashtag={item.name}/>
                  <DeleteIcon/>
                </IconContainer>
              </HashtagContainer>
            ))}

            <CompareContainer onClick={()=>{navigate('compare-keyword')}}>
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
              <FilterItemContainer>
                <FilterItem onClick={toggleSentimentCheckboxes}>
                Sentiments <CountBox>2</CountBox>
              </FilterItem>
              {showSentimentCheckboxes && <FilterItemDropdown>
              <FilterCheckbox>
              <input type="checkbox" id="positive"/>
              <CheckBoxLabel htmlFor="positive">Positive</CheckBoxLabel>
              </FilterCheckbox>
              <FilterCheckbox>
              <input type="checkbox" id="negative"/>
              <CheckBoxLabel htmlFor="negative">Negative</CheckBoxLabel>
              </FilterCheckbox>
              <FilterCheckbox>
              <input type="checkbox" id="neutral"/>
              <CheckBoxLabel htmlFor="neutral">Neutral</CheckBoxLabel>
              </FilterCheckbox>
              <FilterCheckbox>
              <input type="checkbox" id="important"/>
              <CheckBoxLabel htmlFor="important">Important</CheckBoxLabel>
              </FilterCheckbox>
              <FilterApplicationFooter filterType={"sentiment"}/>
              </FilterItemDropdown>}
              </FilterItemContainer>
              

              {/* <FilterItem>
                Media type <CountBox>2</CountBox>
              </FilterItem> */}

              <FilterItemContainer>
              <FilterItem onClick={toggleLanguageCheckboxes}>
                Language <CountBox>3</CountBox>
              </FilterItem>
              {showLanguageCheckboxes && <FilterItemDropdown>
              <FilterCheckbox>
              <input type="checkbox" id="urdu"/>
              <CheckBoxLabel htmlFor="urdu">Urdu</CheckBoxLabel>
              </FilterCheckbox>
              <FilterCheckbox>
              <input type="checkbox" id="english"/>
              <CheckBoxLabel htmlFor="english">English</CheckBoxLabel>
              </FilterCheckbox>
              <FilterApplicationFooter filterType={"language"}/>
              </FilterItemDropdown>}
              </FilterItemContainer>


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
