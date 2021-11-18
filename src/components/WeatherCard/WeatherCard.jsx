import React from 'react';
import {
    Panel,
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
            <Panel>
                <p>Current weather</p>
                <WeatherItem>{`City: ${name}`}</WeatherItem>
                <WeatherItem>
                    {weatherIcon ? (
                        <img
                            src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                            alt="weatherImage"
                        />
                    ) : null}
                    <TempContainer>
                        <div>{currentTemp}</div>
                        <div>{`Feels like ${feelsLike}`}</div>
                    </TempContainer>
                </WeatherItem>
                <p>{weather}</p>
            </Panel>
            <Panel>
                <p>{`Wind speed ${windSpeed}`}</p>
            </Panel>
        </StyledWeatherCard>
    );
};
