import React from 'react';
import {
    FooterItem,
    Panel,
    WeatherTypeContainer,
    WeatherFooter,
    WeatherHeader,
    CurrentTemp,
    WeatherStat,
} from './WeatherCard.styles';

export const WeatherCard = (props) => {
    const {
        location: {
            name,
            data,
            weatherIcon,
            currentTemp,
            feelsLike,
            weather,
            windSpeed,
            humidity,
        },
    } = props;
    return (
        <Panel>
            <WeatherHeader>
                <span>{`${name}`}</span>
                <span>{data}</span>
            </WeatherHeader>
            <WeatherFooter>
                <FooterItem>
                    <CurrentTemp>{`${currentTemp}°`}</CurrentTemp>
                    <WeatherTypeContainer>
                        {weatherIcon ? (
                            <img
                                src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                                alt="weatherImage"
                            />
                        ) : null}
                        <span>{weather}</span>
                    </WeatherTypeContainer>
                </FooterItem>
                <FooterItem>
                    <WeatherStat>
                        <span>Humidity:</span>
                        <span>{`${humidity}%`}</span>
                    </WeatherStat>
                    <WeatherStat>
                        <span>Wind:</span>
                        <span>{`${windSpeed}km/h`}</span>
                    </WeatherStat>
                    <WeatherStat>
                        <span>Feels like</span>
                        <span>{` ${feelsLike}°`}</span>
                    </WeatherStat>
                </FooterItem>
            </WeatherFooter>
        </Panel>
    );
};
