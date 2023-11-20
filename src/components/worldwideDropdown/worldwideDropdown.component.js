import React from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { DropdownIcon, SearchBarContainer, SearchIcon, SearchInput } from './worldwideDropdown.styles';
import Flag from 'react-world-flags'


const CountryCheckbox = ({country, code}) =>{
    return (
        <div>
            <input type="checkbox" style={{marginLeft: '5px', marginRight: '5px', backgroundColor: 'red'}}/>
            <Flag code={code} style={{ width: '15px', height: '15px', borderRadius: '0%', marginRight: '5px', paddingTop: '3px'}}/>
            {country}
        </div>
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

    const renderCountryCheckboxes = (continent, continentCode) => {
        return continents[continent].map((country, index) => {
            const code = continents[continentCode][index];
            return <CountryCheckbox key={code} country={country} code={code} />;
        });
    };

    return (
        <div>
            <Dropdown title={
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    Worldwide 
                    <DropdownIcon src="/dropdown-arrow-svgrepo-com.svg" />
                </div>
            } style={{backgroundColor: '#E8DEFE', color: '#6937F2'}} position='right'>
                <Dropdown.Item>
                    <div><RegionSearchBar /></div>
                </Dropdown.Item>
                <Dropdown.Item>
                    <span style={{fontSize: '12px', opacity: '0.7'}}>Regions</span>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <div>
                    <div>
                        <input type='checkbox'></input>
                        <span style={{paddingLeft: '10px'}}>Africa</span>
                    </div>
                    </div>
                     
                    <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right' style={{color: 'black'}}>
                        <span style={{paddingLeft: '5px', paddingBottom: '10px', display: 'inline-block', opacity: '0.7', fontSize: '12px'}}>Africa</span>
                        {renderCountryCheckboxes('Africa', 'AfricaCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div>
                    <div>
                        <input type='checkbox'></input>
                        <span style={{paddingLeft: '10px'}}>Asia</span>
                    </div>
                    </div>
                    <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right' style={{color: 'black'}}>
                    <span style={{paddingLeft: '5px', paddingBottom: '10px', display: 'inline-block', opacity: '0.7', fontSize: '12px'}}>Asia</span>
                        {renderCountryCheckboxes('Asia', 'AsiaCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div>
                    <div>
                        <input type='checkbox'></input>
                        <span style={{paddingLeft: '10px'}}>Australia</span>
                    </div>
                    </div>
                    <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right' style={{color: 'black'}}>
                    <span style={{paddingLeft: '5px', paddingBottom: '10px', display: 'inline-block', opacity: '0.7', fontSize: '12px'}}>Australia</span>
                        {renderCountryCheckboxes('Australia', 'AustraliaCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div>
                    <div>
                        <input type='checkbox'></input>
                        <span style={{paddingLeft: '10px'}}>Europe</span>
                    </div>
                    </div>
                    <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right' style={{color: 'black'}}>
                    <span style={{paddingLeft: '5px', paddingBottom: '10px', display: 'inline-block', opacity: '0.7', fontSize: '12px'}}>Europe</span>
                        {renderCountryCheckboxes('Europe', 'EuropeCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div>
                    <div>
                        <input type='checkbox'></input>
                        <span style={{paddingLeft: '10px'}}>North America</span>
                    </div>
                    </div>
                    <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right' style={{color: 'black'}}>
                    <span style={{paddingLeft: '5px', paddingBottom: '10px', display: 'inline-block', opacity: '0.7', fontSize: '12px'}}>North America</span>
                    {renderCountryCheckboxes('NorthAmerica', 'NorthAmericaCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div>
                    <div>
                        <input type='checkbox'></input>
                        <span style={{paddingLeft: '10px'}}>South America</span>
                    </div>
                    </div>
                    <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right' style={{color: 'black'}}>
                    <span style={{paddingLeft: '5px', paddingBottom: '10px', display: 'inline-block', opacity: '0.7', fontSize: '12px'}}>South America</span>
                    {renderCountryCheckboxes('SouthAmerica', 'SouthAmericaCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
            </Dropdown>
        </div>
    );
};

export default WorldwideDropdown;