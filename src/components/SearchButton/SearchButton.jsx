import React from 'react';

export const SearchButton = ({ handleSearch, children }) => {
    return <button onClick={handleSearch}>{children}</button>;
};
