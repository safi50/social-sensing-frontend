import React, {useState} from 'react';
import { FilterCheckbox, FilterSection, FilterTitle, FiltersContainer, FiltersHeading, FilterSearchBarContainer, FilterSearchIcon, FilterSearchInput, FilterHeadingContainer, CheckBoxContainer, CheckBoxLabel, ResetBtn, RefreshIcon, ApplyBtn, BigBtnContainer} from './Filters.styles';


const FilterSearchBar = () =>{
    return (
        <FilterSearchBarContainer>
            <FilterSearchIcon src="/search-btn-purple.svg"/>
            <FilterSearchInput placeholder="Search all filter" />
        </FilterSearchBarContainer>
    )
}


// Sidebar showing all the filters
const Filters = () => {
    const [sentimentOpen, setSentimentOpen] = useState(true)
    const [mediaOpen, setMediaOpen] = useState(true)
    const [countriesOpen, setCountriesOpen] = useState(true)
    const [languageOpen, setLanguageOpen] = useState(true)
    const [demographicsOpen, setDemographicOpen] = useState(true)
    const [deviceOpen, setDeviceOpen] = useState(true)



    const toggleSentimentDropdown = () => setSentimentOpen(!sentimentOpen);
    const toggleMediaDropdown = () => setMediaOpen(!mediaOpen);
    const toggleCountriesDropdown = () => setCountriesOpen(!countriesOpen);
    const toggleLanguageDropdown = () => setLanguageOpen(!languageOpen);
    const toggleDemographicDropdown = () => setDemographicOpen(!demographicsOpen);
    const toggleDeviceDropdown = () => setDeviceOpen(!deviceOpen);

    return (
      <FiltersContainer>
        <FiltersHeading>Filters</FiltersHeading>
        <FilterSearchBar />
        <FilterSection>
        <FilterHeadingContainer onClick={toggleSentimentDropdown}>
        <FilterTitle>
            Sentiment
        </FilterTitle>
        <span>{sentimentOpen ? '▼' : '▲'}</span>
        </FilterHeadingContainer>
        {sentimentOpen && <CheckBoxContainer>
            <FilterCheckbox>
            <input type="checkbox" id="positive"/>
            <CheckBoxLabel htmlFor="positive">Positive</CheckBoxLabel>
            </FilterCheckbox>
            <FilterCheckbox>
            <input type="checkbox" id="negative" />
            <CheckBoxLabel htmlFor="negative">Negative</CheckBoxLabel>
            </FilterCheckbox>
            <FilterCheckbox>
            <input type="checkbox" id="neutral" />
            <CheckBoxLabel htmlFor="neutral">Neutral</CheckBoxLabel>
            </FilterCheckbox>
            <FilterCheckbox>
            <input type="checkbox" id="important" />
            <CheckBoxLabel htmlFor="important">Important</CheckBoxLabel>
            </FilterCheckbox>
        </CheckBoxContainer>}
        </FilterSection>

        <FilterSection>
        <FilterHeadingContainer onClick={toggleMediaDropdown}>
        <FilterTitle>
            Media Type
        </FilterTitle>
        <span>{mediaOpen ? '▼' : '▲'}</span>
        </FilterHeadingContainer>
        {mediaOpen && <CheckBoxContainer>
        <FilterCheckbox>
            <input type="checkbox" id="twitterCheckbox"/>
            <CheckBoxLabel htmlFor="twitterCheckbox">Twitter</CheckBoxLabel>
        </FilterCheckbox>
        </CheckBoxContainer>}
        </FilterSection>

        <FilterSection>
        <FilterHeadingContainer onClick={toggleCountriesDropdown}>
        <FilterTitle>
            Countries
        </FilterTitle>
        <span>{countriesOpen ? '▼' : '▲'}</span>
        </FilterHeadingContainer>
        {countriesOpen && <CheckBoxContainer>
        <FilterCheckbox>
            <input type="checkbox" id="pakistanCheckbox"/>
            <CheckBoxLabel htmlFor="pakistanCheckbox">Pakistan</CheckBoxLabel>
        </FilterCheckbox>
        </CheckBoxContainer>}
        </FilterSection>

        <FilterSection>
        <FilterHeadingContainer onClick={toggleLanguageDropdown}>
        <FilterTitle>
            Language
        </FilterTitle>
        <span>{languageOpen ? '▼' : '▲'}</span>
        </FilterHeadingContainer>
        {languageOpen && <CheckBoxContainer>
        <FilterCheckbox>
            <input type="checkbox" id="urdu"/>
            <CheckBoxLabel htmlFor="urdu">Urdu</CheckBoxLabel>
        </FilterCheckbox>
        <FilterCheckbox>
            <input type="checkbox" id="english"/>
            <CheckBoxLabel htmlFor="english">English</CheckBoxLabel>
        </FilterCheckbox>
        </CheckBoxContainer>}
        </FilterSection>

        <FilterSection>
        <FilterHeadingContainer onClick={toggleDemographicDropdown}>
        <FilterTitle>
            Demographics
        </FilterTitle>
        <span>{demographicsOpen ? '▼' : '▲'}</span>
        </FilterHeadingContainer>
        {demographicsOpen && <CheckBoxContainer>    
        </CheckBoxContainer>}
        </FilterSection>

        <FilterSection>
        <FilterHeadingContainer onClick={toggleDeviceDropdown}>
        <FilterTitle>
            Devices
        </FilterTitle>
        <span>{deviceOpen ? '▼' : '▲'}</span>
        </FilterHeadingContainer>
        {deviceOpen && <CheckBoxContainer>
        <FilterCheckbox>
            <input type="checkbox" id="mobile"/>
            <CheckBoxLabel htmlFor="mobile">Mobile</CheckBoxLabel>
        </FilterCheckbox>
        <FilterCheckbox>
            <input type="checkbox" id="laptop"/>
            <CheckBoxLabel htmlFor="laptop">Laptop</CheckBoxLabel>
        </FilterCheckbox>
        </CheckBoxContainer>}
        </FilterSection>
        
        <FilterSection>
            <BigBtnContainer>
            <ResetBtn>
                <RefreshIcon src="/refresh-cw-svgrepo-com.svg"/>
                <span style={{marginLeft: '4px'}}>Reset</span>
            </ResetBtn>
            <ApplyBtn>
                Apply
            </ApplyBtn>
            </BigBtnContainer>
            
        </FilterSection>
      </FiltersContainer>
    );
  };
  
  export default Filters;