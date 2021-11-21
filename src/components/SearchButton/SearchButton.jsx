import React from 'react';
import { StyledSearchButton } from './SearchButton.styles';
import Search from '../../images/icons/Search.svg';

export const SearchButton = ({ handleSearch }) => {
    return (
        <StyledSearchButton onClick={handleSearch}>
            <img src={Search} alt="search" />
        </StyledSearchButton>
    );
};
