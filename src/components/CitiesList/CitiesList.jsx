import React from 'react';
import { StyledCitiesList } from './CitiesList.styles';
import { ListItem } from '../ListItem/ListItem';

export const CitiesList = ({
    filteredCities,
    inputValue,
    searchBarPosition,
    handleSearch,
}) => {
    if (filteredCities && inputValue)
        return (
            <StyledCitiesList searchBarPosition={searchBarPosition}>
                {filteredCities.slice(0, 10).map((city) => (
                    <ListItem
                        key={city.id}
                        name={city.name}
                        country={city.country}
                        id={city.id}
                        handleSearch={handleSearch}
                    />
                ))}
            </StyledCitiesList>
        );
    else return <div />;
};
