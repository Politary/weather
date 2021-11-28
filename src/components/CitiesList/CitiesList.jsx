import React from 'react';

export const CitiesList = ({ filteredCities, inputValue }) => {
    if (filteredCities && inputValue)
        return (
            <ul>
                {filteredCities.slice(0, 5).map((city) => (
                    <li key={city.id}>{city.name}</li>
                ))}
            </ul>
        );
    else return <div />;
};
