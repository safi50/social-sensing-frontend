import styled from 'styled-components';
import { SearchBarContainer, SearchIcon, SearchInput } from '../worldwideDropdown/worldwideDropdown.styles';
import { DownloadButton } from '../dashboard/Dashboard.styles';
// import Dropdown from 'react-multilevel-dropdown';


export const FilterSearchBarContainer = styled(SearchBarContainer)`
`

export const FilterSearchIcon = styled(SearchIcon)`
`

export const FilterSearchInput = styled(SearchInput)`
`

export const FiltersContainer = styled.div`
  position: fixed; // To keep it on the right side
  top: 70px; // Adjust this value based on your navbar's height
  right: 0;
  width: 300px; // Adjust width as needed
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  padding: 10px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const FilterSection = styled.div`
  padding: 15px 5px;
  border-bottom: 1px solid #eaeaea;
`;

export const FilterTitle = styled.h5`
  font-weight: bold
`;

export const FilterCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 5px;
  label {
    margin-left: 5px;
  }
`;

export const FilterHeadingContainer = styled.div`
display: flex;
justify-content: space-between; 
align-content: center; 
margin-bottom: 5px
`

export const FiltersHeading = styled.h4`
  font-weight: bold;
  padding: 10px 0px 5px 5px;
`

export const CheckBoxContainer = styled.div`
`

export const CheckBoxLabel = styled.label`
  font-size: 12px
`

export const ResetBtn = styled(DownloadButton)`
background-color: transparent;
color: #6937F2;
border: 1px solid #6937F2;
width: 40%;
height: 40px
`

export const ApplyBtn = styled(DownloadButton)`
width: 40%;
height: 40px

`

export const RefreshIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  object-fit: cover;
`;

export const BigBtnContainer = styled.div`
  display: flex;
  justify-content: center
`