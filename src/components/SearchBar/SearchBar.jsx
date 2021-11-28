import React, { useRef, useEffect } from 'react';
import { StyledSearchBar } from './SearchBar.styles';

export const SearchBar = ({
    handleInputChange,
    handleSearch,
    inputValue,
    handleSearchBarMount,
}) => {
    const ref = useRef();
    useEffect(() => {
        handleSearchBarMount(ref);
    }, [handleSearchBarMount]);
    const handleInputSubmit = (e) => {
        if (e.code === 'Enter') {
            handleSearch();
        }
    };
    return (
        <StyledSearchBar
            ref={ref}
            type="text"
            placeholder="Search by city name"
            onChange={handleInputChange}
            onKeyDown={handleInputSubmit}
            value={inputValue}
        />
    );
};
