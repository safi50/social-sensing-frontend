import styled from 'styled-components';
import Flag from 'react-world-flags';
import Dropdown from 'react-multilevel-dropdown';



export const DropdownIcon = styled.img`
    height: 2rem;
    width: 2rem;
    object-fit: cover;
    padding-left: 10px;
  `

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFF;
  padding: 5px 20px;
  border-radius: 5px;
  min-width: 0;
  flex-wrap: nowrap;
  border: 1px solid rgba(128, 128, 128, 0.3);
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 5px 5px;
  border: none;
  border-radius: 5px;
  color: black;
  background-color: transparent;
  width: 170px;
  &::placeholder {
    color: black;
    opacity: 0.4; // Adjust as needed
  }
  &:focus {
    outline: none;
  }
  
`;

export const SearchIcon = styled.img`
    height: 2rem;
    width: 2rem;
    object-fit: cover;
    filter: brightness(0);
    opacity: 0.3
  `

export const CountryCheckbox = styled.input.attrs({type: 'checkbox'})`
  margin-left: 5px;
  margin-right: 5px;
`

export const ContinentCheckbox = styled.input.attrs({type: 'checkbox'})`
`

export const CountryFlag = styled(Flag)`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
  object-fit: cover;
`;

export const DropdownTitle = styled.div`
  display: flex;
  align-items: center
`

export const DropdownBackground = styled(Dropdown)`
  background-color: #E8DEFE;
  color: #6937F2
`

export const StyledDropdown = styled(Dropdown)`
  background-color: #E8DEFE;
  color: #6937F2;
  border: none;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  padding-left: 7px
`;

export const PrimaryListHeading = styled.span`
  font-size: 12px;
  opacity: 0.7
`

export const SecondaryListHeading = styled.span`
padding-left: 5px;
padding-bottom: 10px;
display: inline-block;
opacity: 0.7;
font-size: 12px
`

export const ContinentListElement = styled(Dropdown.Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CountryListElement = styled.div`
padding-bottom: 10px
`

export const CountryList = styled(Dropdown.Submenu)`
color: black;
`;

export const ContinentName = styled.span`
padding-left: 10px
`

export const StyledNumberBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: #6937F2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 5px;
  margin-right: 10px
`;

export const StyledNumberBoxDiv = styled.div`
  display: flex;
  justifyContent: flex-end;
`;