import React from 'react';
import {
    StyledWeatherCard,
    TempContainer,
    WeatherItem,
} from './WeatherCard.styles';

export const WeatherCard = (props) => {
    const {
        location: {
            name,
            weatherIcon,
            currentTemp,
            feelsLike,
            weather,
            windSpeed,
        },
    } = props;
    return (
        <StyledWeatherCard>
            <p>Current weather</p>
            <WeatherItem>{`City: ${name}`}</WeatherItem>
            <WeatherItem>
                <img
                    src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                    alt="weatherImage"
                />
                <TempContainer>
                    <div>{currentTemp}</div>
                    <div>{`Feels like ${feelsLike}`}</div>
                </TempContainer>
            </WeatherItem>
            <p>{weather}</p>
            <p>{`Wind speed ${windSpeed}`}</p>
        </StyledWeatherCard>
    );
};
