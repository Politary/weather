import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherFetch } from '../../store/main/main.slice';

import { SearchBar } from '../SearchBar/SearchBar';
import {
    ErrorWrapper,
    SearchWrapper,
    WeatherWrapper,
} from './WeatherList.styles';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import { SearchButton } from '../SearchButton/SearchButton';
import Error from '../../images/icons/Error.svg';

export const WeatherList = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);
    const [inputValue, setInputValue] = useState('Moscow');

    const handleSearch = () => {
        if (inputValue.trim()) {
            dispatch(getWeatherFetch(inputValue));
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <SearchWrapper>
                <SearchBar handleInputChange={handleInputChange} />
                <SearchButton handleSearch={handleSearch}>Search</SearchButton>
            </SearchWrapper>
            <WeatherWrapper>
                <WeatherCard
                    location={weather.location}
                    isError={weather.isError}
                    errorCode={weather.errorCode}
                />
            </WeatherWrapper>
        </div>
    );
};
