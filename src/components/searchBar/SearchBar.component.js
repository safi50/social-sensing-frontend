import React from 'react';
import {SearchBarContainer, 
    Dropdown,
    SearchInput,
    SearchIcon
} from './SearchBar.styles'
import WorldwideDropdown from '../worldwideDropdown/worldwideDropdown.component';
const SearchBar = ({style}) => {
    return (
        <SearchBarContainer style={style}>
            <WorldwideDropdown></WorldwideDropdown>
            <SearchInput placeholder="Search Hashtag, Brand or Event" />
            <SearchIcon src="/search-btn-purple.svg"/>
        </SearchBarContainer>
    )
}

export default SearchBar