import React, { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import {
    ErrorWrapper,
    SearchWrapper,
    WeatherWrapper,
} from './WeatherList.styles';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import { SearchButton } from '../SearchButton/SearchButton';
import Error from '../../images/icons/Error.svg';

import { getWeatherFetch } from '../../store/main/main.slice';

export const WeatherList = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);
    const [inputValue, setInputValue] = useState('Moscow');

    const handleSearch = () => {
        dispatch(getWeatherFetch(inputValue));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        console.log(weather.location.name);
    }, [weather.location, inputValue]);

    return (
        <div>
            <SearchWrapper>
                <SearchBar handleInputChange={handleInputChange} />
                <SearchButton handleSearch={handleSearch}>Search</SearchButton>
            </SearchWrapper>
            {!weather.isError ? (
                <WeatherWrapper
                    name={weather.location.name}
                    isLoading={weather.location.isLoading}
                >
                    <WeatherCard location={weather.location} />
                </WeatherWrapper>
            ) : (
                <ErrorWrapper>
                    <img src={Error} alt="error" />
                    <span>Sorry, there is no such city</span>
                </ErrorWrapper>
            )}
        </div>
    );
};
