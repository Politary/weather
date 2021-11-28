import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherFetch } from '../../store/main/main.slice';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchWrapper, WeatherWrapper } from './WeatherList.styles';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import { SearchButton } from '../SearchButton/SearchButton';

import citiesList from '../../json/city.list.min.json';
import { CitiesList } from '../CitiesList/CitiesList';

export const WeatherList = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);
    const [inputValue, setInputValue] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);

    const handleSearch = () => {
        if (inputValue.trim() && weather.state !== 'loading') {
            dispatch(getWeatherFetch(inputValue));
            setInputValue('');
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setFilteredCities(
            citiesList.filter((city) => {
                return city.name.includes(inputValue);
            })
        );
    };

    useEffect(() => {});

    return (
        <div>
            <SearchWrapper>
                <SearchBar
                    handleInputChange={handleInputChange}
                    handleSearch={handleSearch}
                    inputValue={inputValue}
                />
                <SearchButton handleSearch={handleSearch}>Search</SearchButton>
            </SearchWrapper>
            <WeatherWrapper>
                <WeatherCard
                    location={weather.location}
                    state={weather.state}
                    errorCode={weather.errorCode}
                />
            </WeatherWrapper>
            <CitiesList
                filteredCities={filteredCities}
                inputValue={inputValue}
            />
        </div>
    );
};
