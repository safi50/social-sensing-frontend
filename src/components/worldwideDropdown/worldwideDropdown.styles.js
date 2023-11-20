import styled from 'styled-components';

export const Dropdown = styled.select`
  padding: 10px 10px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  color: #6937F2;
  background-color: #E8DEFE;
`;

export const DropdownIcon = styled.img`
    height: 2rem;
    width: 2rem;
    object-fit: cover;
    padding-left: 10px
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
