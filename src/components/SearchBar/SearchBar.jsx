import React from 'react';
import { StyledSearchBar } from './SearchBar.styles';

export const SearchBar = ({ handleInputChange, handleSearch, inputValue }) => {
    const handleInputSubmit = (e) => {
        if (e.code === 'Enter') {
            handleSearch();
        }
    };
    return (
        <StyledSearchBar
            type="text"
            placeholder="Search by city name"
            onChange={handleInputChange}
            onKeyDown={handleInputSubmit}
            value={inputValue}
        />
    );
};
