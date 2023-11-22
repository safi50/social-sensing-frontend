import React from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { PrimaryListHeading, CountryListElement,  SecondaryListHeading, ContinentName, CountryList, ContinentListElement,ContinentCheckbox, DropdownIcon, SearchBarContainer, SearchIcon, SearchInput, CountryCheckbox, CountryFlag, DropdownTitle, StyledDropdown } from './worldwideDropdown.styles';

const OneCountry = ({country, code}) =>{
    return (
        <CountryListElement>
            <CountryCheckbox />
            <CountryFlag code={code}/>
            {country}
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


const WorldwideDropdown = () => {
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
                            <ContinentCheckbox type='checkbox' />
                            <ContinentName>{continent}</ContinentName>
                        </div>
                    </div>
                    <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)', marginTop: '8px' }} />
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