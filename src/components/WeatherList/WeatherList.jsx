import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from '../SearchBar/SearchBar';
import { WeatherWrapper } from './WeatherList.styles';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherCard } from '../WeatherCard/WeatherCard';
import { SearchButton } from '../SearchButton/SearchButton';

// import { weatherSubmit } from '../../store/main/main.actions';
import { weatherSubmit } from '../../store/main/main.reducers';

export const WeatherList = () => {
    const dispatch = useDispatch();
    const location = useSelector((state) => state.weatherReducer.location);
    const [inputValue, setInputValue] = useState('Moscow');

    const handleSearch = async () => {
        if (inputValue) {
            console.log('click');
            const newData = await axios.get(
                `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&units=metric&lang=russian&appid=c53bf3e244553ba293bc4ff420dc8478`
            );
            await dispatch(
                weatherSubmit({
                    name: newData.data.city.name,
                    weather: newData.data.list[0].weather[0].main,
                    weatherIcon: newData.data.list[0].weather[0].icon,
                    currentTemp: newData.data.list[0].main.temp,
                    feelsLike: newData.data.list[0].main.feels_like,
                    windSpeed: newData.data.list[0].wind.speed,
                    isLoaded: true,
                })
            );
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        console.log(location);
    }, [location, inputValue]);

    return (
        <div>
            <SearchBar handleInputChange={handleInputChange} />
            <SearchButton handleSearch={handleSearch} inputValue={inputValue}>
                Search
            </SearchButton>
            <WeatherWrapper isLoaded={location.isLoaded}>
                <WeatherCard location={location} />
            </WeatherWrapper>
        </div>
    );
};
