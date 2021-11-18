import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from '../SearchBar/SearchBar';
import { WeatherWrapper } from './WeatherList.styles';
import { WeatherCard } from '../WeatherCard/WeatherCard';

export const WeatherList = () => {
    const [data, setData] = useState({});
    const [location, setLocation] = useState({
        name: '',
        weather: '',
        weatherIcon: '',
        currentTemp: '',
        feelsLike: '',
        windSpeed: '',
    });

    const handleClick = async () => {
        console.log('click');
        const newData = await axios.get(
            `http://api.openweathermap.org/data/2.5/forecast?q=Moscow&units=metric&lang=russian&appid=c53bf3e244553ba293bc4ff420dc8478`
        );
        await setLocation({
            name: newData.data.city.name,
            weather: newData.data.list[0].weather[0].main,
            weatherIcon: newData.data.list[0].weather[0].icon,
            currentTemp: newData.data.list[0].main.temp,
            feelsLike: newData.data.list[0].main.feels_like,
            windSpeed: newData.data.list[0].wind.speed,
            isLoaded: true,
        });
        await setData(newData);
    };

    useEffect(() => {
        console.log(location);
        console.log(data);
    }, [location]);

    return (
        <div>
            <SearchBar />
            <button onClick={handleClick}>click</button>
            <WeatherWrapper isLoaded={location.isLoaded}>
                <WeatherCard location={location} />
            </WeatherWrapper>
        </div>
    );
};
