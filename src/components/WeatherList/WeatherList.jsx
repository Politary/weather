import React, { useCallback, useEffect, useState } from 'react';
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
    const [searchBarPosition, setSearchBarPosition] = useState([]);

    const handleSearchByName = () => {
        if (inputValue.trim && typeof inputValue === 'string')
            handleSearch(inputValue);
    };

    const handleSearch = (value) => {
        if (weather.state !== 'loading') {
            dispatch(getWeatherFetch(value));
            setInputValue('');
        }
    };

    const handleSearchBarMount = useCallback((ref) => {
        if (ref.current) {
            setSearchBarPosition(ref.current.getBoundingClientRect());
        }
    }, []);

    const filterCities = () => {
        setFilteredCities(
            citiesList.filter((city) => {
                return city.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase());
            })
        );
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        filterCities();
    };

    useEffect(() => {
        console.log(filteredCities);
    }, [filteredCities]);

    return (
        <div>
            <SearchWrapper>
                <SearchBar
                    handleInputChange={handleInputChange}
                    handleSearch={handleSearchByName}
                    inputValue={inputValue}
                    handleSearchBarMount={handleSearchBarMount}
                />
                <SearchButton
                    handleSearch={handleSearchByName}
                    inputValue={inputValue}
                >
                    Search
                </SearchButton>
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
                searchBarPosition={searchBarPosition}
                handleSearch={handleSearch}
            />
        </div>
    );
};
