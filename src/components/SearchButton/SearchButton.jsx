import React from 'react';
import { StyledSearchButton } from './SearchButton.styles';
import Search from '../../images/icons/Search.svg';

export const SearchButton = ({ handleSearch, inputValue }) => {
    return (
        <StyledSearchButton onClick={() => handleSearch(inputValue)}>
            <img src={Search} alt="search" />
        </StyledSearchButton>
    );
};
