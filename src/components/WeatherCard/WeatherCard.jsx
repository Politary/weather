import React from 'react';
import {
    FooterItem,
    Panel,
    WeatherTypeContainer,
    WeatherFooter,
    WeatherHeader,
    CurrentTemp,
    WeatherStat,
    StatValue,
    Country,
    Date,
    City,
    Weather,
} from './WeatherCard.styles';
import { unixDateToString } from '../../utils/utils';
import Error from '../../images/icons/Error.svg';
import { ErrorWrapper } from '../WeatherList/WeatherList.styles';

export const WeatherCard = (props) => {
    const {
        location: {
            name,
            country,
            unixDate,
            weatherIcon,
            currentTemp,
            feelsLike,
            weather,
            windSpeed,
            humidity,
            status,
            errorCode,
        },
    } = props;
    if (status === 'loaded' && errorCode === null) {
        return (
            <Panel>
                <WeatherHeader>
                    <div>
                        <City>{name}</City>
                        <Country>{country}</Country>
                    </div>
                    <Date>{unixDateToString(unixDate)}</Date>
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
                            <Weather>{weather}</Weather>
                        </WeatherTypeContainer>
                    </FooterItem>
                    <FooterItem>
                        <WeatherStat>
                            <span>Humidity:</span>
                            <StatValue>{`${humidity}%`}</StatValue>
                        </WeatherStat>
                        <WeatherStat>
                            <span>Wind:</span>
                            <StatValue>{`${windSpeed}km/h`}</StatValue>
                        </WeatherStat>
                        <WeatherStat>
                            <span>Feels like</span>
                            <StatValue>{` ${feelsLike}°`}</StatValue>
                        </WeatherStat>
                    </FooterItem>
                </WeatherFooter>
            </Panel>
        );
    } else if (status === 'error' && errorCode === 404) {
        return (
            <ErrorWrapper>
                <img src={Error} alt="error" />
                <span>Sorry, there is no such city</span>
            </ErrorWrapper>
        );
    } else if (status === 'error')
        return (
            <ErrorWrapper>
                <img src={Error} alt="error" />
                <span>{`Error ${errorCode} occurred :(`}</span>
            </ErrorWrapper>
        );
    else return <Panel />;
};
