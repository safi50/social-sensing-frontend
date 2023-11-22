import React, {useState} from 'react';
import Dropdown from 'react-multilevel-dropdown';
import ColoredCheckbox from '../coloredCheckbox/ColoredCheckbox.component'
import {StyledNumberBox,StyledNumberBoxDiv, PrimaryListHeading, CountryListElement,  SecondaryListHeading, ContinentName, CountryList, ContinentListElement,ContinentCheckbox, DropdownIcon, SearchBarContainer, SearchIcon, SearchInput, CountryCheckbox, CountryFlag, DropdownTitle, StyledDropdown } from './worldwideDropdown.styles';


const WorldwideDropdown = () => {

    const [checkedStates, setCheckedStates] = useState({});

    const handleCheckboxChange = (event, key) => {
    setCheckedStates({
        ...checkedStates,
        [key]: event.target.checked,
      });
    };

    const continents = {
        Africa: ['Moroco', 'South Africa'],
        AfricaCode: ['MA', 'ZA'],
        Asia: ['Pakistan', 'India', 'China'],
        AsiaCode: ['PK', 'IN', 'CN'],
        Australia: ['Australia'],
        AustraliaCode: ['AU'],
        Europe: ['Germany', 'France', 'Finland'],
        EuropeCode: ['DE', 'FR', 'FI'],
        NorthAmerica: ['USA', 'Canada', 'Mexico'],
        NorthAmericaCode: ['US', 'CA', 'MX'],
        SouthAmerica: ['Argentina', 'Brazil', 'Uruguay'],
        SouthAmericaCode: ['AR', 'BR', 'UY']
    };

    const continentNames = Object.keys(continents).filter(key => !key.includes('Code'));

    const OneCountry = ({country, code}) =>{
    return (
        <CountryListElement >
            <ColoredCheckbox checked={checkedStates[country]} onChange={(event) => handleCheckboxChange(event, country)}/>
            <CountryFlag code={code}/>
            <span>{country}</span>
        </CountryListElement>
    )
}

const RegionSearchBar = () =>{
    return (
        <SearchBarContainer>
            <SearchIcon src="/search-btn-purple.svg"/>
            <SearchInput placeholder="Search regions / Countries" />
        </SearchBarContainer>
    )
}

    const renderCountryCheckboxes = (continent, continentCode) => {
        return continents[continent].map((country, index) => {
            const code = continents[continentCode][index];
            return <OneCountry key={code} country={country} code={code} />;
        });
    };

    return (
        <div>
            <StyledDropdown title={
                <DropdownTitle>
                    Worldwide 
                    <DropdownIcon src="/dropdown-arrow-svgrepo-com.svg" />
                </DropdownTitle>
            } position='right'>
                <Dropdown.Item>
                    <div><RegionSearchBar /></div>
                </Dropdown.Item>
                <Dropdown.Item>
                    <PrimaryListHeading>Regions</PrimaryListHeading>
                </Dropdown.Item>
                {continentNames.map(continent => (
                <ContinentListElement key={continent}>
                    <div>
                        <div>
                            <ColoredCheckbox checked={checkedStates[continent]} onChange={(event) => handleCheckboxChange(event, continent)}/>
                            <ContinentName>{continent}</ContinentName>
                        </div>
                    </div>
                    <div>
                    <StyledNumberBoxDiv>
                    <StyledNumberBox>3</StyledNumberBox>
                    <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)', marginTop: '8px' }} />
                    </StyledNumberBoxDiv>
                    </div>
                    <CountryList position='right'>
                        <SecondaryListHeading>{continent}</SecondaryListHeading>
                        {renderCountryCheckboxes(continent, `${continent}Code`)}
                    </CountryList>
                </ContinentListElement>
            ))}
            </StyledDropdown>
        </div>
    );
};

export default WorldwideDropdown;