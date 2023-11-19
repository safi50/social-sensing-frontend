import React from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { DropdownIcon } from './worldwideDropdown.styles';
import Flag from 'react-world-flags'


const CountryCheckbox = ({country, code}) =>{
    return (
        <div>
            <input type="checkbox" style={{marginLeft: '5px', marginRight: '5px', backgroundColor: 'red'}}/>
            <Flag code={code} style={{ width: '15px', height: '15px', borderRadius: '100%', marginRight: '5px' }}/>
            {country}
        </div>
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

                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    Africa <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right'>
                        {renderCountryCheckboxes('Africa', 'AfricaCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    Asia <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right'>
                        {renderCountryCheckboxes('Asia', 'AsiaCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    Australia <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right'>
                        {renderCountryCheckboxes('Australia', 'AustraliaCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    Europe <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right'>
                        {renderCountryCheckboxes('Europe', 'EuropeCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    North America <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right'>
                    {renderCountryCheckboxes('NorthAmerica', 'NorthAmericaCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
                <Dropdown.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    South America <DropdownIcon src='/dropdown-arrow-svgrepo-com.svg' style={{ transform: 'rotate(-90deg)' }} />
                    <Dropdown.Submenu position='right'>
                    {renderCountryCheckboxes('SouthAmerica', 'SouthAmericaCode')}
                    </Dropdown.Submenu>
                </Dropdown.Item>
            </Dropdown>
        </div>
    );
};

export default WorldwideDropdown;