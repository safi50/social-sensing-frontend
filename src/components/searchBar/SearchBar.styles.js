import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFF;
  padding: 10px;
  border-radius: 5px;
`;

export const Dropdown = styled.select`
  padding: 10px 10px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  color: #6937F2;
  background-color: #E8DEFE;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.5em;
  color: black;
  background-color: transparent;
  width: 550px;
  &::placeholder {
    font-size: 1.1em;
    color: black;
    opacity: 0.5; // Adjust as needed
  }
  &:focus {
    outline: none;
  }
  
`;

export const SearchIcon = styled.img`
    height: 2.5rem;
    width: 2.5rem;
    object-fit: cover;
  `
