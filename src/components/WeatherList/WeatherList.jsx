import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAutoCompleteListFetch,
    getWeatherFetch,
    clearAutoCompleteList,
} from '../../store/main/main.slice';

import { SearchBar } from '../SearchBar/SearchBar';
import { SearchWrapper, WeatherWrapper } from './WeatherList.styles';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import { SearchButton } from '../SearchButton/SearchButton';
import { CitiesList } from '../CitiesList/CitiesList';

export const WeatherList = () => {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weather);
    const [inputValue, setInputValue] = useState('');
    const [searchBarPosition, setSearchBarPosition] = useState([]);

    const handleSearchByName = () => {
        if (weather.autocompleteList.cities[0]) {
            handleSearch(weather.autocompleteList.cities[0].coordinates);
        }
    };

    const handleSearch = (coordinates) => {
        if (weather.autocompleteList.cities[0]) {
            dispatch(getWeatherFetch(coordinates));
            dispatch(clearAutoCompleteList());
            setInputValue('');
        }
    };

    const handleSearchBarMount = useCallback((ref) => {
        console.log('handlesEARCHbARmOUNT');
        if (ref.current) {
            setSearchBarPosition(ref.current.getBoundingClientRect());
        }
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        if (inputValue.trim()) dispatch(getAutoCompleteListFetch(inputValue));
    }, [inputValue, dispatch]);

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
                <WeatherCard location={weather.location} />
            </WeatherWrapper>
            <CitiesList
                weather={weather}
                inputValue={inputValue}
                searchBarPosition={searchBarPosition}
                handleSearch={handleSearch}
            />
        </div>
    );
};
