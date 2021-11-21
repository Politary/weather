import React from 'react';
import { StyledSearchBar } from './SearchBar.styles';

export const SearchBar = ({ handleInputChange }) => {
    return (
        <StyledSearchBar
            type="text"
            placeholder="Search by city name"
            onChange={handleInputChange}
            defaultValue="Moscow"
        />
    );
};
