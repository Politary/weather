import React from 'react';
import { StyledSearchBar } from './SearchBar.styles';

export const SearchBar = ({ handleInputChange }) => {
    return (
        <StyledSearchBar
            type="text"
            placeholder="type city name"
            onChange={handleInputChange}
            defaultValue="Moscow"
        />
    );
};
