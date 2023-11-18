import React from 'react';
import {SearchBarContainer, 
    Dropdown,
    SearchInput,
    SearchIcon
} from './SearchBar.styles'

const SearchBar = ({style}) => {
    return (
        <SearchBarContainer style={style}>
            <Dropdown>
                <option>Worldwide</option>
                // Add more options as needed
            </Dropdown>
            <SearchInput placeholder="Search Hashtag, Brand or Event" />
            <SearchIcon src="/search-btn-purple.svg"/>
        </SearchBarContainer>
    )
}

export default SearchBar