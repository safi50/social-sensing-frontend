import React, {useState} from 'react';
import {SearchBarContainer, 
    Dropdown,
    SearchInput,
    SearchIcon
} from './SearchBar.styles'
import WorldwideDropdown from '../worldwideDropdown/worldwideDropdown.component';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({style, onClick, onChange}) => {
    const navigate = useNavigate();

    // const [searchQuery, setSearchQuery] = useState("");
    return (
        <SearchBarContainer style={style}>
            <WorldwideDropdown></WorldwideDropdown>
            <SearchInput placeholder="Search Hashtag, Brand or Event" onChange={onChange}/>
            <SearchIcon src="/search-btn-purple.svg" onClick={onClick}/>
        </SearchBarContainer>
    )
}

export default SearchBar