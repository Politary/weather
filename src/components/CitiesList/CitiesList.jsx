import React from 'react';
import { StyledCitiesList } from './CitiesList.styles';
import { ListItem } from '../ListItem/ListItem';

export const CitiesList = ({
    weather,
    inputValue,
    searchBarPosition,
    handleSearch,
}) => {
    if (weather.autocompleteList.cities && inputValue)
        return (
            <StyledCitiesList searchBarPosition={searchBarPosition}>
                {weather.autocompleteList.cities.map((city) => (
                    <ListItem
                        key={city.name + city.country_name}
                        name={city.name}
                        coordinates={city.coordinates}
                        handleSearch={handleSearch}
                    />
                ))}
            </StyledCitiesList>
        );
    else return <div />;
};
