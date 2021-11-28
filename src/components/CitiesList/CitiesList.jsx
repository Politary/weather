import React from 'react';
import { StyledCitiesList } from './CitiesList.styles';
import { ListItem } from '../ListItem/ListItem';

export const CitiesList = ({
    filteredCities,
    inputValue,
    searchBarPosition,
}) => {
    if (filteredCities && inputValue)
        return (
            <StyledCitiesList searchBarPosition={searchBarPosition}>
                {filteredCities.slice(0, 5).map((city) => (
                    <ListItem
                        key={city.id}
                        name={city.name}
                        country={city.country}
                    />
                ))}
            </StyledCitiesList>
        );
    else return <div />;
};
